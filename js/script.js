// ==================================================
// KONTAKTBOKS
// ==================================================

const contactButton = document.getElementById("contactButton");
const contactBox = document.getElementById("contactBox");
const closeContact = document.getElementById("closeContact");

if (contactButton && contactBox) {
  contactButton.addEventListener("click", function (event) {
    event.stopPropagation();
    contactBox.classList.toggle("show");
  });
}

if (closeContact && contactBox) {
  closeContact.addEventListener("click", function () {
    contactBox.classList.remove("show");
  });
}

document.addEventListener("click", function (event) {
  if (!contactBox || !contactButton) {
    return;
  }

  if (
    !contactBox.contains(event.target) &&
    !contactButton.contains(event.target)
  ) {
    contactBox.classList.remove("show");
  }
});

// ==================================================
// NAVBAR SKIFTER FARVE EFTER SEKTION
// ==================================================

const navbar = document.getElementById("navbar");

const colorSections = document.querySelectorAll("[data-nav-color]");

if (navbar && colorSections.length > 0) {
  const navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const backgroundColor = entry.target.dataset.navColor;
          const textColor = entry.target.dataset.navText;

          navbar.style.backgroundColor = backgroundColor;
          navbar.style.color = textColor;
        }
      });
    },

    {
      root: null,
      threshold: 0,
      rootMargin: "-70px 0px -85% 0px",
    },
  );

  colorSections.forEach(function (section) {
    navObserver.observe(section);
  });
}

// ==================================================
// POPUP DATA
// ==================================================

const popupData = {
  elgiganten: {
    title: "Elgigantens 30 års",

    text: `
      I forbindelse med Elgigantens 30 års fødselsdag arbejdede
      jeg med plakatdesign til butikken i Viby J.

      Her kan jeg senere indsætte mere om processen,
      designvalg, typografi, farver, feedback og det færdige resultat.
    `,

    color: "#D3E3E0",
    boxColor: "#C4DBD7",
    textColor: "#442F2A",
  },

  kreakassen: {
    title: "KreaKassen",

    text: `
      KreaKassen er en skolecase, hvor vi udviklede en fiktiv webshop
      med kreative aktivitetskasser til børn og deres forældre.

      Her kan jeg senere indsætte mere information om research,
      personaer, WordPress, designvalg, brugertests og læring.
    `,

    color: "#E497B5",
    boxColor: "#FFBDE2",
    textColor: "#442F2A",
  },

  character: {
    title: "Character Design",

    text: `
      Character Design er et af mine fritidsprojekter.

      Her kan jeg senere vise min proces fra referencebillede
      til skitse og videre til den færdige karakter.
    `,

    color: "#442F2A",
    boxColor: "#4F3731",
    textColor: "#EFE7DA",
  },

  ovartaci: {
    title: "Museum Ovartaci",

    text: `
      Museum Ovartaci var en skolecase med fokus på en digital,
      interaktiv oplevelse som ekstra lag til museets udstilling.

      Her kan jeg senere indsætte billeder fra processen,
      research, prototyper, brugertests og den færdige løsning.
    `,

    color: "#EFE7DA",
    boxColor: "#EBDDCC",
    textColor: "#442F2A",
  },

  storcenter: {
    title: "Storcenter Nord",

    text: `
      Storcenter Nord var en skolecase, hvor vi arbejdede med
      den eksisterende touchskærm ved akvariet.

      Her kan jeg senere indsætte mere om koncept,
      JavaScript, designproces, flyer og brugertest.
    `,

    color: "#D3E3E0",
    boxColor: "#C4DBD7",
    textColor: "#442F2A",
  },

  kasper: {
    title: "Kaspers Instagram",

    text: `
      Et lille fælles fritidsprojekt mellem min lillebror og mig.

      Her kan jeg senere indsætte eksempler på reels,
      videoer, redigering og Instagram-indhold.
    `,

    color: "#EFE7DA",
    boxColor: "#EBDDCC",
    textColor: "#442F2A",
  },
};

// ==================================================
// POPUP ELEMENTER
// ==================================================

const popup = document.getElementById("projectPopup");
const popupContent = document.getElementById("popupContent");
const popupClose = document.getElementById("popupClose");

const popupButtons = document.querySelectorAll(".project-popup-button");

// ==================================================
// ÅBN POPUP
// ==================================================

popupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectName = button.dataset.popup;

    const project = popupData[projectName];

    if (!project || !popup || !popupContent) {
      return;
    }

    popupContent.innerHTML = `
      <h2
        class="popup-project-title"
        id="popupTitle"
      >
        ${project.title}
      </h2>

      <p class="popup-project-text">
        ${project.text}
      </p>

      <div
        class="placeholder popup-placeholder"
        style="background-color: ${project.boxColor};"
      >
        HER KOMMER BILLEDER / CASEINDHOLD
      </div>
    `;

    // Finder selve popup-boksen
    const popupBox = popup.querySelector(".project-popup-box");

    // Skifter baggrundsfarve efter projekt
    popupBox.style.backgroundColor = project.color;

    // Skifter tekstfarve efter projekt
    popupBox.style.color = project.textColor;

    // Viser popup
    popup.classList.add("show");

    popup.setAttribute("aria-hidden", "false");

    // Forhindrer siden bag popup'en i at scrolle
    document.body.style.overflow = "hidden";
  });
});

// ==================================================
// LUK POPUP
// ==================================================

function closeProjectPopup() {
  if (!popup) {
    return;
  }

  popup.classList.remove("show");

  popup.setAttribute("aria-hidden", "true");

  // Giver siden mulighed for at scrolle igen
  document.body.style.overflow = "";
}

if (popupClose) {
  popupClose.addEventListener("click", closeProjectPopup);
}

// Luk popup hvis man klikker udenfor boksen
if (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closeProjectPopup();
    }
  });
}

// ==================================================
// ESC LUKKER POPUP
// ==================================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectPopup();

    if (contactBox) {
      contactBox.classList.remove("show");
    }
  }
});
