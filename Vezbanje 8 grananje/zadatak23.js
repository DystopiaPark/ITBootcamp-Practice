let date = new Date();
let day = date.getDay();
let time = date.getHours();

if (day == 0 && day == 6) {
  if (time >= 10 && time < 18) {
    console.log("Butik je otvoren");
  }
  console.log("Butik je zatvoren");
} else {
  if (time >= 9 && time < 20) {
    console.log("Butik je otvoren");
  } else {
    console.log("Butik je zatvoren");
  }
}
