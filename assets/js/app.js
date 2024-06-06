const bodyElement = document.querySelector('body');
const newNav = document.createElement('nav');

// create nav in body
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
newNav.innerHTML = navContent;
// append newNav to body
bodyElement.appendChild(newNav);