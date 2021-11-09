window.onload = function(){

var imageArray = [{image1: "../images/payApp.jpg"}, {image2: "../images/universityApp.jpg"},
{image3: "../images/medicalWeb.jpg"}, {image1: "../images/insuranceApp.jpg"}];

function galleryBuild(imageArray) {
  
    let gallery = document.getElementById("images");
  
    let html = "";
  
    imageArray.forEach(function (item) {
      html += '<div  style="width: 18rem;">' + '<img src="' + "</div>"
      
    });
  
    gallery.innerHTML = html;
  }
  function randomize(arr)




}
