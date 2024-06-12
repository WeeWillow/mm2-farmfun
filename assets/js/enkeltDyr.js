const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";

const getAnimalIdFromUrl = () => {
  //URLSearchParams gør vi kan arbejde med url som string , ved at få fat i id (det er der kommer efter ? i url)
  const newUrl = new URLSearchParams(window.location.search);
  return newUrl.get("id");
};

const fetchAnimalDetails = (animalId) => {
  fetch(`${urlBase}posts/${animalId}`)
    .then((res) => res.json())
    .then((post) => {
      displayAnimalDetails(post);
    })
    .catch((err) =>
      console.error("Fejl ved hentningen af dyrets detaljer:", err)
    );
};

const displayAnimalDetails = (post) => {
  const animalDetailSection = document.querySelector(".enkeltDyr");
  animalDetailSection.innerHTML = `
      <div class="animalDetailCard">
        <div class="animalInfo">
          <h1>${post.title.rendered}</h1>
          <div class="infoBoxes">
            <div class="infoBox">
              <h2>Levetid:</h2>
              <p>${post.acf.levetid_pa_dyr}</p>
            </div>
            <div class="infoBox">
             <h2>Levested:</h2>
              <p>${post.acf.levested_for_dyr}</p>
            </div>
            <div class="infoBox">
              <h2>Type:</h2>
              <p>${post.acf.art_af_dyr.name}</p>
            </div>
            <div class="infoBox">
              <h2>Føde:</h2>
              <p>${post.acf.fode_foretrukket_af_dyr}</p>
            </div>
          </div>
          <button id="tilbageBtn">Tilbage</button>
        </div>
        <img src="${post.acf.billede_af_dyr.url}" alt="${post.title.rendered}">
      </div>
    `;

  // Tilføj event listener til tilbage knappeN
  document.getElementById("tilbageBtn").addEventListener("click", () => {
    window.history.back();
  });
};

// Hent dyre-ID'et fra URL'en og hent derefter dyredetaljer
const animalId = getAnimalIdFromUrl();
if (animalId) {
  fetchAnimalDetails(animalId);
}
