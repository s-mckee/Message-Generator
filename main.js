// Create a computer-generated mad-libs
// Topic: Silly things kids say
// Give it a fancy appearance
// Function that creates and returns strings using random number generation to grab elements from the arrays
const components = {
  objects: ["bowl", "cookie", "bucket", "sandwich", "truck", "dolly", "dress"],
  animals: ["duck", "cat", "dog", "cow", "hamster", "chicken"],
  titles: ["knight", "police officer", "princess", "robber"],
  verbs: ["fell into", "got stuck in", "threw away", "ate", "farted on"],
  adjectives: ["pretty", "brave", "smart", "tall", "strong", "fat"],
  names: ["Jill", "Ember", "Lily", "Kevin", "Todd", "Marshall"],
};

const drawHeader = () => {
  let bar = "=========================\n";
  let title = "  Silly Things Kids Say\n";
  console.log(bar);
  console.log(title);
  console.log(bar);
};

// drawHeader();
