import { moviesarray } from "./constants";
import { allmovies } from "./elements";

document.addEventListener("DOMContentLoaded", function () {
  // Genre selection animation
  const genreItems = document.querySelectorAll(
    "#genreList .list-group-item"
  ) as NodeListOf<HTMLLIElement>;
  genreItems.forEach((item) => {
    moviesarray.forEach((movie) => {
      const allmovies = movie;
      for(let i = 0; i < moviesarray.length; i++){
          document.createElement("tr");
          
      }
    })
    item.addEventListener("click", function () {
      genreItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      let movieshistory: any = [];

      moviesarray.forEach((box) => {
        if (item.innerText === "All") {
          let generade = box.genre._id;
          movieshistory.push(box);
          console.log(generade);
        }

        if (item.innerText === "Comedy" && box.genre.name === "Comedy") {
          let generade = box.genre._id;
          movieshistory.push(box);
          console.log(generade);
        }
        if (item.innerText === "Action" && box.genre.name === "Action") {
          let generade = box.genre._id;
          movieshistory.push(box);
          console.log(generade);
        }
        if (item.innerText === "Romance" && box.genre.name === "Romance") {
          let generade = box.genre._id;
          movieshistory.push(box);
          console.log(generade);
        }
        if (item.innerText === "Thriller" && box.genre.name === "Thriller") {
          let generade = box.genre._id;
          movieshistory.push(box);
          console.log(generade);
        }
      });

      console.log(movieshistory);
      movieshistory = [];
      // moviesarray.forEach((box) => {
      //   let generade = box.genre.name;
      //   c;
      // });
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

//UI Functiongit
