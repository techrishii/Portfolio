/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
   letters = homeText.textContent.trim().split(''),
   angleStep = 360 / letters.length

homeText.textContent = ''

letters.forEach((char, i) => {
   const span = document.createElement('span')
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)`
   homeText.appendChild(span)
})

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
   strings: ['Programmer', 'Web Developer', 'Gamer'],
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true,
})
/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/
const swiperWork = new Swiper('.work__swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.work__button-next',
      prevEl: '.work__button-prev',
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false
   }
})
/*=============== SERVICES ACCORDION ===============*/
const servicesCards = document.querySelectorAll('.services__card'),
   servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services__card'),
         isOpen = currentCard.classList.contains('services-open')

      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
      })

      if (!isOpen) {
         currentCard.classList.replace('services-close', 'services-open')
      }
   })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
   contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
   e.preventDefault()

   try {
      await emailjs.sendForm('service_1c4ag1x', 'template_b890rb7', '#contact-form', 'd2Z1TvZUTiuANbmu3')

      contactMessage.textContent = 'Message sent successfully ✅'
      contactForm.reset()
   } catch (error) {
      contactMessage.textContent = 'Message not sent (service error) ❌'
   } finally {
      setTimeout(() => contactMessage.textContent = '', 5000)
   }
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')

   window.scrollY >= 350
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id,
         top = section.offsetTop - 50,
         height = section.offsetHeight,
         link = document.querySelector('.nav__menu a[href*=' + id + ']')

      if (!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0

const cursorMove = () => {

   const zoom = parseFloat(getComputedStyle(document.body).zoom) || 1

   cursor.style.left = `${mouseX / zoom}px`
   cursor.style.top = `${mouseY / zoom}px`
   cursor.style.transform = 'translate(-50%, -50%)'

   requestAnimationFrame(cursorMove)
}
document.addEventListener('mousemove', (e) => {
   mouseX = e.clientX
   mouseY = e.clientY
})

cursorMove()

const a = document.querySelectorAll('a, button')
a.forEach(item => {
   item.addEventListener('mouseover', () => {
      cursor.classList.add('hide-cursor')
   })
   item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hide-cursor')
   })
})
/*=============== SCROLLREVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1200,
   delay: 300,
   easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
})

sr.reveal(`.home__subtitle`)

sr.reveal(`.home__title`, {delay: 600})
sr.reveal(`.home__description`, {delay: 900})
sr.reveal(`.home__box-1`, {delay: 1200, rotate: {z: -20}})
sr.reveal(`.home__box-2`, {delay: 1300, rotate:{z: -30}})
sr.reveal(`.home__box-3`, {delay: 1400, rotate: {z: -40}})
sr.reveal(`.home__img`, {delay: 1700, distance: '-60px'})
sr.reveal(`.home__circle`, {delay: 2000, distance: '-100px'})

sr.reveal(`.about__title`)
sr.reveal(`.about__description`, {delay: 600})
sr.reveal(`.about__button`, {delay: 900})

sr.reveal(`.work__swiper`)

sr.reveal(`.services__card:nth-child(odd)`, {interval: 200, origin: 'left', distance: '100px'})
sr.reveal(`.services__card:nth-child(even)`, {interval: 200, origin: 'right', distance: '100px'})

sr.reveal(`.skills__description`)
sr.reveal(`.skills__card`, {delay: 600, interval: 200})
sr.reveal(`.skills__profession`, {delay: 900})
sr.reveal(`.skills__list`, {delay: 1200, interval: 200})

sr.reveal('.testimonials__container')
sr.reveal(`.contact_form`)
sr.reveal(`.contact__link`, {delay: 600, interval: 200})
sr.reveal('.footer__container')

/*=============== SUBTLE CODE RAIN ===============*/
const codeRain = document.getElementById('code-rain')

if (codeRain) {
   const context = codeRain.getContext('2d')
   const characters = '01{}<>/[]=>+*'
   let streams = []
   let animationId

   const setupRain = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      codeRain.width = width * ratio
      codeRain.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      // More streams, mostly around the left and right edges.
      streams = [
         { x: width * .025, y: height * .12, speed: .48, length: 10 },
         { x: width * .07, y: height * .48, speed: .40, length: 8 },
         { x: width * .13, y: height * .72, speed: .55, length: 11 },
         { x: width * .20, y: height * .25, speed: .44, length: 9 },
         { x: width * .27, y: height * .88, speed: .38, length: 7 },

         { x: width * .73, y: height * .14, speed: .46, length: 9 },
         { x: width * .81, y: height * .61, speed: .52, length: 11 },
         { x: width * .88, y: height * .33, speed: .41, length: 8 },
         { x: width * .94, y: height * .78, speed: .57, length: 10 },
         { x: width * .98, y: height * .06, speed: .43, length: 8 }
      ]
   }

   const drawRain = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      context.clearRect(0, 0, width, height)
      context.font = '15px monospace'
      context.textAlign = 'center'

      streams.forEach(stream => {
         for (let i = 0; i < stream.length; i++) {
            const y = stream.y - i * 19

            if (y < 0 || y > height) continue

            const alpha = Math.max(.06, .66 - i * .06)
            context.fillStyle = `hsla(110, 90%, 70%, ${alpha})`

            context.fillText(
               characters[Math.floor(Math.random() * characters.length)],
               stream.x,
               y
            )
         }

         stream.y += stream.speed

         if (stream.y > height + stream.length * 20) {
            stream.y = -20 - Math.random() * 180
         }
      })

      animationId = requestAnimationFrame(drawRain)
   }

   setupRain()
   drawRain()

   window.addEventListener('resize', setupRain)

   document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
         cancelAnimationFrame(animationId)
      } else {
         drawRain()
      }
   })
}
