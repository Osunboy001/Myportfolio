const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const navLink = document.querySelector('.nav-links')





  window.addEventListener("load", () => {
    document.querySelectorAll(".skill-fill").forEach(bar => {
      bar.style.width = bar.dataset.percent + "%";

    });
      
  });



  // Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 300) {
      el.classList.add("active");
    }
  });
});



  //CONTACT
      const contactForm = document.querySelector('.contact-form')
      contactForm.addEventListener('submit', (e) => {

     const name = document.getElementById('name').value
     const myEmail = document.getElementById('email').value
     const userMessage = document.getElementById('message').value

     const sellerEmail = 'morakinyoifeoluwa10@gmail.com'
     const subject = encodeURIComponent(`Message from ${name}`)
     const body = encodeURIComponent(`Name: ${name} \n Email: ${myEmail}\n\n Message: ${userMessage} `)


     window.location.href = `mailto:${sellerEmail}? subject =${subject}&body= ${body}`
     console.log('working fine')
      })


      
    //FOOTER

    const currentYear = document.getElementById('year')

    window.addEventListener('DOMContentLoaded', () => {
      if(currentYear) {
        currentYear.textContent= new Date().getFullYear()
      }
    })



document.addEventListener("DOMContentLoaded", () => {

  const preloader = document.getElementById("preloader");
  const main = document.querySelector(".maincontent");

  // DEBUG CHECK (VERY IMPORTANT)
  if (!preloader || !main) {
    console.error("Preloader or main content not found");
    return;
  }

  // Initial state
  preloader.style.display = "flex";
  preloader.style.opacity = "1";
  main.style.opacity = "0";

  // Fake loading time (UX)
 

    // Fade out preloader
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "1";

    setTimeout(() => {
      preloader.style.display = "none";
      main.style.opacity = "1";
    }, 1500);

  },2000);




  
  const typed = new Typed('#typed', {
    strings: ["Web Developer", "Graphic Designer", "Problem Solver"],
    typeSpeed: 100,   
    
        typeSpeed: 100,     
    backSpeed: 50,      
    backDelay: 1000,  
    loop: true           
 
  });
  

function myFunction() {

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
       console.log("greatly ")
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
 
}


// SWITCH


function applyBgOnScreen(query, color, co) {
  const mq = window.matchMedia(query);

  function update() {
    if (mq.matches) {
        a.forEach(a => {
              a.style.color = co;
      });

      navLink.style.backgroundColor = color;

      
    } else {
      document.body.style.backgroundColor = "";
    }
  }

  update();
  mq.addEventListener("change", update);
}


  
  const a =  document.querySelectorAll(".a")

let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.querySelector('.themeSwitch');


const lastSvg = themeSwitch.querySelector("svg:last-child");
const firstSvg = themeSwitch.querySelector("svg:first-child");


const enableDarkmode = () => {

     applyBgOnScreen("(max-width: 900px)", "white", "black" );


  lastSvg.style.display = "block";
  firstSvg.style.display = "none"
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');

};





const disableDarkmode = () => {

      
      // APPLy FUNCTION
applyBgOnScreen( "(max-width:900px)", "black", "white")
 





   firstSvg.style.display = "block";
lastSvg.style.display = "none"
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkmode');
  
firstSvg.style.display = "inline-block";
};

if (darkmode === 'active') {
  
  enableDarkmode();
}
else  {
  
  disableDarkmode()
}



themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode === 'active' ? disableDarkmode() : enableDarkmode();
});
