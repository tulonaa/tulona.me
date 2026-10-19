(function(){
  var root=document.documentElement, sel=document.getElementById('theme-select');
  function apply(v){ if(v==='light'||v==='dark'){root.setAttribute('data-theme',v)}else{root.removeAttribute('data-theme')} }
  try{var s=localStorage.getItem('tulona-theme'); if(s){sel.value=s; apply(s)}}catch(e){}
  sel.addEventListener('change',function(){apply(sel.value); try{localStorage.setItem('tulona-theme',sel.value)}catch(e){}});
  var btn=document.getElementById('copy'), mail=document.getElementById('mail');
  if(btn&&mail){btn.addEventListener('click',function(){
    function done(){btn.textContent='Copied'; setTimeout(function(){btn.textContent='Copy address'},1800)}
    function fallback(){var r=document.createRange(); r.selectNodeContents(mail); var g=window.getSelection(); g.removeAllRanges(); g.addRange(r); btn.textContent='Selected, press copy'}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(mail.textContent.trim()).then(done,fallback)}else{fallback()}
  })}
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  Array.prototype.forEach.call(document.querySelectorAll('.rot'),function(rot){
    var w=rot.querySelectorAll('span'), i=0;
    if(w.length<2)return;
    setInterval(function(){
      w[i].classList.remove('on');
      i=(i+1)%w.length;
      void w[i].offsetWidth;
      w[i].classList.add('on');
    },2600);
  });
})();
