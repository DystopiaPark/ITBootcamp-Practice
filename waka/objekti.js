// OBJEKAT U OBJEKTU

// BLOGOVI

let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};
let blog2 = {
  title: "CSS",
  likes: 20,
  dislikes: 15,
};
let blog3 = {
  title: "Java Script!",
  likes: 170,
  dislikes: 77,
};
let blog4 = {
  title: "Responsive web design",
  likes: 3,
  dislikes: 15,
};
let blog5 = {
  title: "NoSQL DB",
  likes: 20,
  dislikes: 15,
};
let blog6 = {
  title: "Event Listener",
  likes: 700,
  dislikes: 70,
};

// USERI

let user = {
  username: "Jelena",
  age: 28,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user1 = {
  username: "Stefan",
  age: 13,
  blogs: [blog4, blog5],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user2 = {
  username: "JohnDoe",
  age: 6,
  blogs: [blog6],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let users = [user, user1, user2];

// Ispisati imena onih autora koji imaju ispod 18 godina

let ispod18 = (niz) => {
  niz.forEach((el) => {
    if (el.age < 18) {
      console.log(el.username);
    }
  });
};
ispod18(users);

// ZADATAK 2 ================ UGNJEZDENA PETLJA ========================
// Ispisati naslove onih blogova koji imaju više od 50 lajkova

let viseOd50 = (niz) => {
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      if (el2.likes > 50) {
        console.log(el2.title);
      }
    });
  });
};

viseOd50(users);

// ZADATAK 3
// Ispisati sve blogove autora čiji je username ’JohnDoe’

let johnDoe = (niz) => {
  niz.forEach((el) => {
    if (el.username == "JohnDoe") {
      el.logBlogs();
    }
  });
};

johnDoe(users);

// Ispisati imena onih autora koji imaju ukupno više od 100
// lajkova za blogove koje su napisali

let viseOd100 = (niz) => {
  niz.forEach((el) => {
    let zbir = 0;
    el.blogs.forEach((el2) => {
      zbir += el2.likes;
    });
    if (zbir > 100) {
      console.log(el.username);
    }
  });
};

viseOd100(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj
// pozitivnih ocena

let prosecanPozitivnih = (niz) => {
  let br = 0;
  let ukupnoLajkova = 0;
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      ukupnoLajkova += el2.likes;
      br++;
    });
  });
  return ukupnoLajkova / br;
};

console.log(prosecanPozitivnih(users));

let natprosecanPozitivnih = (niz) => {
  let value;
  let prosecno = prosecanPozitivnih(niz);
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      if (el2.likes > prosecno) {
        value = true;
      }
    });
  });
  return value;
};

natprosecanPozitivnih(users);

// ZADATAK 9
// Ispisati naslove onih blogova koji imaju natprosečan broj
// pozitivnih ocena i ispodprosečan broj negativnih ocena

let prosecanNegativnih = (niz) => {
  let br = 0;
  let ukupnoDislajkova = 0;
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      ukupnoDislajkova += el2.dislikes;
      br++;
    });
  });
  return ukupnoDislajkova / br;
};

let ispodProsecanNegativnih = (niz) => {
  let prosecno = prosecanNegativnih(niz);
  let value;
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      if (el2.dislikes < prosecno) {
        value = true;
      }
    });
  });
  return value;
};

let inbIbn = (niz) => {
  let iznadPozitivni = natprosecanPozitivnih(niz);
};
