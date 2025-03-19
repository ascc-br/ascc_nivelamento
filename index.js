document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nivel1").addEventListener("click", () => {
    document.getElementById("quadro").src = "./nivel1.html";
  });

  document.getElementById("nivel2").addEventListener("click", () => {
    document.getElementById("quadro").src = "./nivel2.html";
  });

  document.getElementById("nivel3").addEventListener("click", () => {
    document.getElementById("quadro").src = "./nivel3.html";
  });
});
