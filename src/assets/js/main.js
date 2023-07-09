const menu = document.querySelector('#menu');

document.addEventListener('scroll', () => {
  window.scrollY > 150 ? menu.classList.add('bg-visible') : menu.classList.remove('bg-visible')
})