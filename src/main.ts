//ANIMATIONS
document.addEventListener("DOMContentLoaded", function () {
  const genreItems = document.querySelectorAll("#genre-list .list-group-item");
  genreItems.forEach((item) => {
    item.addEventListener("click", function () {
      genreItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const pageLinks = document.querySelectorAll(".pagination .page-link");
  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      pageLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
