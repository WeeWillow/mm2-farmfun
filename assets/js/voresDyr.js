const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "dyresiden";
const perPage = 100;
let allPosts = [];
let currentIndex = 0;
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
  const postsToShow = allPosts.slice(currentIndex, currentIndex + postsPerPage);
  postsToShow.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const link = document.createElement("a");

    img.src = post.acf.billede_af_dyr.url;
    img.alt = post.title.rendered;
    h2.innerHTML = post.title.rendered;
    link.href = "#"; // Link til enkelte dyreside
    link.appendChild(img);
    link.appendChild(h2);

    article.appendChild(link);
    animalCards.appendChild(article);
  });
  //Fjerner knappen hvis alle bliver vist
  currentIndex += postsPerPage;
  if (currentIndex >= allPosts.length) {
    document.getElementById("seFlereBtn").style.display = "none";
  }
};

document.getElementById("seFlereBtn").addEventListener("click", displayPosts);

fetchPosts();
