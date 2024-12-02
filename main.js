/*

* THIS IS THE MAIN JAVASCRIPT OF MY PORTFOLIO

*/

// Header ul li selected item
const menuItems = document.querySelectorAll(".nav__ul__li"); 

menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        menuItems.forEach(li => li.classList.remove("menu-active"));
        item.classList.add("menu-active");
    });
});



// Header fixed on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }



  // Deslizamiento del nav
const enlaces = document.querySelectorAll(' ul li');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    const href = this.querySelector('a').getAttribute('href');
    const destino = document.querySelector(href);

    destino.scrollIntoView({
      behavior: 'smooth'
    });
    e.preventDefault(); // Evita que el enlace realice su comportamiento predeterminado
  });
});




  // Mobile Nav //   
const bodyOverly = document.getElementById("mobile-body-overly");
const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobile-nav");
const sliderControls = document.querySelector(".slider-controls");

function toggleMobileNav() {
    // Verifica el estado actual de bodyOverly para determinar si el menÃº estÃ¡ abierto o cerrado
    const isOpen = document.getElementById("mobile-body-overly").style.display === "block";

    // Alterna los estilos y las clases basÃ¡ndose en el estado actual
    document.getElementById("mobile-body-overly").style.display = isOpen ? "none" : "block";
    menuIcon.classList.toggle("fa-bars", isOpen);
    menuIcon.classList.toggle("fa-times", !isOpen);
    document.getElementById("mobile-nav").style.left = isOpen ? "-260px" : "0";
    sliderControls.style.display = isOpen ? "flex" : "none";
}

// Add event listener for mobile menu button
const mobileBtn = document.getElementById("mobileNavBtn2");
mobileBtn.addEventListener('click', toggleMobileNav);

// Add event listeners for links in mobile nav
const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileNav);
});



// WRITER EFFECT

const text = document.querySelector(".textW-Second"); 
let dev = "Estudiante";

function textLoad() {
  setTimeout(() => {
    text.textContent = dev;
  }, 0);
}

textLoad();
setInterval(textLoad, 12000)


// Button Scroll Intro

document.getElementById('btnScroll').addEventListener('click', function() {
  window.scrollBy({
    top: 600, // Desplazamiento en pÃ­xeles hacia abajo
    behavior: 'smooth' // Hace que el scroll sea suave
  });
});



// Buttons to scrollBar Proyects 

const btnScrollBar = document.getElementById("btnExV-1"); 
const btnScrollBar2 = document.getElementById("btnExV-01"); 
const scrollBar = document.getElementById("ScrollBar-1");
const btnScrollBar3 = document.getElementById("btnExV-2"); 
const btnScrollBar4 = document.getElementById("btnExV-02"); 
const scrollBar1 = document.getElementById("ScrollBar-2");
const btnScrollBar5 = document.getElementById("btnExV-3"); 
const btnScrollBar6 = document.getElementById("btnExV-03"); 
const scrollBar2 = document.getElementById("ScrollBar-3");
const btnScrollBar7 = document.getElementById("btnExV-4"); 
const btnScrollBar8 = document.getElementById("btnExV-04"); 
const scrollBar3 = document.getElementById("ScrollBar-4");



btnScrollBar.addEventListener("click", () => {
  scrollBar.style.top = "100px";
  btnScrollBar.style.display = "none";
  btnScrollBar2.style.display = "block";
})

btnScrollBar2.addEventListener("click", () => {
  scrollBar.style.top = "200px";
  btnScrollBar2.style.display = "none";
  btnScrollBar.style.display = "block";
})
btnScrollBar3.addEventListener("click", () => {
  scrollBar1.style.top = "100px";
  btnScrollBar3.style.display = "none";
  btnScrollBar4.style.display = "block";
})
btnScrollBar4.addEventListener("click", () => {
  scrollBar1.style.top = "200px";
  btnScrollBar4.style.display = "none";
  btnScrollBar3.style.display = "block";
})
btnScrollBar5.addEventListener("click", () => {
  scrollBar2.style.top = "100px";
  btnScrollBar5.style.display = "none";
  btnScrollBar6.style.display = "block";
})
btnScrollBar6.addEventListener("click", () => {
  scrollBar2.style.top = "200px";
  btnScrollBar6.style.display = "none";
  btnScrollBar5.style.display = "block";
})
btnScrollBar7.addEventListener("click", () => {
  scrollBar3.style.top = "100px";
  btnScrollBar7.style.display = "none";
  btnScrollBar8.style.display = "block";
})
btnScrollBar8.addEventListener("click", () => {
  scrollBar3.style.top = "200px";
  btnScrollBar8.style.display = "none";
  btnScrollBar7.style.display = "block";
})


// Back To Top Button

document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.querySelector('.back-to-top');

  function toggleBackToTopButton() {
      if (window.scrollY > 100) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  }

  window.addEventListener('scroll', toggleBackToTopButton);

  backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});



// CHANGE THE LANGUAGE 


const btnLeng = document.getElementById("btnLeng");
const flagCon = document.querySelector(".flags-container");
const lengI = document.getElementById("lengI");

// Agregamos el evento al botÃ³n
btnLeng.addEventListener("click", () => {
  // Obtenemos el valor actual de la propiedad "right"
  const currentRight = getComputedStyle(flagCon).right;

  // Verificamos si estÃ¡ en la posiciÃ³n inicial (-100px)
  if (currentRight === "-100px") {
    // Mover la barra a la derecha (0px)
    flagCon.style.right = "0px";
    // Cambiamos el icono
    lengI.classList.replace("fa-chevron-left", "fa-chevron-right");
  } else {
    // Volvemos la barra a la posiciÃ³n inicial (-100px)
    flagCon.style.right = "-100px";
    // Cambiamos el icono nuevamente
    lengI.classList.replace("fa-chevron-right", "fa-chevron-left");
  }
});



// Languages


const flagsElement = document.getElementById("flags-container");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`js/languages/${language}.json`);
  const texts = await requestJson.json();

  localStorage.setItem('language', language);

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];

  }

  if (language === 'en') {
    dev = "Developer";
    Ent = "Entrepreneur";
    Des = "Designer";
  } else if (language === 'es') {
    dev = "Desarrollador";
    Ent = "Emprendedor";
    Des = "DiseÃ±ador";
  }

  // Dispatch a custom event to notify form.js of the language change
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
};

flagsElement.addEventListener("click",(e)=>{
  changeLanguage(e.target.parentElement.dataset.language);
  
  changeDesign();
});

changeDesign = () => {
  const textW = document.querySelector(".textW-First");
  textW.style.margin = "0 0 0 50px";
}


if (localStorage.getItem("language") !== null) changeLanguage(localStorage.getItem("language"));