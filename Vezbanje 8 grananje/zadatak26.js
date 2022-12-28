let x = 33;
let y = 54;
let z = 22;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + y);
  } else {
    console.log(x + z);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + x);
  } else {
    console.log(y + z);
  }
} else {
  if (x > y) {
    console.log(z + x);
  } else {
    console.log(z + y);
  }
}
