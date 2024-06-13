const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "dyresiden";
// Henter 100 post
const perPage = 100;
//Et tomt array til alle post
let allPosts = [];
//Indexere listen af dyr, startede fra 0, 1, 2 osv.
let currentIndex = 0;
//Henter 12 post svarende til 3 rækker
const postsPerPage = 12;

const fetchPosts = () => {
  fetch(`${urlBase}categories?slug=${categorySlug}`)
    .then((res) => res.json())
    .then((categories) => {
      if (categories.length > 0) {
        const categoryId = categories[0].id;

        fetch(`${urlBase}posts?categories=${categoryId}&per_page=${perPage}`)
          .then((res) => res.json())
          .then((data) => {
            allPosts = data;
            displayPosts();
          })
          .catch((err) => console.error("Fejl ved hentningen af data:", err));
      }
    });
};

const displayPosts = () => {
  const animalCards = document.querySelector(".animalCards");
  //Henter post fra currentindex, til currenIndex(0) + postprpage (12). Slice bruges til at få denne specefikke del af arrayet
  const postsToShow = allPosts.slice(currentIndex, currentIndex + postsPerPage);
  postsToShow.forEach((post) => {
    //Skaber nye html elementer for hver post
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const link = document.createElement("a");

    img.src = post.acf.billede_af_dyr.url;
    img.alt = post.title.rendered;
    h2.innerHTML = post.title.rendered;

    //Linker til enkelt dyr side med post id i url
    link.href = `enkeltDyr.html?id=${post.id}`;

    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(link);
    animalCards.appendChild(article);
  });
  //Fjerner knappen hvis alle bliver vist, altså at allPost length er 0 eller under, så får btn display none
  currentIndex += postsPerPage;
  if (currentIndex >= allPosts.length) {
    document.getElementById("seFlereBtn").style.display = "none";
  }
};

document.getElementById("seFlereBtn").addEventListener("click", displayPosts);

fetchPosts();
