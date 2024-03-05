const menu = document.getElementById('hamburger-menu')

menu.addEventListener('click', () => {
  console.log('click')
  menu.classList.toggle('active')
})
