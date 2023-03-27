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
    Photo1: "/Photo/2.png",
    Photo2: "/Photo/card22.png",
    Photo3: "/Photo/card23.png",
    Photo4: "/Photo/card24.png",
  },
  {
    Name: "Gallery2",
    Photo1: "/Photo/card27.png",
    Photo2: "/Photo/card28.png",
    Photo3: "/Photo/card31.png",
    Photo4: "/Photo/card32.png",
  },
  {
    Name: "Gallery3",
    Photo1: "/Photo/card34.png",
    Photo2: "/Photo/card35.png",
    Photo3: "/Photo/card41.png",
    Photo4: "/Photo/card42.png",
  },
  {
    Name: "Gallery4",
    Photo1: "/Photo/card51.png",
    Photo2: "/Photo/card52.png",
    Photo3: "/Photo/card53.png",
    Photo4: "/Photo/card54.png",
  },
];

function showgallery(arr) {
  var st = `<div>`;
  for (let i = 0; i < arr.length; i++) {
    var countphoto = Object.keys(arr[i]);
    st += `<div class="dropdown">
             <div class="name flex" id="dp-${i}">
                 <img class="galleryImg" src="${arr[i][countphoto[1]]}" >
                 <div class="galleryName">${arr[i].Name}</div>
             </div>
             <div class="dropdown-content">
                <span class="close cursor">×</span>
                <div class="changeImg">
                  <div class="perviosImg">❮</div>`;
                  for (let j = 1; j < countphoto.length; j++) {
                  st += `<div class="Imgs${i} hide">
                         <div class="numbertext">${j} / ${countphoto.length - 1}</div>
                         <img class="Photo" src="${arr[i][countphoto[j]]}" >
                        </div>`;
                    }
                   st += `<div class="nextImg">❯</div>
                </div>
              </div>
          </div>`;
  }
  st += `</div>`;
  document.getElementById("rooot").innerHTML = st;
}
showgallery(sampleJs);

let dropName = document.getElementsByClassName("name");
let dropDownContent = document.getElementsByClassName("dropdown-content");
let close = document.getElementsByClassName("close");
var current = 0;
var currentphoto = 1;

for (let j = 0; j < dropDownContent.length; j++) {
  dropName[j].addEventListener("click", dropdown);
  close[j].addEventListener("click", closeModal);
}

var imgsw = {};
var imgswOld = {};

function dropdown(e) {
  var dpID = e.currentTarget.id.split("-")[1];
  let old = current;
  imgswOld = document.getElementsByClassName("Imgs" + old);
  imgswOld[currentphoto].classList.remove("show");
  imgswOld[currentphoto].classList.add("hide");
  current = dpID;
  imgsw = document.getElementsByClassName("Imgs" + current);
  if(currentphoto>(imgsw.length-1)){
    currentphoto = imgsw.length-2;
  }
  if (currentphoto > 0) {
    imgsw[currentphoto].classList.remove("show");
    imgsw[currentphoto].classList.add("hide");
    currentphoto = 0;
  }
  imgsw[0].classList.remove("hide");
  imgsw[0].classList.add("show");

  if (current === old) {
    dropDownContent[current].classList.toggle("show");
  } else {
    dropDownContent[old].classList.remove("show");
    dropDownContent[current].classList.add("show");
  }
}

let pervios = document.getElementsByClassName("perviosImg");
let next = document.getElementsByClassName("nextImg");

for (let j = 0; j < pervios.length; j++) {
  pervios[j].addEventListener("click", previouspage);
}

for (let j = 0; j < next.length; j++) {
  next[j].addEventListener("click", nextpage);
}

function previouspage() {
  let oldphoto = currentphoto;
  currentphoto -= 1;
  currentphoto = currentphoto < 0 ? 0 : currentphoto;
  imgsw[oldphoto].classList.remove("show");
  imgsw[oldphoto].classList.add("hide");
  imgsw[currentphoto].classList.remove("hide");
  imgsw[currentphoto].classList.add("show");
}

function nextpage() {
  let oldphoto = currentphoto;
  currentphoto += 1;
  currentphoto =
    currentphoto > imgsw.length - 1 ? imgsw.length - 1 : currentphoto;
  imgsw[oldphoto].classList.remove("show");
  imgsw[oldphoto].classList.add("hide");
  imgsw[currentphoto].classList.remove("hide");
  imgsw[currentphoto].classList.add("show");
  imgsw[currentphoto].classList.add("Imgs");
}

function closeModal() {
  dropDownContent[current].classList.remove("show");
  dropDownContent[current].classList.add("hide");
}
