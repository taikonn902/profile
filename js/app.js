const rolesEn = ["Frontend Developerr", "Backend Developerr", "Web Designerr"];
let roles = rolesEn;
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const el = document.getElementById("typing");

  if (!isDeleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  el.innerHTML = current;

  if (j === roles[i].length) {
    isDeleting = true;
    setTimeout(type, 3000);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("bg-cyan-400", "text-black");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("bg-cyan-400", "text-black");
    }
  });
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('no-scroll');
});

// Close menu when clicking on nav links
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  });
});

// Hide/show header on scroll
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrollThreshold = 10; // Minimum scroll distance to trigger

  if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide header
      header.classList.add('translate-y-[-100%]');
    } else {
      // Scrolling up - show header
      header.classList.remove('translate-y-[-100%]');
    }
    lastScrollY = currentScrollY;
  }
});




