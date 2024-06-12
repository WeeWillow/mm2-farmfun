const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";

const getActivityIdFromUrl = () => {
  //Lader os arbejde med url stringen, så vi kan sætte id'et der bliver klikket på ind i den.
  const params = new URLSearchParams(window.location.search);
  //Returnere id fra url'en
  return params.get("id");
};

const fetchActivityDetails = (activityId) => {
  // Henter detaljer for en specifik aktivitet fra API'et
  fetch(`${urlBase}posts/${activityId}`)
    .then((res) => res.json())
    .then((post) => {
      displayActivityDetails(post);
    })
    .catch((err) =>
      console.error("Fejl ved hentningen af aktivitetens detaljer:", err)
    );
};

const displayActivityDetails = (post) => {
  const activityDetailSection = document.querySelector(".enkeltAktivitet");
  activityDetailSection.innerHTML = `
    <div class="activityDetailCard">
      <div class="activityInfo">
        <h1>${post.title.rendered}</h1>
        <p id="anbefaletAlder">Anbefalet Alder:</p>
        <p>${post.acf.aldersgruppe.name}</p>
        <p id="beskrivelse">Beskrivelse: ${post.acf.forlystelse_beskrivelse}</p>
        <button id="seAlleBtn">Se flere forlystelser</button>
      </div>
      <img src="${post.acf.billede.url}" alt="${post.title.rendered}">
    </div>
  `;

  // Tilføj event listener til se alle knappen
  document.getElementById("seAlleBtn").addEventListener("click", () => {
    //Windows.history.back går tilbage til sidste url man har besøgt
    window.history.back();
  });
};
// Hent aktivitets-ID'et fra URL'en og hent derefter aktivitetsdetaljer
const activityId = getActivityIdFromUrl();
fetchActivityDetails(activityId);
