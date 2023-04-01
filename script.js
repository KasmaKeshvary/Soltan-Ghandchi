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
    Name: "Immediate Gratification",
    Photo1: "/Photo/Immediate Gratification/2.png",
    Note1: "This is sometext about Photo 1 of Immediate Gratification Gallery",
    Photo2: "/Photo/Immediate Gratification/card22.png",
    Note2: "This is sometext about Photo 2 of Immediate Gratification Gallery",
    Photo3: "/Photo/Immediate Gratification/4.png",
    Note3: "This is sometext about Photo 3 of Immediate Gratification Gallery",
    Photo4: "/Photo/Immediate Gratification/card24.png",
    Note4: "This is sometext about Photo 4 of Immediate Gratification Gallery",
  },
  {
    Name: "To the Bone",
    Photo1: "/Photo/To the Bone/card27.png",
    Note1: "This is sometext about Photo 1 of To the Bone Gallery",
    Photo2: "/Photo/To the Bone/card28.png",
    Note2: "This is sometext about Photo 2 of To the Bone Gallery",
    Photo3: "/Photo/To the Bone/card31.png",
    Note3: "This is sometext about Photo 3 of To the Bone Gallery",
    Photo4: "/Photo/To the Bone/card32.png",
    Note4: "This is sometext about Photo 4 of To the Bone Gallery",
  },
  {
    Name: "Circle of Desensitization",
    Photo1: "/Photo/Circle of Desensitization/card34.png",
    Note1:
      "This is sometext about Photo 1 of Circle of Desensitization Gallery",
    Photo2: "/Photo/Circle of Desensitization/card35.png",
    Note2:
      "This is sometext about Photo 2 of Circle of Desensitization Gallery",
    Photo3: "/Photo/Circle of Desensitization/card41.png",
    Note3:
      "This is sometext about Photo 3 of Circle of Desensitization Gallery",
    Photo4: "/Photo/Circle of Desensitization/card42.png",
    Note4:
      "This is sometext about Photo 4 of Circle of Desensitization Gallery",
  },
];

dropsubmenu[1].addEventListener("click", showgallery(sampleJs)); 

function showgallery(arr) {
  var st = `<div>`;
  for (let i = 0; i < arr.length; i++) {
    var countphoto = Object.keys(arr[i]);
    var z = i + 1 ;
    z = z > arr.length - 1 ? arr.length - 1 : z;
    st += `<div class="dropdown">
             <div class="name flex" id="dp-${i}">
                 <img class="galleryImg" src="${arr[i][countphoto[1]]}" >
                 <div class="galleryName">${arr[i].Name}</div>
             </div>
             <div class="dropdown-content">
                <span class="close cursor">×</span>
                <div class="center flex">
                   <div class="changeImg">`;
                     for (let j = 1; j < countphoto.length; j += 2) {
                     st += `<div class="Imgs${i} webk hide">
                               <div class="numbertext">${(j+1)/2} / ${(countphoto.length - 1)/2}</div>
                               <div class="perviosImg">❮</div>
                               <img class="Photo" src="${arr[i][countphoto[j]]}">
                               <div class="nextImg">❯</div>
                               <div class="bottomphototext">${arr[i][countphoto[j+1]]}</div>
                           </div>`;
                       }          
            st += `</div>
                </div>
                <span class="nextSeries cursor" id="nxsr-${z}">NextSeries</span>
             </div>
           </div>`;
  }
  st += `</div>`;
  document.getElementById("rooot").innerHTML = st;
}


let dropName = document.getElementsByClassName("name");
let dropDownContent = document.getElementsByClassName("dropdown-content");
let close = document.getElementsByClassName("close");
let nextSeries = document.getElementsByClassName("nextSeries");
var current = 0;
var currentphoto = 1;

for (let j = 0; j < dropDownContent.length; j++) {
  dropName[j].addEventListener("click", dropdown);
  close[j].addEventListener("click", closeModal);
  nextSeries[j].addEventListener("click", nextGallery);
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
  currentphoto = currentphoto > imgsw.length - 1 ? imgsw.length - 1 : currentphoto;
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

function nextGallery(gl) {
   closeModal();
  dropdown(gl); 
}