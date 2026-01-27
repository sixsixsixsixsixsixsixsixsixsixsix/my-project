const burger = document.getElementById('hamburger');
const nav = document.querySelector('nav.nav');
const toTop = document.getElementById('toTop');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// кнопка наверх
window.addEventListener('scroll', () => {
  if(window.scrollY > 400){
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});
