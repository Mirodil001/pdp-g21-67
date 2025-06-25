import { moviesarray } from "./constants";

document.addEventListener("DOMContentLoaded", function () {
  // Genre selection animation
  const genreItems = document.querySelectorAll(
    "#genreList .list-group-item"
  ) as NodeListOf<HTMLLIElement>;
  genreItems.forEach((item) => {
    item.addEventListener("click", function () {
      genreItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
       
    });
  });

  // Pagination animation
  const pageItems = document.querySelectorAll(
    "#pagination .page-item"
  ) as NodeListOf<HTMLLIElement>;
  pageItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      pageItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


//UI Function

