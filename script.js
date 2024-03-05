// import people from './data/people'

const hamburgerMenu = document.getElementById('hamburger-menu')
const menu = document.getElementById('nav-menu')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')
  menu.classList.toggle('active')
})

window.onload = function () {
  const loadData = () => {
    fetch('people.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          handlePeopleData(data)
        }
      })
      .catch((error) => console.log(error))
  }

  // Call loadData function with handleData as the callback
  loadData()
}

const handlePeopleData = (data) => {
  const aboutSection = document.getElementById('about-section-inner')
  const people = data.people

  if (people) {
    personHTML = people.forEach((person) => {
      const el = document.createElement('div')
      el.classList.add('about-person')
      el.innerHTML = `<img src="./icons/logo-neo-secondary.png"/><p>${person.name}</p>`
      aboutSection.appendChild(el)
    })
  }
}
