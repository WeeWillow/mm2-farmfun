const navElement = document.querySelector('nav');
const footerElement = document.querySelector('footer');
const contactButton = document.getElementById('stickyContactBtn');
const contactForm = document.getElementById('stickyContactForm');
const closeFormBtn = document.getElementById('closeForm');

// sticky contact button
contactButton.addEventListener('click', () => {
  contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
})

closeFormBtn.addEventListener('click', () => {
  contactForm.style.display = 'none';
});

// create nav in body
// set content for nav
const navContent = `
<div class="navLeft">
      <a href="./index.html"><img src="./assets/img/FarmFun logo ny.svg" alt=""></a>
      <div class="mapBtn"><a href="./oversigtsKort.html"><i class="fa-solid fa-map"></i></a></div>
      <div class="searchBar"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
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
          <li><a href="./aabningsTider.html">&Aring;bningstider</a></li>
          <li><a href="./billetterOgPriser.html">Billetter &amp; Priser</a></li>
          <li><a href="./praktiskInformation.html">Praktisk Information</a></li>
          <li><a href="./saerligeBehov.html">S&aelig;rlige Behov</a></li>
        </ul>
      </li>
    </ul>
`;
// set innerHTML to navContent
navElement.innerHTML = navContent;

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
      <a href="https://www.facebook.com/FarmFun.VedAalbaek" target=”_blank”><i class="fa-brands fa-square-facebook"></i></a>
      <a href="https://www.instagram.com/farmfunsjov/?hl=en" target=”_blank”><i class="fa-brands fa-instagram"></i></a>
      <a href="./kontakt.html"><i class="fa-solid fa-envelope"></i></a>
    </div>
    <div class="footLogo"><a href="./index.html"><img src="./assets/img/FarmFun logo ny.svg" alt=""></a></div>
`;
footerElement.innerHTML = footerContent;