var db = require("../models");
var bCrypt = require("bcrypt-nodejs");
var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var fakepassword = generateHash("12345");

var bob = fakepassword;
var users = [
  {
    id: 1,
    name: "Leeroy Jenkins",
    username: "TheLeeroy",
    password: bob
  },
  {
    id: 2,
    name: "Buddy Guy",
    username: "BG",
    password: bob
  }
];

var reviews = [
  {
    headline: "The Best Movie Ever!",
    productName: "The Matrix",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    UserId: 1
  },
  {
    headline: "Surprisingly Deep",
    productName: "Mario Tennis Aces",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 2,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mario_Tennis_Aces_logo.png/799px-Mario_Tennis_Aces_logo.png",
    UserId: 1
  },
  {
    headline: "Legendary",
    productName: "Catch-22",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463157317l/168668.jpg",
    UserId: 2
  },
  {
    headline: "It was mediocre",
    productName: "Pokken Tournament",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 3,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/PokkenTournamentBoxart.png/220px-PokkenTournamentBoxart.png",
    UserId: 1
  },
  {
    headline: "Legendary Game",
    productName: "Warframe",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Warframe_Cover_Art.png/220px-Warframe_Cover_Art.png",
    UserId: 2
  },
  {
    headline: "Wonderful",
    productName: "League of Legends",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/League_of_Legends_logo.png/220px-League_of_Legends_logo.png",
    UserId: 1
  },
  {
    headline: "Also Wonderful",
    productName: "Heroes of the Storm",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Heroes_of_the_Storm_logo_2017.png/220px-Heroes_of_the_Storm_logo_2017.png",
    UserId: 1
  },
  {
    headline: "The OG",
    productName: "Pokemon Red",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_box_art_-_Red_Version.png/220px-Pok%C3%A9mon_box_art_-_Red_Version.png",
    UserId: 2
  },
  {
    headline: "The OG + Pikachu Follows You",
    productName: "Pokemon Yellow",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 4,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Pokemon_Yellow.png/220px-Pokemon_Yellow.png",
    UserId: 1
  },
  {
    headline: "Best Fighting Game Ever",
    productName: "Killer Instinct",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Killer_Instinct_Logo.png/250px-Killer_Instinct_Logo.png",
    UserId: 1
  },
  {
    headline: "Oldschool Fun",
    productName: "Cuphead",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Cuphead_%28artwork%29.jpg/220px-Cuphead_%28artwork%29.jpg",
    UserId: 2
  },
  {
    headline: "The Worst Game Ever",
    productName: "E.T. The Extra-Terrestrial",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 1,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Etvideogamecover.jpg/220px-Etvideogamecover.jpg",
    UserId: 1
  },
  {
    headline: "Meh",
    productName: "Tekken 7",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 3,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg",
    UserId: 1
  },
  {
    headline: "Fantastic",
    productName: "The Elder Scrolls V: Skyrim",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png",
    UserId: 2
  },
  {
    headline: "Excellent",
    productName: "Interstellar",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    UserId: 1
  },
  {
    headline: "Ode to Vidya Games",
    productName: "Wreck-It Ralph",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/1/15/Wreckitralphposter.jpeg",
    UserId: 1
  },
  {
    headline: "So-so, meh",
    productName: "9 (Movie)",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 3,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/9posterfinal.jpg/220px-9posterfinal.jpg",
    UserId: 1
  },
  {
    headline: "Awful",
    productName: "Godzilla (1998)",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 1,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "Terrible",
    productName: "Dead or Alive",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 1,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Dead-or-alive-1999-poster.jpg/220px-Dead-or-alive-1999-poster.jpg",
    UserId: 1
  },
  {
    headline: "So Bad, Yet So Hilarious",
    productName: "The Room",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 4,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/TheRoomMovie.jpg/220px-TheRoomMovie.jpg",
    UserId: 2
  },
  {
    headline: "Pretty Good",
    productName: "Shrek",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 4,
    img: "https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg",
    UserId: 1
  },
  {
    headline: "Also Pretty Good",
    productName: "Shrek 2",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 4,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Shrek_2_poster.jpg/220px-Shrek_2_poster.jpg",
    UserId: 2
  },
  {
    headline: "Pretty Good As Well",
    productName: "Shrek 3",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 4,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Shrek_the_third_ver2.jpg/220px-Shrek_the_third_ver2.jpg",
    UserId: 1
  },
  {
    headline: "Awesome",
    productName: "Good Omens",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Goodomenscover.jpg/220px-Goodomenscover.jpg",
    UserId: 1
  },
  {
    headline: "Great World Building",
    productName: "The Colour of Magic",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/The_Colour_of_Magic_%28cover_art%29.jpg",
    UserId: 1
  },
  {
    headline: "Best Finale",
    productName: "A Memory of Light",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/A_Memory_of_Light_cover.jpg/220px-A_Memory_of_Light_cover.jpg",
    UserId: 2
  },
  {
    headline: "Classic",
    productName: "From the Earth to the Moon",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/From_the_Earth_to_the_Moon_Jules_Verne.jpg/220px-From_the_Earth_to_the_Moon_Jules_Verne.jpg",
    UserId: 2
  },
  {
    headline: "It was awesome",
    productName: "Mistborn",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Mistborn-cover.jpg/220px-Mistborn-cover.jpg",
    UserId: 1
  }
];
console.log(db.Users);

const seeds = () => {
  return db.Users.bulkCreate(users).then(() => db.Reviews.bulkCreate(reviews));
};

// seeds().then(() => {
//   process.exit();
// });

module.exports = seeds;
