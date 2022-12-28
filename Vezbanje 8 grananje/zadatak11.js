let date = new Date();
let time = date.getHours();
console.log(time);
if (time >= 9 && time < 17) {
  console.log("firma radi");
} else {
  console.log("firma ne radi");
}
