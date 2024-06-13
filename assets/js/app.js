const navElement = document.querySelector("nav");
const footerElement = document.querySelector("footer");

// sticky contact button
function renderStickyContact() {
  const stickyContactContainer = document.querySelector(
    "#stickyContactContainer"
  );

  const contactBtnContent = `
  <div id="stickyContactBtn">
    <button>kontakt os <i class="fa-solid fa-envelope"></i></button>
    <div id="stickyContactForm">
      <p>Farm Fun Kontakt</p>
      <button id="closeForm">x</button>
      <form>
        <p>
          Send en besked i formularen nedenunder, og vi vender tilbage så hurtigt som muligt!
        </p>

        <input type="text" id="navn" name="navn" placeholder="Navn">

        <input type="tel" id="tlf" name="tlf" placeholder="Telefonnummer">

        <input type="email" id="email" name="email" placeholder="E-mail">

        <input type="text" name="emne" placeholder="Emne">

        <textarea name="besked" placeholder="Din besked"></textarea>

        <button type="submit">Send besked</button>
      </form>
    </div>
  </div>
  `;

  stickyContactContainer.innerHTML = contactBtnContent;

  const contactButton = document.getElementById("stickyContactBtn");
  const contactForm = document.getElementById("stickyContactForm");
  const closeFormBtn = document.getElementById("closeForm");

  contactButton.addEventListener("click", () => {
    if (!event.target.closest("#stickyContactForm")) {
      contactForm.style.display =
        contactForm.style.display === "none" ? "block" : "none";
    }
  });

  closeFormBtn.addEventListener("click", () => {
    contactForm.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", renderStickyContact);

// create nav in body
// set content for nav
const navContent = `
<div class="navLeft">
      <a href="./index.html" title="Forside"><img src="./assets/img/FarmFun logo ny.svg" alt=""></a>
      <div class="mapBtn"><a href="./oversigtsKort.html"><i class="fa-solid fa-map"></i></a></div>
      <div class="searchBar"><i class="fa-solid fa-magnifying-glass"></i></div>
      </div>
      <i class="fa-solid fa-bars burger-menu"></i>
    <ul>
      <li><a href="./index.html"><i class="fa-solid fa-warehouse"></i> Forside</a></li>
      <li class="dropdown">
        <span class="dropdownTitle"><i class="fa-solid fa-tree"></i> Parken <i
            class="fa-solid fa-angle-down"></i></span>
        <ul class="dropdownList">
          <li><a href="./oversigtsKort.html">Oversigtskort</a></li>
          <li><a href="./kiosk.html">Kiosk</a></li>
          <li><a href="./grill.html">Grill</a></li>
          <li><a href="./omFarmFun.html">Om Farm Fun</a></li>
          <li><a href="./kontakt.html">Kontakt</a></li>
          <li><a href="./sponsorat.html">Sponsorat</a></li>
        </ul>
      </li>
      <li><a href="./oplevelser.html"><i class="fa-solid fa-camera"></i> Oplevelser</a></li>
      <li><a href="./voresDyr.html"><i class="fa-solid fa-paw"></i> Vores Dyr</a></li>
      <li class="dropdown">
        <span class="dropdownTitle"><i class="fa-solid fa-calendar-day"></i> Dit Bes&oslash;g <i
            class="fa-solid fa-angle-down"></i></span>
        <ul class="dropdownList">
          <li><a href="./billetterOgPriser.html">&Aring;bningstider</a></li>
          <li><a href="./billetterOgPriser.html">Billetter &amp; Priser</a></li>
          <li><a href="./praktiskInformation.html">Praktisk Information</a></li>
        </ul>
      </li>
    </ul>
`;
// set innerHTML to navContent
navElement.innerHTML = navContent;

const burgerMenu = document.querySelector(".burger-menu");
const dropdowns = document.querySelectorAll(".dropdown");

burgerMenu.addEventListener("click", () => {
  navElement.classList.toggle("show");
});

// toggle dropdown når du trykker på burgermenu
dropdowns.forEach(dropdown => {
  const dropdownTitle = dropdown.querySelector('.dropdownTitle');
  if (dropdownTitle) {
    dropdownTitle.addEventListener("click", (e) => {
      // hold dropdown åben når du trykker på et navpunkt
      e.stopPropagation();

      // toggle dropdown mobil
      if (window.innerWidth <= 800) {
        dropdown.classList.toggle("active");
      }
    });
  }
});

// luk dropdown når man klikker udenfor menu
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 800) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});


// footer
const footerContent = `
<div class="footLinks">
      <ul>
        <li><a href="./omFarmFun.html">Om Farm Fun</a></li>
        <li><a href="./praktiskInformation.html">Praktisk Information</a></li>
        <li><a href="./aabningsTider.html">&Aring;bningstider</a></li>
        <li><a href="./sponsorat.html">Sponsorat</a></li>
      </ul>
    </div>
    <div class="footIcons">
      <a href="https://www.facebook.com/FarmFun.VedAalbaek" target="_blank" title="Facebook"><i class="fa-brands fa-square-facebook"></i></a>
      <a href="https://www.instagram.com/farmfunsjov/?hl=en" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="./kontakt.html" title="Kontakt"><i class="fa-solid fa-envelope"></i></a>
    </div>
    <div class="footLogo"><a href="./index.html" title="Forside"><img src="./assets/img/FarmFun logo ny.svg" alt=""></a></div>
`;
footerElement.innerHTML = footerContent;
