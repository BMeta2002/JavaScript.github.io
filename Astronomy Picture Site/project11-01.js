"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Bilal Malik
      Date:   1/18/22

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");
let title = document.getElementById("imageTitle");
let discription = document.getElementById("imageDescription");
let video = document.getElementById("video");
let image = document.getElementById("image");

const showPicture = (json) => {
    if (json.media_type === "video") {
        title.innerHTML = json.title;
        discription.innerHTML = json.explanation;
        video.src = json.url;
        video.style.display = "block";
        image.style.display = "none";
    } else if (json.media_type === "image") {
        title.innerHTML = json.title;
        discription.innerHTML = json.explanation;
        image.src = json.url;
        image.style.display = "block";
        video.style.display = "none";
    } else {
        discription.innerHTML = "Image not Available";
    }
}

dateBox.onchange = function (e) {
    var dateStr = e.target.value;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&date=${dateStr}`)
        .then(response => response.json())
        .then(data => showPicture(data))
        .catch((error) => {
            console.debug(error);
        })
}