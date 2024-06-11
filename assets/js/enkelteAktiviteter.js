const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";

const getActivityIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
};

const fetchActivityDetails = (activityId) => {
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
  if (!activityDetailSection) {
    console.error("Kunne ikke finde 'enkeltAktivitet'");
    return;
  }

  activityDetailSection.innerHTML = `
    <div class="activityDetailCard">
      <div class="activityInfo">
        <h1>${post.title.rendered}</h1>
        <p>Anbefalet Alder: ${post.acf.aldersgruppe.name}</p>
        <p>Beskrivelse: ${post.acf.forlystelse_beskrivelse}</p>
        <button id="seAlleBtn">Se flere forlystelser</button>
      </div>
      <img src="${post.acf.billede.url}" alt="${post.title.rendered}">
    </div>
  `;

  // Tilføj event listener til se alle knappen
  document.getElementById("seAlleBtn").addEventListener("click", () => {
    window.history.back();
  });
};
// Hent aktivitets-ID'et fra URL'en og hent derefter aktivitetsdetaljer
const activityId = getActivityIdFromUrl();
if (activityId) {
  fetchActivityDetails(activityId);
} else {
  console.error("Ingen aktivitets-ID fundet i URL'en");
}
