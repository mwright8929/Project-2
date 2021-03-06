/* eslint-disable prettier/prettier */
$(document).ready(function() {
  $("#duringAjax").hide();

  $("#gamePlats").hide();

  function showPlats() {
    if ($("#category").val() === "game") {
      $("#gamePlats").show();
    } else {
      $("#gamePlats").hide();
    }
  }

  showPlats();

  $("#category").on("change", function() {
    showPlats();
  });

  $("select").formSelect();

  $(document).on("click", "#submit", function() {
    var title = $("#title").val();

    var category = $("#category").val();

    $("#submit").prop("disabled", true);

    $("#duringAjax").show();

    switch (category) {
      case "movie":
        movieThis(title);
        break;

      case "book":
        bookThis(title);
        break;

      case "game":
        playThisGame(title);
        break;

      default:
        break;
    }

    function movieThis(title) {
      if (title === "") {
        title = "Mr. Nobody";
      }

      var queryURL =
        "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
          // Storing an array of results in the results variable
          var image = response.Poster;

          var newReview = {
            category: $("#category")
              .val()
              .trim(),
            productName: $("#title")
              .val()
              .trim(),
            score: $("[name = group1]:checked").attr("data-value"),
            headline: $("#headliner")
              .val()
              .trim(),
            review: $("#review")
              .val()
              .trim(),
            img: image
          };

          var modalContainer = $("<div>");
          modalContainer.attr("class", "modal-content");

          var modalImage = $("<img>");
          modalImage.attr("src", newReview.img);
          modalImage.attr("class", "materialboxed");
          modalImage.attr("style", "width:150px");

          var reviewTitle = $("<h4>");
          reviewTitle.text(newReview.headline);

          var reviewBody = $("<p>");
          reviewBody.text(newReview.review);

          modalContainer.append(modalImage);
          modalContainer.append(reviewTitle);
          modalContainer.append(reviewBody);

          $("#modalContent").append(modalContainer);

          $(".modal").modal({
            dismissable: false
          });
          $(".modal").modal("open");

          $.ajax("/api/reviews", {
            type: "POST",
            data: newReview
          }).then(function() {
            // Reload the page to get the updated list
            $("#modalClose").on("click", function() {
              location.reload();
            });
          });
        });
    }

    function bookThis(title) {
      //console.log(title);
      if (title === "") {
        title = "Nan and her Red Hen";
      }
      var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + title;

      //console.log(queryURL);

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Storing an array of results in the results variable

        var image = response.items[0].volumeInfo.imageLinks.thumbnail;

        var newReview = {
          category: $("#category")
            .val()
            .trim(),
          productName: $("#title")
            .val()
            .trim(),
          score: $("[name = group1]:checked").attr("data-value"),
          headline: $("#headliner")
            .val()
            .trim(),
          review: $("#review")
            .val()
            .trim(),
          img: image
        };

        var modalContainer = $("<div>");
        modalContainer.attr("class", "modal-content");

        var modalImage = $("<img>");
        modalImage.attr("src", newReview.img);
        modalImage.attr("class", "materialboxed");
        modalImage.attr("style", "width:150px");

        var reviewTitle = $("<h4>");
        reviewTitle.text(newReview.headline);

        var reviewBody = $("<p>");
        reviewBody.text(newReview.review);

        modalContainer.append(modalImage);
        modalContainer.append(reviewTitle);
        modalContainer.append(reviewBody);

        $("#modalContent").append(modalContainer);

        $(".modal").modal({
          dismissable: false
        });
        $(".modal").modal("open");

        $.ajax("/api/reviews", {
          type: "POST",
          data: newReview
        }).then(function() {
          // Reload the page to get the updated list
          $("#modalClose").on("click", function() {
            location.reload();
          });
        });
      });
    }

    function playThisGame(title) {
      //console.log(title);
      if (title === "") {
        title = "pac-man";
      }
      //console.log($("#platforms").val());
      var platform = $("#platforms")
        .val()
        .trim();

      var settings = {
        async: true,
        crossDomain: true,
        url:
          "https://chicken-coop.p.rapidapi.com/games/" +
          title +
          "?platform=" +
          platform,
        method: "GET",
        headers: {
          "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
          "x-rapidapi-key": "53396cf0c5msh92acae5f9a8f37ep11d66cjsn973d6e9f0ec7"
        }
      };

      $.ajax(settings).done(function(response) {
        //console.log(response);

        var image = response.result.image;
        //console.log(image);

        var newReview = {
          category: $("#category")
            .val()
            .trim(),
          productName: $("#title")
            .val()
            .trim(),
          score: $("[name = group1]:checked").attr("data-value"),
          headline: $("#headliner")
            .val()
            .trim(),
          review: $("#review")
            .val()
            .trim(),
          img: image
        };

        //console.log(newReview);

        var modalContainer = $("<div>");
        modalContainer.attr("class", "modal-content");

        var modalImage = $("<img>");
        modalImage.attr("src", newReview.img);
        modalImage.attr("class", "materialboxed");
        modalImage.attr("style", "width:150px");

        var reviewTitle = $("<h4>");
        reviewTitle.text(newReview.headline);

        var reviewBody = $("<p>");
        reviewBody.text(newReview.review);

        modalContainer.append(modalImage);
        modalContainer.append(reviewTitle);
        modalContainer.append(reviewBody);

        $("#modalContent").append(modalContainer);

        $(".modal").modal({
          dismissable: false
        });
        $(".modal").modal("open");

        $.ajax("/api/reviews", {
          type: "POST",
          data: newReview
        }).then(function() {
          //console.log("created new Review");
          // Reload the page to get the updated list
          //  location.reload();
          $("#modalClose").on("click", function() {
            location.reload();
          });
        });
      });
    }
  });
});
