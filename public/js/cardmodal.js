$(document).ready(function() {
  $(".modal").modal();
  $(document).on("click", ".card", function() {
    $("#modal-header").text(
      $(this)
        .children(".card-content")
        .children(".header")
        .text()
    );
    $("#title_author").text(
      $(this)
        .children(".card-content")
        .children(".meta")
        .text()
    );
    $("#modal-img").attr(
      "src",
      $(this)
        .children(".card-image")
        .children("img")
        .attr("src")
    );
    $("#review").text(
      $(this)
        .children("p")
        .text()
    );
    $("#score").text(
      "★".repeat(
        parseInt(
          $(this)
            .children(".card-content")
            .children(".description")
            .text()
        )
      ) +
        "☆".repeat(
          5 -
            parseInt(
              $(this)
                .children(".card-content")
                .children(".description")
                .text()
            )
        )
    );
  });
});
