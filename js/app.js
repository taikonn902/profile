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





