document.addEventListener("DOMContentLoaded", function () {
        // Genre selection animation
        const genreItems = document.querySelectorAll(
          "#genreList .list-group-item"
        );
        genreItems.forEach((item) => {
          item.addEventListener("click", function () {
            genreItems.forEach((i) => i.classList.remove("active"));
            this.classList.add("active");
          });
        });

        // Pagination animation
        const pageItems = document.querySelectorAll("#pagination .page-item");
        pageItems.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            pageItems.forEach((i) => i.classList.remove("active"));
            this.classList.add("active");
          });
        });
      });