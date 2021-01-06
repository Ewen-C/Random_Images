let rawImageData = `[
  { "filename": "image_0.jpg",  "imageTitre": "Titre", "imageLieu": "Saint-Nom-la-Bretèche", "imageDate": "2018" },
  { "filename": "image_1.jpg",  "imageTitre": "Titre", "imageLieu": "Le Pecq", "imageDate": "2018" },
  { "filename": "image_2.jpg",  "imageTitre": "Titre", "imageLieu": "Louveciennes", "imageDate": "2018" },
  { "filename": "image_3.jpg",  "imageTitre": "Titre", "imageLieu": "Cavanac", "imageDate": "2018" },
  { "filename": "image_4.jpg",  "imageTitre": "Titre", "imageLieu": "Cavanac", "imageDate": "2018" },
  { "filename": "image_5.jpg",  "imageTitre": "Titre", "imageLieu": "Couffoulens", "imageDate": "2018" },
  { "filename": "image_6.jpg",  "imageTitre": "Titre", "imageLieu": "Puteaux", "imageDate": "2020" },
  { "filename": "image_7.jpg",  "imageTitre": "Titre", "imageLieu": "Louveciennes", "imageDate": "2018" },
  { "filename": "image_8.jpg",  "imageTitre": "Titre", "imageLieu": "Versailles", "imageDate": "2018" },
  { "filename": "image_9.jpg",  "imageTitre": "Titre", "imageLieu": "Saint-Gilles Croix-de-Vie", "imageDate": "2020" },
  { "filename": "image_10.jpg", "imageTitre": "Titre", "imageLieu": "Saint-Gilles Croix-de-Vie", "imageDate": "2020" },
  { "filename": "image_11.jpg", "imageTitre": "Titre", "imageLieu": "Le Port-Marly", "imageDate": "2020" },
  { "filename": "image_12.jpg", "imageTitre": "Titre", "imageLieu": "Saint-Gilles Croix-de-Vie", "imageDate": "2020" },
  { "filename": "image_13.jpg", "imageTitre": "Titre", "imageLieu": "Saint-Gilles Croix-de-Vie", "imageDate": "2020" },
  { "filename": "image_14.jpg", "imageTitre": "Titre", "imageLieu": "Saint-Gilles Croix-de-Vie", "imageDate": "2020" }
]`;
let imageData = JSON.parse(rawImageData);
for (let i = 0; i < imageData.length; i++) {
  imageData[i].imageDate = new Date(imageData[i].imageDate);
}


changeImage(); // 1er chargement


function changeImage() {
  let body = document.querySelector("body");
  let rand = -1;
  let currentImg = getImageNumber();

  do {
    rand = Math.floor(Math.random() * imageData.length);
    if (rand == currentImg) {
      console.log("La même image est tirée ! ^^'");
    }
  } while (rand == currentImg)


  console.log("Nouvelle Image Aléatoire entre 0 et 9 : " + rand);
  let str = "background-image: url('randomImages/" + imageData[rand].filename + "');"
  body.style = str;

  //document.getElementById("imageTitre").innerHTML = '"' + imageData[rand].imageTitre + '" · ';
  document.getElementById("imageLieu").innerHTML = imageData[rand].imageLieu + ' · ';
  document.getElementById("imageDate").innerHTML = imageData[rand].imageDate.getFullYear();
}

function getImageNumber() {
  let str = document.querySelector("body").style.backgroundImage;
  str = str.split("_").pop(); // Retire ce qu'il y a avant le underscore
  str = str.split(".").shift();  // Retire ce qu'il y a avant le point

  if(str == "") {
    console.log("1er chargement.")
    str = "-1"; // "" empêche le chargement d'image_00
  } else {
    console.log("Valeur de l'image actuelle : '" + str + "'");
  }

  return(str)
}

function cacherElements() {
  let elements = document.querySelectorAll("nav, header, section, footer");
  let str = "";

  if (elements[0].style.display != "none") {
    str = "none";
    document.querySelector("#buttonHide").innerHTML = "Montrer les éléments"
  }
  else {
    str = "";
    document.querySelector("#buttonHide").innerHTML = "Cacher les éléments"
  }

  for(let i=0; i<elements.length; i++) { // In a for in loop, there will be 5 iterations
    elements[i].style.display = str;
  }
}