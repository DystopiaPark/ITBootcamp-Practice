let date = new Date();
let day = date.getDay();

if (day == 0 || day == 6) {
  console.log("Weekend");
} else {
  console.log("Work day");
}
