let y1 = 1990;
let m1 = 6;
let d1 = 7;

let y2 = 1990;
let m2 = 6;
let d2 = 7;

if (y1 < y2) {
  console.log(y1, m1, d1);
} else if (y2 < y1) {
  console.log(y2, m2, d2);
} else {
  if (m1 < m2) {
    console.log(y1, m1, d1);
  } else if (m2 < m1) {
    console.log(y2, m2, d2);
  } else {
    if (d1 < d2) {
      console.log(y1, m1, d1);
    } else if (d2 < d1) {
      console.log(y2, m2, d2);
    } else {
      console.log("Datumi su jednaki");
    }
  }
}
