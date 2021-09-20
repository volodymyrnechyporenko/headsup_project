// menu

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.sidebar');

if(iconMenu) {
  iconMenu.addEventListener('click', (b) => {
    iconMenu.classList.toggle('fa-bars');
    iconMenu.classList.toggle('fa-times');
    menuBody.classList.toggle('_active');
  });
}

if(menuBody) {
  menuBody.addEventListener('click', (c) => {
    iconMenu.classList.remove('fa-times');
    iconMenu.classList.add('fa-bars');
    menuBody.classList.remove('_active');
  })
}

// back to top

let mybutton = document.querySelector(".scrollToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// lazy loading blocks

const options = {
  root: null,
  rootMargin: '0',
  threshold: 0.6
}

const targets = document.querySelectorAll('.hide')

const lazyLoad = (target) => {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.replace('hide', 'show') : entry.target.classList.remove('show')
    })
  });
  observer.observe(target);
}

targets.forEach(lazyLoad);