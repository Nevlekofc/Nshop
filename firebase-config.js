console.log("🔥 firebase-config.js INICIOU");

import "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js";

// Configuração
const firebaseConfig = {
  apiKey: "AIzaSyDMBe9jT9Zc8LInMIksSN04zJYFudLDA94",
  authDomain: "nevlekecomerce.firebaseapp.com",
  projectId: "nevlekecomerce",
  storageBucket: "nevlekecomerce.firebasestorage.app",
  messagingSenderId: "842332406760",
  appId: "1:842332406760:web:2515fea222d96e55819a5d",
  measurementId: "G-FHHX7J7JGG"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta auth
export const auth = firebase.auth();

console.log("🔥 firebase-config.js TERMINOU");