document.addEventListener("DOMContentLoaded", () => {
  const linkPerfil = document.getElementById("linkPerfil");

  if (linkPerfil) {
    linkPerfil.addEventListener("click", (e) => {
      e.preventDefault();
      window.exigirLoginAntes(() => {
        window.location.href = "/Nshop/lib/perfil.html";
      });
    });
  }
});