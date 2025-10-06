// public/dev-scripts/dev-a11y-scan.js
(function(){
  function getAccessibleName(el){
    if(el.getAttribute('aria-label')) return el.getAttribute('aria-label').trim();
    const labelled = el.getAttribute('aria-labelledby');
    if(labelled){ const ref = document.getElementById(labelled); if(ref) return ref.innerText.trim();}
    if(el.title) return el.title.trim();
    const txt = el.innerText || el.textContent || '';
    if(txt.trim()) return txt.trim();
    const imgAlt = el.querySelector('img[alt]');
    if(imgAlt && imgAlt.getAttribute('alt').trim()) return imgAlt.getAttribute('alt').trim();
    return '';
  }

  function scanButtons(){
    document.querySelectorAll('button, a[role="button"], [role="button"]').forEach(el=>{
      if(!getAccessibleName(el)) console.warn('A11Y: control has no accessible name', el);
    });
  }

  document.addEventListener('DOMContentLoaded', scanButtons);
  (function(history){
    const push = history.pushState;
    history.pushState = function(){ push.apply(history, arguments); setTimeout(scanButtons, 200); };
  })(window.history);
})();
