let date = new Date();
let year = date.getFullYear();
let birthYear = 2005;

if (year - birthYear >= 18) {
  console.log("Osoba je punoletna");
} else {
  console.log("Osoba je maloletna");
}
