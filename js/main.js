var WA_NUMBER = "6281138116867";

var nav = document.querySelector(".nav");
function onScroll(){ nav.classList.toggle("solid", window.scrollY > 40); }
window.addEventListener("scroll", onScroll); onScroll();

document.querySelector(".burger").addEventListener("click", function(){
  document.querySelector(".links").classList.toggle("open");
  nav.classList.add("solid");
});

var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("show"); io.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });

document.querySelectorAll("[data-wa]").forEach(function(a){
  var text = a.getAttribute("data-wa") || "Halo Greensky, saya tertarik dengan early bird inquiry.";
  a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  a.target = "_blank"; a.rel = "noopener";
});

var form = document.getElementById("waForm");
if(form){
  var params = new URLSearchParams(location.search);
  if(params.get("lokasi")) form.lokasi.value = params.get("lokasi");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var nama = form.nama.value.trim(), msg = form.pesan.value.trim();
    var err = document.getElementById("err");
    if(nama.length < 2){ err.textContent = "Mohon isi nama Anda."; return; }
    if(msg.length < 5){ err.textContent = "Mohon tulis pesan Anda."; return; }
    err.textContent = "";
    var text = "Halo Greensky Co-living 🌴\n\n" +
      "Nama: " + nama + "\n" +
      (form.email.value.trim() ? "Email: " + form.email.value.trim() + "\n" : "") +
      "Lokasi: " + form.lokasi.value + "\n" +
      (form.tanggal.value ? "Rencana masuk: " + form.tanggal.value + "\n" : "") +
      "Durasi: " + form.durasi.value + "\n\n" + msg;
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  });
}
