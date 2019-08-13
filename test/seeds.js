var db = require("../models");

var users = [
  {
    name: "Leeroy Jenkins",
    username: "TheLeeroy",
    password: "Guy"
  },
  {
    name: "Buddy Guy",
    username: "BG",
    password: "12345"
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
      "https://www.google.com/logos/doodles/2019/doodle-for-google-2019-us-winner-6753651837108228.2-l.png"
  }
];

const seeds = () => {
  return db.User.bulkCreate(users).then(() => db.Review.bulkCreate(reviews));
};

seeds().then(() => {
  process.exit();
});
