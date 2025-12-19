console.log("🔥 AUTH.JS INICIOU");

import { auth } from "/Nshop/firebase-config.js";

// Estado global
window.usuarioLogado = null;
window.dadosUsuario = null;

// UI
const userNameEl  = document.getElementById("userName");
const btnLogoutEl = document.getElementById("btnLogout");
const btnLoginEl  = document.getElementById("logarConta");

//  ATUALIZA UI
function atualizarUIUsuario(user) {
  if (!user) {
    window.usuarioLogado = null;
    window.dadosUsuario = null;

    if (userNameEl) {
      userNameEl.style.display = "none";
      userNameEl.textContent = "";
    }
    if (btnLogoutEl) btnLogoutEl.style.display = "none";
    if (btnLoginEl)  btnLoginEl.style.display  = "inline-flex";

    return;
  }

  window.usuarioLogado = user;
  window.dadosUsuario  = user;

  // Nome imediato
  let nome = user.displayName || localStorage.getItem("tempUserName") || user.email;

  if (userNameEl) {
    userNameEl.style.display = "inline-flex";
    userNameEl.textContent = nome;
  }
  if (btnLogoutEl) btnLogoutEl.style.display = "inline-flex";
  if (btnLoginEl)  btnLoginEl.style.display  = "none";

  // Remove nome temporário quando sincronizar
  if (user.displayName) {
    localStorage.removeItem("tempUserName");
  }
}


//  OBSERVADOR

firebase.auth().onAuthStateChanged((user) => {
  console.log("onAuthStateChanged:", user?.email || "sem usuário");
  atualizarUIUsuario(user);
});


//  LOGOUT

if (btnLogoutEl) {
  btnLogoutEl.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signOut();
      console.log("Logout feito com sucesso");
    } catch (erro) {
      console.error("Erro ao deslogar:", erro);
    }
  });
}


//  PROTEÇÃO DE PÁGINAS

window.exigirLoginAntes = function (acaoSeLogado) {
  if (window.usuarioLogado) {
    acaoSeLogado();
    return;
  }
  if (window.abrirModalAuth) window.abrirModalAuth();
};

window.protegerPagina = function () {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) window.location.href = "/Nshop/index.html";
  });
};


//  CADASTRO

window.handleRegister = async function ({ nome, email, senha, errorBox }) {
  try {
    if (errorBox) errorBox.textContent = "Cadastrando...";

    const cred = await firebase.auth().createUserWithEmailAndPassword(email, senha);

    // Nome imediato
    localStorage.setItem("tempUserName", nome);

    await cred.user.updateProfile({ displayName: nome });

    if (errorBox) errorBox.textContent = "";
    console.log("Cadastro Firebase OK:", cred.user.email);

    // FECHA MODAL
    if (window.fecharModalAuth) window.fecharModalAuth();

    return { ok: true };
  } catch (erro) {
    console.error("Erro Firebase cadastro:", erro);
    if (errorBox) {
      errorBox.textContent =
        traduzErroAuth(erro.code) || "Erro ao cadastrar. Tente novamente.";
    }
    return { ok: false, erro };
  }
};


//  LOGIN

window.handleLogin = async function ({ email, senha, errorBox }) {
  try {
    if (errorBox) errorBox.textContent = "Entrando...";

    const cred = await firebase.auth().signInWithEmailAndPassword(email, senha);

    if (errorBox) errorBox.textContent = "";
    console.log("Login Firebase OK:", cred.user.email);

    // FECHA MODAL
    if (window.fecharModalAuth) window.fecharModalAuth();

    return { ok: true };
  } catch (erro) {
    console.error("Erro Firebase login:", erro);
    if (errorBox) {
      errorBox.textContent =
        traduzErroAuth(erro.code) || "Erro ao entrar. Tente novamente.";
    }
    return { ok: false, erro };
  }
};


//  TRADUÇÃO DE ERROS

function traduzErroAuth(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "Este e-mail já está em uso.";
    case "auth/invalid-email":
      return "E-mail inválido.";
    case "auth/weak-password":
      return "Senha muito fraca (mínimo 6 caracteres).";
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "E-mail ou senha incorretos.";
    default:
      return null;
  }
}

window.authPronto = true;
console.log("🔥 AUTH.JS TERMINOU");