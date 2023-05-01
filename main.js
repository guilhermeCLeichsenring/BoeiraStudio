// const home = document.querySelector("#home")
// const services = document.querySelector("#services")
// const aboult = document.querySelector("#aboult")
// const contact = document.querySelector("#contact")

// window.addEventListener('scroll', onScroll)

// onScroll()
// function onScroll() {
//   showNavOnScroll()
//   showBackToTopButtonOnScroll()

//   activateMenuAtCurrentSection(home)
//   activateMenuAtCurrentSection(services)
//   activateMenuAtCurrentSection(about)
//   activateMenuAtCurrentSection(contact)
// }

// function activateMenuAtCurrentSection(section) {
//   const targetLine = scrollY + innerHeight / 2

//   // verificar se a seção passou da linha
//   // quais dados vou precisar?
//   const sectionTop = section.offsetTop
//   const sectionHeight = section.offsetHeight
//   const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

//   // verificar se a base está abaixo da linha alvo

//   const sectionEndsAt = sectionTop + sectionHeight
//   const sectionEndPassedTargetline = sectionEndsAt <= targetLine

//   // limites da seção
//   const sectionBoundaries =
//     sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

//   const sectionId = section.getAttribute('id')
//   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

//   menuElement.classList.remove('active')
//   if (sectionBoundaries) {
//     menuElement.classList.add('active')
//   }
// }

// function showNavOnScroll() {
//   if (scrollY > 0) {
//     navigation.classList.add('scroll')
//   } else {
//     navigation.classList.remove('scroll')
//   }
// }

// function showBackToTopButtonOnScroll() {
//   console.log(scrollY) 
//   if (scrollY > 600) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// }

// ========================= Menu Expandido =========================

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// ========================= Scroll Reveal =========================

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duartion: 100
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  services .card,
  #about,
  #about header,
  #about .content`)

// ========================= carousel =========================

// const carousel = document.querySelector(".carousel");

// // ==== dragging

// let isDragStart = false;

// const dragStart = () =>{
//   isDragStart = true;
// }

// const dragging = (e) => {
//       if(!isDragStart) return;
//       carousel.scrollLeft = e.pageX;
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart)

