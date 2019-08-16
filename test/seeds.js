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
    headline: "It was okay",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 2,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was okay",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 2,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was okay",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 2,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was okay",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 2,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "game",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "movie",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 1
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
    UserId: 2
  },
  {
    headline: "It was great",
    productName: "Bob's revenge",
    category: "book",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    score: 5,
    img:
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png",
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
