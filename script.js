let navlinks = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".navbar-collapse.collapse");

navlinks.forEach(function (e) {
  e.addEventListener("click", () => {
    collapse.classList.remove("show");
  });
});

// ACtive Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// Counter desgin

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end) {
    let obj = document.getElementById(id);
    let current = start;
    let increment = 1;

    let timer = setInterval(() => {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, 5);
  }

  counter("count1", 0, 127);
  counter("count2", 0, 1000);
  counter("count3", 0, 180);
  counter("count4", 0, 700);
});
