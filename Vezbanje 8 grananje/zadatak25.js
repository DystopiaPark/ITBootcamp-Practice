let x = 2;
let y = 4;
let z = 2;

if (x == z + y) {
  console.log("x je jedank zbiru z i y");
} else if (z == x + y) {
  console.log("z je jedank zbiru x i y");
} else if (y == x + z) {
  console.log("y je jedank zbiru z i x");
} else {
  console.log("nijedan broj nije jednak zbiru preostala dva");
}
