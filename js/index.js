function setTema(tema) {
      document.documentElement.setAttribute('data-theme', tema);
      localStorage.setItem('nevlekTema', tema);
      updateIcon(tema);
    }
    
   function updateIcon(tema) {
  const icon = document.getElementById('tema-icon');
  if (!icon) return; // ✅ evita erro

  if (tema === 'escuro') {
    icon.className = 'iconMod escuro';
    icon.title = 'Modo Escuro';
  } else {
    icon.className = 'iconMod claro';
    icon.title = 'Modo Claro';
  }
}
    function detectTema() {
      const armazenamento = localStorage.getItem('nevlekTema');
      if (armazenamento) return armazenamento;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
    }
   
   document.addEventListener('DOMContentLoaded', () => {
  const botaoo = document.getElementById('tema-controle');

  let currentTema = detectTema();
  setTema(currentTema);

  if (!botaoo) {
    console.warn("tema-controle não encontrado nesta página.");
    return; // ✅ evita erro
  }

  botaoo.addEventListener('click', () => {
    currentTema = currentTema === 'escuro' ? 'claro' : 'escuro';
    setTema(currentTema);
  });
});
    