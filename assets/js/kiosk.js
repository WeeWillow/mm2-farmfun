const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "madsiden";
const perPage = 20;

const fetchPosts = () => {
  fetch(`${urlBase}categories?slug=${categorySlug}`)
    .then((res) => res.json())
    .then((categories) => {
      if (categories.length > 0) {
        const categoryId = categories[0].id;
        return fetch(
          `${urlBase}posts?categories=${categoryId}&per_page=${perPage}`
        );
      }
    })
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    })
    .catch((err) => console.error("Fejl ved hentningen af posts:", err));
};

const displayPosts = (posts) => {
  const foodCards = document.querySelector(".foodCards");
  foodCards.innerHTML = "";
  posts.forEach((post) => {
    //Laver html elementer for hvert post
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.src = post.acf.billede_af_ret.url;
    img.alt = post.title.rendered;

    //Tilføjer klassen foodTitle bare til h2, for at kunne target den i scss
    h2.innerHTML = post.title.rendered;
    const titleDiv = document.createElement("div");
    //Tilføjer  klasse til titlen
    titleDiv.classList.add("foodTitle");
    titleDiv.appendChild(h2);

    //Skaber en ny klasse ved navn foodInfo for at kunne have bare menustørrelse og priser for sig selv
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("foodInfo");

    //Laver en detailsDiv der skal bruges til at kunne til at fjerne priser som ikke har en værdi
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("foodDetails");

    // Laver if statements om at priser og størrelser uden værdi fjernes
    if (post.acf.singel) {
      const p = document.createElement("p");
      p.innerHTML = "Singel: <span>" + post.acf.singel + "</span>";
      p.classList.add("madInformation");
      detailsDiv.appendChild(p);
    }

    if (post.acf.pris_for_menu) {
      const p2 = document.createElement("p");
      p2.innerHTML = "Menu: <span>" + post.acf.pris_for_menu + "</span>";
      p2.classList.add("madInformation");
      detailsDiv.appendChild(p2);
    }

    if (post.acf.pris_for_stor_menu) {
      const p3 = document.createElement("p");
      p3.innerHTML =
        "Stor menu: <span>" + post.acf.pris_for_stor_menu + "</span>";
      p3.classList.add("madInformation");
      detailsDiv.appendChild(p3);
    }

    //Tilføjer titlen og priser til info diven
    infoDiv.appendChild(titleDiv);
    infoDiv.appendChild(detailsDiv);

    //Tilføjer billeder og info diven til article
    article.appendChild(img);
    article.appendChild(infoDiv);

    foodCards.appendChild(article);
  });
};

fetchPosts();
