import { moviesarray } from "./constants";
import { category, references, searchInput } from "./elements";

let lengthMovies: any[] = [];
let tempSearchResults: any[] = [];

function Category(length: number) {
  category.innerHTML = "";

  const pageCount = Math.ceil(length / 3);
  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    if (i === 1) li.classList.add("active");

    const a = document.createElement("a");
    a.classList.add("page-link");
    a.href = "#";
    a.textContent = i.toString();

    li.appendChild(a);
    category.appendChild(li);

    li.addEventListener("click", (e) => {
      e.preventDefault();

      const all = category.querySelectorAll(".page-item");
      all.forEach((el) => el.classList.remove("active"));
      li.classList.add("active");

      const page = parseInt(a.textContent || "1");

      if (searchInput.value.trim()) {
        displayMoviesByPage(page, tempSearchResults);
      } else {
        displayMoviesByPage(page, lengthMovies);
      }
    });
  }
}

function displayMoviesByPage(pageNum: number, data: any[]) {
  references[0].innerHTML = "";

  const start = (pageNum - 1) * 3;
  const end = start + 3;

  for (let i = start; i < end && i < data.length; i++) {
    const movie = data[i];
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = movie.title;
    tr.appendChild(tdName);

    const tdGenre = document.createElement("td");
    tdGenre.textContent = movie.genre.name;
    tr.appendChild(tdGenre);

    const tdStock = document.createElement("td");
    tdStock.textContent = movie.numberInStock.toString();
    tr.appendChild(tdStock);

    const tdRate = document.createElement("td");
    tdRate.textContent = movie.dailyRentalRate.toString();
    tr.appendChild(tdRate);

    const tdBtn = document.createElement("td");
    tdBtn.classList.add("text-end");

    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-sm", "btn-outline-danger");
    btn.textContent = "Delete";

    btn.addEventListener("click", () => {
      lengthMovies = lengthMovies.filter((m) => m !== movie);

      if (searchInput.value.trim()) {
        tempSearchResults = tempSearchResults.filter((m) => m !== movie);
        Category(tempSearchResults.length);
        displayMoviesByPage(pageNum, tempSearchResults);
      } else {
        Category(lengthMovies.length);
        displayMoviesByPage(pageNum, lengthMovies);
      }
    });

    tdBtn.appendChild(btn);
    tr.appendChild(tdBtn);
    references[0].appendChild(tr);
  }

  if (data.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 5;
    td.classList.add("text-center", "text-muted");
    td.textContent = "No movies found.";
    tr.appendChild(td);
    references[0].appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const genreItems = document.querySelectorAll(
    "#genreList .list-group-item"
  ) as NodeListOf<HTMLLIElement>;

  genreItems.forEach((item) => {
    item.addEventListener("click", function () {
      genreItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      const selectedGenre = item.innerText;
      const validGenres = ["Comedy", "Action", "Romance", "Thriller"];

      lengthMovies = moviesarray.filter((movie) =>
        selectedGenre === "All"
          ? true
          : validGenres.includes(selectedGenre) &&
            movie.genre.name === selectedGenre
      );

      searchInput.value = "";
      tempSearchResults = [];

      Category(lengthMovies.length);
      displayMoviesByPage(1, lengthMovies);
    });
  });

  lengthMovies = moviesarray;
  Category(lengthMovies.length);
  displayMoviesByPage(1, lengthMovies);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  tempSearchResults = lengthMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  Category(tempSearchResults.length);
  displayMoviesByPage(1, tempSearchResults);
});
