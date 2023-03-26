let dropMenu = document.getElementsByClassName("menu");
let dropsubmenu = document.getElementsByClassName("subMenu");
let dropDownMenu = document.getElementsByClassName("dropDown-menu");

dropMenu[0].addEventListener("click", dropdownmenu);

for (let j = 0; j < dropsubmenu.length; j++) {
  dropsubmenu[j].addEventListener("click", showsection);
}

var dpIDsub = "home";

function showsection(e) {
  document.getElementsByClassName(dpIDsub)[0].classList.remove("show");
  document.getElementsByClassName(dpIDsub)[0].classList.add("hide");
  dpIDsub = e.currentTarget.id;
  document.getElementsByClassName(dpIDsub)[0].classList.remove("hide");
  document.getElementsByClassName(dpIDsub)[0].classList.add("show");
  dropDownMenu[0].classList.add("hide");
}

function dropdownmenu() {
  dropDownMenu[0].classList.remove("hide");
  dropDownMenu[0].classList.toggle("show");
}

var sampleJs = [
  {
    Name: "Gallery1",
    Photo1: "/Photo/card21.png",
    Photo2: "/Photo/card22.png",
    Photo3: "/Photo/card23.png",
    // Photo4: "/Photo/card24.png",
    // Photo5: "/Photo/card25.png",
    // Photo6: "/Photo/card26.png",
  },
  {
    Name: "Gallery2",
    Photo1: "/Photo/card27.png",
    Photo2: "/Photo/card28.png",
    Photo3: "/Photo/card31.png",
    Photo4: "/Photo/card32.png",
    // Photo5: "/Photo/card33.png",
    // Photo6: "/Photo/card25.png",
  },
  {
    Name: "Gallery3",
    Photo1: "/Photo/card34.png",
    Photo2: "/Photo/card35.png",
    Photo3: "/Photo/card41.png",
    Photo4: "/Photo/card42.png",
    Photo5: "/Photo/card43.png",
    // Photo6: "/Photo/card44.png",
  },
  {
    Name: "Gallery4",
    Photo1: "/Photo/card51.png",
    Photo2: "/Photo/card52.png",
    Photo3: "/Photo/card53.png",
    Photo4: "/Photo/card54.png",
    Photo5: "/Photo/card55.png",
    Photo6: "/Photo/card56.png",
  },
];

var numOfslideOfgallery = [];
var countphoto = {};
var one = 0;

dropsubmenu[1].onclick = showworks(sampleJs);

function showworks(arr) {
  var st = `<div>`;
  for (let i = 0; i < arr.length; i++) {
    countphoto = Object.keys(arr[i]);
    numOfslideOfgallery[i] = countphoto.length - 1 + one;
    st += `<div class="slideshow-container">`;
    for (let j = 1; j < countphoto.length; j++) {
      st += `<div class="mySlides fade" >
            <div class="numbertext">${j} / ${countphoto.length - 1}</div>
            <img src="${arr[i][countphoto[j]]}"
                 style="width:100%">
            <div class="text">${arr[i].Name}</div>
        </div>`;
    }
    st += `<a class="prev" id="p-${
      countphoto.length - 1
    }" onclick="plusSlides(-1)">❮</a>
        <a class="next" id="n-${
          countphoto.length - 1
        }" onclick="plusSlides(1)">❯</a>
    </div>
    <br>
    <div style="text-align:center">`;
    for (let j = 1; j < countphoto.length; j++) {
      st += `<span class="dot" onclick="currentSlide(${j})"></span>`;
    }
    st += `</div>`;
    one = countphoto.length - 1 + one;
  }
  st += `</div>`;
  document.getElementById("rooot").innerHTML = st;
  console.log(numOfslideOfgallery);
}

// let dropName = document.getElementsByClassName("name");
// let dropDownContent = document.getElementsByClassName("dropdown-content");
// let arrowDown = document.getElementsByClassName("arrowDown");
// var current = 0;
// var currentphoto = 1;

// for (let j = 0; j < dropDownContent.length; j++) {
//   dropName[j].addEventListener("click", dropdown);
// }

// var imgsw = {};
// var imgswOld = {};

// function dropdown(e) {
//   var dpID = e.currentTarget.id.split("-")[1];
//   let old = current;
//   imgswOld = document.getElementsByClassName("Imgs" + old);
//   imgswOld[currentphoto].classList.remove("show");
//   imgswOld[currentphoto].classList.add("hide");
//   current = dpID;
//   imgsw = document.getElementsByClassName("Imgs" + current);
//   if (currentphoto > 0) {
//     imgsw[currentphoto].classList.remove("show");
//     imgsw[currentphoto].classList.add("hide");
//     currentphoto = 0;
//   }
//   imgsw[0].classList.remove("hide");
//   imgsw[0].classList.add("show");
//   imgsw[0].classList.add("Imgs");

//   if (current === old) {
//     dropDownContent[current].classList.toggle("show");
//     arrowDown[current].classList.toggle("arrowUp");
//   } else {
//     arrowDown[old].classList.remove("arrowUp");
//     dropDownContent[old].classList.remove("show");
//     dropDownContent[current].classList.add("show");
//     arrowDown[current].classList.add("arrowUp");
//   }
// }

// let pervios = document.getElementsByClassName("perviosImg");
// let next = document.getElementsByClassName("nextImg");

// for (let j = 0; j < pervios.length; j++) {
//   pervios[j].addEventListener("click", previouspage);
// }

// for (let j = 0; j < next.length; j++) {
//   next[j].addEventListener("click", nextpage);
// }

// function previouspage() {
//   let oldphoto = currentphoto;
//   currentphoto -= 1;
//   currentphoto = currentphoto < 0 ? 0 : currentphoto;
//   imgsw[oldphoto].classList.remove("show");
//   imgsw[oldphoto].classList.add("hide");
//   imgsw[currentphoto].classList.remove("hide");
//   imgsw[currentphoto].classList.add("show");
// }

// function nextpage() {
//   let oldphoto = currentphoto;
//   currentphoto += 1;
//   currentphoto =
//     currentphoto > imgsw.length - 1 ? imgsw.length - 1 : currentphoto;
//   imgsw[oldphoto].classList.remove("show");
//   imgsw[oldphoto].classList.add("hide");
//   imgsw[currentphoto].classList.remove("hide");
//   imgsw[currentphoto].classList.add("show");
//   imgsw[currentphoto].classList.add("Imgs");
// }

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementsByClassName("prev");
let next = document.getElementsByClassName("next");

for (let j = 0; j < prev.length; j++) {
  prev[j].addEventListener("click", pr);
}

for (let j = 0; j < next.length; j++) {
  next[j].addEventListener("click", nx);
}

let countgalleryslide = {};

function pr(e) {
  countgalleryslide = e.currentTarget.id.split("-")[1];
  console.log(countgalleryslide);
}

function nx(e) {
  countgalleryslide = e.currentTarget.id.split("-")[1];
  console.log(countgalleryslide);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(n);
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slides[0].style.display = "block";
  for (let i = 0; i < numOfslideOfgallery.length-1; i++) {
    let firstslide = numOfslideOfgallery[i];
    console.log(firstslide);
    slides[firstslide].style.display = "block";
    dots[firstslide].className += " active";
  }
}
