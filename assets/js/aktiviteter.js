const urlBase = "https://api.jacobfynbo.com/wp-json/wp/v2/";
const categorySlug = "forlystelser";
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
  const activityCards = document.querySelector(".activityCards");
  activityCards.innerHTML = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const link = document.createElement("a");

    link.href = link.href = `enkelteAktiviteter.html?id=${post.id}`;
    img.src = post.acf.billede.url;
    img.alt = post.title.rendered;

    h2.innerHTML = post.title.rendered;

    link.appendChild(img);
    link.appendChild(h2);

    article.appendChild(link);

    activityCards.appendChild(article);

    console.log(post);
  });
};

fetchPosts();
