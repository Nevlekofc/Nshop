document.addEventListener("DOMContentLoaded", () => {
  const usernameEl = document.getElementById("username");
  const profilePicEl = document.getElementById("profile-pic");
  const nameInput = document.getElementById("name-input");
  const editor = document.getElementById("editor");
  const toggleButton = document.getElementById("toggle-button");
  const btnLogout = document.getElementById("btnLogout");

  let currentUser = null;

  // Detectar offline
  function isOffline() {
    return !navigator.onLine;
  }

  function savePendingChanges(data) {
    const pending = getPendingChanges();
    const updated = { ...pending, ...data };
    localStorage.setItem("pendingProfile", JSON.stringify(updated));
  }

  function getPendingChanges() {
    return JSON.parse(localStorage.getItem("pendingProfile") || "{}");
  }

  async function syncPendingProfile() {
    const pending = getPendingChanges();
    if (!currentUser || !pending) return;

    try {
      await currentUser.updateProfile(pending);
      localStorage.removeItem("pendingProfile");
    } catch (err) {
      console.error("Erro ao sincronizar:", err);
    }
  }

  window.addEventListener("online", syncPendingProfile);

  // 🔥 COMPAT: correto
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/Nshop/index.html";
      return;
    }

    currentUser = user;

    const pending = getPendingChanges();

    usernameEl.textContent =
      pending.displayName || user.displayName || "Usuário";

    profilePicEl.src =
      pending.photoURL ||
      user.photoURL ||
      "/Nshop/imagem/avatar/default.webp";

    btnLogout.style.display = "inline-flex";

    if (navigator.onLine) syncPendingProfile();
  });

  // Logout compat
  btnLogout.addEventListener("click", async () => {
    await firebase.auth().signOut();
    window.location.href = "/Nshop/index.html";
  });

  // 🔥 AGORA SIM: função global
  window.openEditor = function () {
    const isOpen = editor.style.display === "block";

    if (isOpen) {
      editor.style.display = "none";
      toggleButton.textContent = "Editar";
    } else {
      editor.style.display = "block";
      nameInput.value = (currentUser && currentUser.displayName) || "";

      toggleButton.textContent = "Fechar";
    }
  };

  window.setPic = function (src) {
    if (!currentUser) return;

    profilePicEl.src = src;

    if (isOffline()) {
      savePendingChanges({ photoURL: src });
    } else {
      currentUser.updateProfile({ photoURL: src });
    }
  };

  window.uploadPic = function (event) {
    const file = event.target.files[0];
    if (!file || !currentUser) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      profilePicEl.src = dataUrl;

      if (isOffline()) {
        savePendingChanges({ photoURL: dataUrl });
      } else {
        currentUser.updateProfile({ photoURL: dataUrl });
      }
    };
    reader.readAsDataURL(file);
  };

  window.saveProfile = async function () {
    if (!currentUser) return;

    const newName = nameInput.value.trim();
    if (!newName) return;

    usernameEl.textContent = newName;

    if (isOffline()) {
      savePendingChanges({ displayName: newName });
    } else {
      await currentUser.updateProfile({ displayName: newName });
    }

    editor.style.display = "none";
    toggleButton.textContent = "Editar";
  };
});
