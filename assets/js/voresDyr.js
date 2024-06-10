const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "dyresiden";
const perPage = 100;

const fetchPosts = () => {
  fetch(`${urlBase}categories?slug=${categorySlug}`)
    .then((res) => res.json())
    .then((categories) => {
      if (categories.length > 0) {
        const categoryId = categories[0].id;

        fetch(`${urlBase}posts?categories=${categoryId}&per_page=${perPage}`)
          .then((res) => res.json())
          .then((data) => {
            displayPosts(data);
          })
          .catch((err) => console.error("Fejl ved hentningen af data:", err));
      }
    });
};

const displayPosts = (posts) => {
  const animalCards = document.querySelector(".animalCards");
  animalCards.innerHTML = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const link = document.createElement("a");

    link.href = //Link til enkelte dyreside;
      img.src = post.acf.billede_af_dyr.url;
    img.alt = post.title.rendered;
    h2.innerHTML = post.title.rendered;

    link.href = link.appendChild(img);
    link.appendChild(h2);

    article.appendChild(link);
    animalCards.appendChild(article);
    console.log(post);
  });
};

//Funktion til sorteringsknapperne

document.querySelectorAll(".sorteringsBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const categorySlug = button.getAttribute("data-category");
    fetchPosts(categorySlug);
  });
});

fetchPosts("dyresiden");
