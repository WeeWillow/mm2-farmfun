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
        <p id="beskrivelse"> ${post.acf.forlystelse_beskrivelse}</p>
        <button id="seAlleBtn">Se flere forlystelser</button>
      </div>
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 511.999 511.999"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="imageSVGShape" width="100%" height="100%">
          <image
            href="${post.acf.billede.url}"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            height="100%"
          ></image>
        </pattern>
      </defs>
      <path
        d="M498.523 246.291c37.941-67.923-8.514-149.499-85.88-157.204l-28.232-2.813c-20.59-2.053-38.982-10.974-54.263-28.128-53.185-59.695-152.219-44.954-184.82 26.764-7.94 17.466-22.298 31.438-40.428 39.344l-39.773 17.34c-63.399 27.64-84.894 104.334-44.848 159.183l25.236 34.563c5.481 7.508 9.482 15.807 11.893 24.666l12.532 46.073c17.167 63.115 88.755 97.22 151.241 70.693l5.35-2.271c15.901-6.751 33.992-8.387 50.932-4.616l82.048 18.269c79.933 17.798 150.39-51.574 132.54-127.825l-10.384-44.351c-4.203-17.953-1.524-36.78 7.544-53.012l9.312-16.675z"
        fill="url(#imageSVGShape)"
      ></path>
    </svg>
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
