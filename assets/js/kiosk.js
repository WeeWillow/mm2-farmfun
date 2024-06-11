const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "madsiden";
const perPage = 20;

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
          .catch((err) => console.error("Error fetching posts:", err));
      }
    });
};

const displayPosts = (posts) => {
  const foodCards = document.querySelector(".foodCards");
  foodCards.innerHTML = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const link = document.createElement("a");

    link.href = post.link;

    img.src = post.acf.billede_af_ret.url;
    img.alt = post.title.rendered;

    h2.innerHTML = post.title.rendered;
    ul.innerHTML = post.acf.storrelse_pa_retten;
    p.innerHTML = post.acf.singel;
    p2.innerHTML = post.acf.pris_for_menu;
    p3.innerHTML = post.acf.pris_for_stor_menu;

    link.appendChild(img);
    link.appendChild(h2);
    link.appendChild(ul);
    link.appendChild(p);
    link.appendChild(p2);
    link.appendChild(p3);

    article.appendChild(link);

    foodCards.appendChild(article);

  });
};

fetchPosts();
