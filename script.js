let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
//
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("drop-toggle");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//  LIKED FILMS ADDING TO FAVORITES
let likes = document.querySelectorAll(".likes");

let movies = [
  {
    name: "Cover",
    tag: "coverfilm",
    inLikes: 0,
  },
  {
    name: "Jaws",
    tag: "jawsfilm",
    inLikes: 0,
  },
  {
    name: "Topgun",
    tag: "topgunfilm",
    inLikes: 0,
  },
];

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", () => {
    likedMovies();
  });
}

function onLoadLikedNumbers() {
  let movieNumbers = localStorage.getItem("likedMovies");

  if (movieNumbers) {
    document.querySelector(".user span").textContent = movieNumbers;
  }
}

function likedMovies() {
  let movieNumbers = localStorage.getItem("likedMovies");

  movieNumbers = parseInt(movieNumbers);

  if (movieNumbers) {
    localStorage.setItem("likedMovies", movieNumbers + 1);
    document.querySelector(".user span").textContent = movieNumbers + 1;
  } else {
    localStorage.setItem("likedMovies", 1);
    document.querySelector(".user span").textContent = 1;
  }
}

onLoadLikedNumbers();
