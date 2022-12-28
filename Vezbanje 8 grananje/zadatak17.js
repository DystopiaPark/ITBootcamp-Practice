let a = 44;
let b = 23;
let c = 33;

if (a > b && a > c) {
  if (b > c) {
    console.log("a je najveci, b je srednji, c najmanji");
  } else {
    console.log("a je najveci, c je srednji, b najmanji");
  }
} else if (b > c && c > a) {
  console.log("b je najveci, c je srednji, a najmanji");
} else if (b > c && a > c) {
  console.log("b je najveci, a je srednji, c najmanji");
} else if (c > a && c > b) {
  if (b > a) {
    console.log("c je najveci, b je srednji, a najmanji");
  } else {
    console.log("c je najveci, a je srednji, b najmanji");
  }
}
