// ✅ Controla a UI do modal de autenticação (sem depender de Firebase diretamente)
// Usa window.handleRegister e window.handleLogin definidos em auth.js
console.log("modal-auth.js Inicio com sucesso.");
document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("modal-login");
  const btnAbrir = document.getElementById("logarConta");
  const btnFechar = document.getElementById("closeModal");
  const tabRegister = document.getElementById("tab-register");
  const tabLogin = document.getElementById("tab-login");
  const panelRegister = document.getElementById("register-panel");
  const panelLogin = document.getElementById("login-panel");
  const togglePassBtns = document.querySelectorAll(".toggle-pass");

  if (!modalEl) {
    console.warn("modal-auth.js: #modal-login não encontrado.");
    return;
  }

  // ✅ Abrir modal
  function abrirModalAuth() {
    modalEl.style.display = "flex";
    requestAnimationFrame(() => {
      modalEl.classList.remove("oculto");
    });
    document.body.style.overflow = "hidden";
  }

  // ✅ Fechar modal
  function fecharModalAuth() {
    modalEl.classList.add("oculto");
    document.body.style.overflow = "";

    setTimeout(() => {
      if (modalEl.classList.contains("oculto")) {
        modalEl.style.display = "none";
      }
    }, 350);
  }

  // Expondo globalmente
  window.abrirModalAuth = abrirModalAuth;
  window.fecharModalAuth = fecharModalAuth;

  if (btnAbrir) {
    btnAbrir.addEventListener("click", (e) => {
      e.preventDefault();
      abrirModalAuth();
    });
  }

  if (btnFechar) {
    btnFechar.addEventListener("click", (e) => {
      e.preventDefault();
      fecharModalAuth();
    });
  }

  // Fecha ao clicar fora da caixa
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) {
      fecharModalAuth();
    }
  });

  // ✅ Tabs
  function ativarAba(tipo) {
    const isRegister = tipo === "register";
    if (tabRegister && tabLogin && panelRegister && panelLogin) {
      tabRegister.classList.toggle("active", isRegister);
      tabLogin.classList.toggle("active", !isRegister);

      tabRegister.setAttribute("aria-selected", isRegister ? "true" : "false");
      tabLogin.setAttribute("aria-selected", !isRegister ? "true" : "false");

      panelRegister.classList.toggle("active", isRegister);
      panelLogin.classList.toggle("active", !isRegister);
    }
  }

  if (tabRegister) {
    tabRegister.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("register");
    });
  }

  if (tabLogin) {
    tabLogin.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("login");
    });
  }

  // ✅ Mostrar/ocultar senha
 togglePassBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const field = btn.closest(".password-field");
    if (!field) return;

    const input = field.querySelector("input");
    if (!input) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    // ✅ Alterna a classe .show
    btn.classList.toggle("show", isPassword);
  });
});

  // ✅ SUBMITS (cadastro / login) integrados com auth.js

  const registerForm = document.getElementById("register-panel");
  const loginForm = document.getElementById("login-panel");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nome = registerForm.nome?.value.trim();
      const email = registerForm.email?.value.trim();
      const senha = registerForm.senha?.value.trim();
      const confirmar = registerForm["confirmar-senha"]?.value.trim();
      const errorBox = registerForm.querySelector(".error-msg");

      if (errorBox) errorBox.textContent = "";

      if (!nome || !email || !senha || !confirmar) {
        if (errorBox) errorBox.textContent = "Preencha todos os campos.";
        return;
      }

      if (senha.length < 6) {
        if (errorBox) errorBox.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
      }

      if (senha !== confirmar) {
        if (errorBox) errorBox.textContent = "As senhas não coincidem.";
        return;
      }

      if (typeof window.handleRegister !== "function") {
        console.error("handleRegister não definido. Verifique auth.js.");
        if (errorBox) errorBox.textContent = "Falha interna. Tente novamente mais tarde.";
        return;
      }

      const res = await window.handleRegister({ nome, email, senha, errorBox });

      if (res.ok) {
        // Sucesso → alterna para aba de login ou fecha modal
        ativarAba("login");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = loginForm.email?.value.trim();
      const senha = loginForm.senha?.value.trim();
      const errorBox = loginForm.querySelector(".error-msg");

      if (errorBox) errorBox.textContent = "";

      if (!email || !senha) {
        if (errorBox) errorBox.textContent = "Informe email e senha.";
        return;
      }

      if (typeof window.handleLogin !== "function") {
        console.error("handleLogin não definido. Verifique auth.js.");
        if (errorBox) errorBox.textContent = "Falha interna. Tente novamente mais tarde.";
        return;
      }

      const res = await window.handleLogin({ email, senha, errorBox });

      if (res.ok) {
        fecharModalAuth();
      }
    });
  }

  console.log("modal-auth.js final com sucesso.");
});