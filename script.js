let dropMenu = document.getElementsByClassName("menu");
let dropsubmenu = document.getElementsByClassName("subMenu");
let dropDownMenu = document.getElementsByClassName("dropDown-menu");
$(".menu").click(dropdownmenu);
$(".subMenu").click(showsection);

var dpIDsub = "home";

function showsection(e) {
  $("." + dpIDsub)
    .removeClass("show")
    .addClass("hide");
  dpIDsub = e.currentTarget.id;
  $("." + dpIDsub)
    .removeClass("hide")
    .addClass("show");
  $(".dropDown-menu").addClass("hide");
  if (dpIDsub == "work") showgallery(sampleJs);
}

function dropdownmenu() {
  $(".dropDown-menu").removeClass("hide").toggleClass("show");
}

var sampleJs = [
  {
    Gallery: "Immediate Gratification",
    Photo: "/Photo/Immediate Gratification/2.png",
    Note: "This is sometext about Photo 1 of Immediate Gratification Gallery",
    cover: true,
  },
  {
    Gallery: "Immediate Gratification",
    Photo: "/Photo/Immediate Gratification/card22.png",
    Note: "This is sometext about Photo 2 of Immediate Gratification Gallery",
    cover: false,
  },
  {
    Gallery: "Immediate Gratification",
    Photo: "/Photo/Immediate Gratification/4.png",
    Note: "This is sometext about Photo 3 of Immediate Gratification Gallery",
    cover: false,
  },
  {
    Gallery: "Immediate Gratification",
    Photo: "/Photo/Immediate Gratification/card24.png",
    Note: "This is sometext about Photo 4 of Immediate Gratification Gallery",
    cover: false,
  },
  {
    Gallery: "To the Bone",
    Photo: "/Photo/To the Bone/card27.png",
    Note: "This is sometext about Photo 1 of To the Bone Gallery",
    cover: false,
  },
  {
    Gallery: "To the Bone",
    Photo: "/Photo/To the Bone/card28.png",
    Note: "This is sometext about Photo 2 of To the Bone Gallery",
    cover: true,
  },
  {
    Gallery: "To the Bone",
    Photo: "/Photo/To the Bone/card31.png",
    Note: "This is sometext about Photo 3 of To the Bone Gallery",
    cover: false,
  },
  {
    Gallery: "To the Bone",
    Photo: "/Photo/To the Bone/card32.png",
    Note: "This is sometext about Photo 4 of To the Bone Gallery",
    cover: false,
  },
  {
    Gallery: "Circle of Desensitization",
    Photo: "/Photo/Circle of Desensitization/card34.png",
    Note: "This is sometext about Photo 1 of Circle of Desensitization Gallery",
    cover: false,
  },
  {
    Gallery: "Circle of Desensitization",
    Photo: "/Photo/Circle of Desensitization/card35.png",
    Note: "This is sometext about Photo 2 of Circle of Desensitization Gallery",
    cover: false,
  },
  {
    Gallery: "Circle of Desensitization",
    Photo: "/Photo/Circle of Desensitization/card41.png",
    Note: "This is sometext about Photo 3 of Circle of Desensitization Gallery",
    cover: false,
  },
  {
    Gallery: "Circle of Desensitization",
    Photo: "/Photo/Circle of Desensitization/card42.png",
    Note: "This is sometext about Photo 4 of Circle of Desensitization Gallery",
    cover: true,
  },
];

let series = [];
let nextGalleryName = "";

function showgallery(arr) {
  arr = arr.filter(function (co) {
    return co.cover == true;
  });
  var st = `<div>`;
  const Len = arr.length;
  for (let i = 0; i < Len; i++) {
    series[i] = arr[i].Gallery;
    st += `<div class="dropdown" onclick="openGallery('${arr[i].Gallery}',0)">
             <div class="name flex" id="dp-${i}">
                 <img class="galleryImg" src="${arr[i]["Photo"]}" >
                 <div class="galleryName">${arr[i].Gallery}</div>
             </div>
           </div>`;
  }
  st += `</div>`;
  document.getElementById("rooot").innerHTML = st;
}

function openGallery(galleryName, imageNo) {
  let images = sampleJs.filter(function (sa) {
    return sa.Gallery == galleryName;
  });
  const Len = images.length;
  const Lenseries = series.length;
  for (let i = 0; i < Lenseries - 1; i++) {
    if (series[i] == images[0].Gallery) {
      nextGalleryName = series[i + 1];
    }
  }
  let nextImageNo = imageNo + 1;
  let priviousImageNo = imageNo - 1;

  if (imageNo + 1 == Len) nextImageNo = -1;
  if (imageNo == 0) priviousImageNo = -1;
  let currentImage = images[imageNo];
  const idx = sampleJs.indexOf(currentImage);
  let st = `<div class="dropdown-content">
                <span class="close cursor" onclick="closeModal()">×</span>
                <div class="center flex">
                   <div class="changeImg">`;
  st += `<div>
              <div class="numbertext">${imageNo + 1} / ${Len}</div>
              <div class="perviosImg" onclick="changeImage(${priviousImageNo},'${galleryName}')">❮</div>
              <img class="Photo" src="${currentImage["Photo"]}" />
              <div class="nextImg" onclick="changeImage(${nextImageNo},'${galleryName}')">❯</div>
              <div class="bottomphototext">${currentImage["Note"]}</div>
          </div>
          </div>
                </div>
                <span class="nextSeries cursor" onclick="nextSeries('${nextGalleryName}')">NextSeries</span>
             </div>`;
  $("#lightbox").html(st);
  $(".dropdown-content").addClass("show");
}

function changeImage(imageNo, galleryName) {
  if (imageNo != -1) openGallery(galleryName, imageNo);
}

function closeModal() {
  $(".dropdown-content").removeClass("show").addClass("hide");
}

function nextSeries(galleryName) {
  if (galleryName == "") return;
  openGallery(galleryName, 0);
}
