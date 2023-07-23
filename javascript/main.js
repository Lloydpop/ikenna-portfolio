const navbar = document.querySelector(".fixed-nav");
const hambugar = document.querySelectorAll(".hambugar");
const menu = document.querySelectorAll(".menu");
console.log(navbar);
// Add scroll event listener to the window
window.addEventListener("scroll", () => {
  // Check the scroll position
  const scrollPosition = window.scrollY;

  // Show the navbar when scrolling down, hide it when scrolling up
  if (scrollPosition > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

hambugar.forEach((ham) => {
  ham.addEventListener("click", () => {
    if (ham.classList.contains("active")) {
      ham.classList.remove("active");
      menu.forEach((men) => {
        men.classList.remove("active");
      });
    } else {
      ham.classList.add("active");
      menu.forEach((men) => {
        men.classList.add("active");
      });
    }
  });
});

// Get all the elements you want to show on scroll
const targets = document.querySelectorAll(".js-show-on-scroll");
// Callback for IntersectionObserver
const callback = function (entries) {
  entries.forEach((entry) => {
    // Is the element in the viewport?
    if (entry.isIntersecting) {
      // Add the fadeIn class:
      entry.target.classList.add("motion-safe:animate-fadeIn");
    }
  });
};
// Set up a new observer
const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function (target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

const hiddenDiv = document.querySelectorAll(".hidden-div");

function revealOnScroll() {
  const screenPosition = window.innerHeight;
  const expertiseEl = document.querySelectorAll(".expertise");

  if (!window.location.href.includes("/about")) {
    const hiddenEl = document.querySelector(".explore");
    const hiddenElPosition = hiddenEl.getBoundingClientRect().top;
    if (hiddenElPosition < screenPosition) {
      hiddenEl.classList.add("visible");
    }
  }
  expertiseEl.forEach((expert) => {
    const expertiseElPosition = expert.getBoundingClientRect().top;
    if (expertiseElPosition < screenPosition) {
      expert.classList.add("active");
    }
  });

  hiddenDiv.forEach((div) => {
    const triggerPosition = div.getBoundingClientRect().top;
    if (triggerPosition < screenPosition) {
      div.classList.add("visible");
    }
  });
}
const pics = document.querySelector(".pics");

const scale = () => {
  if (!window.location.href.includes("/about")) {
    pics.classList.add("visible");
  }
  navbar.classList.add("hide");
};
window.addEventListener("scroll", () => {
  revealOnScroll();
});
window.addEventListener("load", scale);
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

scrollToTopBtn.addEventListener("click", scrollToTop);
scrollToTopBtn.style.opacity = "0";

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
});

// function scrollToSection(event) {
//   event.preventDefault();

//   let target = event.target.getAttribute("href");

//   var targetSection = document.querySelector(target);
//   var targetPosition = targetSection.offsetTop;

//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth",
//   });
//   hambugar.forEach((ham) => {
//     ham.classList.remove("active");
//   });
//   menu.forEach((men) => {
//     men.classList.remove("active");
//   });
// }

// // Attach a click event listener to all anchor tags inside the navigation
var navLinks = document.querySelectorAll(".contact");
navLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    hambugar.forEach((ham) => {
      ham.classList.remove("active");
    });
    menu.forEach((men) => {
      men.classList.remove("active");
    });
  });
});
