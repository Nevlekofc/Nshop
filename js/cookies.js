const banner = document.getElementById('cookie-banner')
    const btnAcceptAll = document.getElementById('cookie-accept-all')
    const btnRejectAll = document.getElementById('cookie-reject-all')
    const btnSettings = document.getElementById('cookie-settings-btn')
    const btnSave = document.getElementById('cookie-save')
    const btnClose = document.getElementById('cookie-close')
    const panel = document.getElementById('cookie-panel')
    const inputAnalytics = document.getElementById('cookie-analytics')
    const inputMarketing = document.getElementById('cookie-marketing')
    const STORAGE_KEY = 'cookie_consent'
    
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) banner.classList.remove('hidden');
    
    btnAcceptAll.onclick = () => {
      saveConsent({analytics:true, marketing:true})
      banner.classList.add('hidden')
    }
    
    btnRejectAll.onclick = () => {
      saveConsent({analytics:false, marketing:false})
      banner.classList.add('hidden')
    }
    
    btnSave.onclick = () => {
      saveConsent({
        analytics: inputAnalytics.checked,
        marketing: inputMarketing.checked
      })
      banner.classList.add('hidden')
    }
    
    btnSettings.onclick = () => {
      panel.hidden = !panel.hidden
    }
    
    btnClose.onclick = () => {
     banner.classList.add('hidden') 
    }
    
    function saveConsent(prefs) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
      applyPreferences(prefs)
    }
    
    // Aqui você conecta scripts reais
    function applyPreferences(prefs){
      // Se analytics permitido, carregar Google Analytics
      if(prefs.analytics){
        // loadAnalytics();
      }

      // Se marketing permitido, carregar pixel de anúncios
      if(prefs.marketing){
        // loadMarketingPixel();
      }
    }