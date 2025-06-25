import { moviesarray } from "./constants";
import {
  allmovies,
  comedymovies,
  actionmovies,
  dramamovies,
  thrillermovies,
  category,
} from "./elements";

//UI FUNCTIONS

function Category(length: number = 16) {
  category.innerHTML = "";
  for (let i = 1; i <= Math.ceil(length / 3); i++) {
    let newLiElement = document.createElement("li");
    newLiElement.classList.add("page-item");
    let newAElement = document.createElement("a");
    newAElement.classList.add("page-link");
    newAElement.href = "#";
    newAElement.textContent = `${i}`;
    newLiElement.append(newAElement);
    category.append(newLiElement);
  }
}

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

Math.ceil(moviesarray.length / 3);
