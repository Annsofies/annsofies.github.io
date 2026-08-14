const contactButton = document.getElementById("contactButton");
const contactBox = document.getElementById("contactBox");
const closeContact = document.getElementById("closeContact");

// Åbn kontaktboksen
contactButton.addEventListener("click", function (event) {
  event.stopPropagation();

  contactBox.classList.toggle("show");
});

// Luk med X
closeContact.addEventListener("click", function () {
  contactBox.classList.remove("show");
});

// Luk hvis man klikker udenfor
document.addEventListener("click", function (event) {
  if (
    !contactBox.contains(event.target) &&
    !contactButton.contains(event.target)
  ) {
    contactBox.classList.remove("show");
  }
});

// ==================================================
// PORTFOLIO CAROUSEL
// ==================================================
// ==================================================
// PORTFOLIO CAROUSEL
// ==================================================

const carouselTrack = document.getElementById("carouselTrack");

const prevProject = document.getElementById("prevProject");

const nextProject = document.getElementById("nextProject");

const projects = document.querySelectorAll(".portfolio-card");

let currentProject = 1;

const totalProjects = 5;

// ==================================================
// OPDATER CAROUSEL
// ==================================================

function updateCarousel(animate = true) {
  if (!animate) {
    carouselTrack.style.transition = "none";
  } else {
    carouselTrack.style.transition = "transform 0.5s ease";
  }

  // Fjern active fra alle

  projects.forEach(function (project) {
    project.classList.remove("active");
  });

  // Gør det aktuelle billede aktivt

  projects[currentProject].classList.add("active");

  const cardWidth = projects[0].offsetWidth;

  const windowWidth = document.querySelector(".carousel-window").offsetWidth;

  // Flyt så det aktive kort står i midten

  const move = currentProject * cardWidth - (windowWidth - cardWidth) / 2;

  carouselTrack.style.transform = `translateX(-${move}px)`;
}

// ==================================================
// HØJRE PIL
// ==================================================

nextProject.addEventListener("click", function () {
  currentProject++;

  updateCarousel();

  // Girls-kopien → Girls

  if (currentProject === totalProjects + 1) {
    setTimeout(function () {
      currentProject = 1;

      updateCarousel(false);
    }, 500);
  }
});

// ==================================================
// VENSTRE PIL
// ==================================================

prevProject.addEventListener("click", function () {
  currentProject--;

  updateCarousel();

  // Kasper-kopien → Kasper

  if (currentProject === 0) {
    setTimeout(function () {
      currentProject = totalProjects;

      updateCarousel(false);
    }, 500);
  }
});

// ==================================================
// START PÅ GIRLS
// ==================================================

window.addEventListener("load", function () {
  currentProject = 1;

  updateCarousel(false);
});

// ==================================================
// VED RESIZE
// ==================================================

window.addEventListener("resize", function () {
  updateCarousel(false);
});

// ==================================================
// PORTFOLIO CAROUSEL 2
// ==================================================

const carouselTrack2 = document.getElementById("carouselTrack2");

const prevProject2 = document.getElementById("prevProject2");

const nextProject2 = document.getElementById("nextProject2");

const projects2 = document.querySelectorAll(".portfolio-card-2");

let currentProject2 = 1;

const totalProjects2 = 5;

// ==================================================
// OPDATER CAROUSEL 2
// ==================================================

function updateCarousel2(animate = true) {
  if (!animate) {
    carouselTrack2.style.transition = "none";
  } else {
    carouselTrack2.style.transition = "transform 0.5s ease";
  }

  // Fjern active fra alle

  projects2.forEach(function (project) {
    project.classList.remove("active");
  });

  // Gør aktuelt billede aktivt

  projects2[currentProject2].classList.add("active");

  const cardWidth = projects2[0].offsetWidth;

  const windowWidth = document.querySelector(".carousel-window-2").offsetWidth;

  // Flyt aktivt billede til midten

  const move = currentProject2 * cardWidth - (windowWidth - cardWidth) / 2;

  carouselTrack2.style.transform = `translateX(-${move}px)`;
}

// ==================================================
// HØJRE PIL
// ==================================================

nextProject2.addEventListener("click", function () {
  currentProject2++;

  updateCarousel2();

  // KAFFE TYSON-KOPI → KAFFE TYSON

  if (currentProject2 === totalProjects2 + 1) {
    setTimeout(function () {
      currentProject2 = 1;

      updateCarousel2(false);
    }, 500);
  }
});

// ==================================================
// VENSTRE PIL
// ==================================================

prevProject2.addEventListener("click", function () {
  currentProject2--;

  updateCarousel2();

  // VANDMAND-KOPI → VANDMAND

  if (currentProject2 === 0) {
    setTimeout(function () {
      currentProject2 = totalProjects2;

      updateCarousel2(false);
    }, 500);
  }
});

// ==================================================
// START PÅ KAFFE TYSON
// ==================================================

window.addEventListener("load", function () {
  currentProject2 = 1;

  updateCarousel2(false);
});

// ==================================================
// RESIZE
// ==================================================

window.addEventListener("resize", function () {
  updateCarousel2(false);
});

// ==================================================
// IMAGE LIGHTBOX
// ==================================================

const portfolioImages = document.querySelectorAll(".portfolio-image img");

// Lav lightbox
const imageLightbox = document.createElement("div");

imageLightbox.className = "image-lightbox";

imageLightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Luk billede">
    ×
  </button>

  <img src="" alt="">
`;

document.body.appendChild(imageLightbox);

// Hent elementerne
const imageLightboxImage = imageLightbox.querySelector("img");

const imageLightboxClose = imageLightbox.querySelector(".lightbox-close");

// Klik på billede
portfolioImages.forEach(function (image) {
  image.addEventListener("click", function () {
    imageLightboxImage.src = image.src;

    imageLightboxImage.alt = image.alt;

    imageLightbox.classList.add("show");

    document.body.style.overflow = "hidden";
  });
});

// Luk med X
imageLightboxClose.addEventListener("click", function () {
  closeImageLightbox();
});

// Luk ved klik udenfor
imageLightbox.addEventListener("click", function (event) {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

// Luk med ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeImageLightbox();
  }
});

// Luk lightbox
function closeImageLightbox() {
  imageLightbox.classList.remove("show");

  document.body.style.overflow = "";
}
