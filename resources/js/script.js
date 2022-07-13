const toggleMobileMenu = () => {
  let nav = document.getElementsByTagName('nav')[0];
  if(nav.offsetWidth > 0) {
    nav.style.width = '0';
  } else {
    nav.style.width = '100vw';
  }
};
window.onload = () => {
  ['mobile-hamburger', 'mobile-close'].forEach(id => {
    let elm = document.getElementById(id);
    ['click', 'touch'].forEach(evt => { elm.addEventListener(evt, toggleMobileMenu); });
  });
};
window.onresize = () => {
  let s = window.innerWidth;
  let n = document.getElementsByTagName('nav')[0];
  if(s >= 800 && (n.style.width === '100vw' || n.style.width === '0px')) {
    n.style.width = '';
  }
};
