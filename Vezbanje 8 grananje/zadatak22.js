let date = new Date();
let year = date.getFullYear();

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} je prestupna`);
} else {
  console.log(`${year} nije prestupna`);
}
