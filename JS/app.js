window.onload = addImages;

var imageArray = [{image: "../images/payApp.jpg"},{image: "../images/universityApp.jpg"},
{image:"../images/medicalWeb.jpg"},{image:"../images/insuranceApp.jpg"}];

function addImages(){
  galleryBuild(imageArray);
}


// function galleryBuild(arr) {
  
//     let gallery = document.getElementById("images");
  
//     let html = "";
  
//     arr.forEach(function (item) {
//       html += '<div style="width: 50px; padding: 10px; gap: 5px;">' + '<img width="50px" height="50px" style="display: flex;" src="'  + item.image + "</div>"  
      
//     });
  
//    gallery.innerHTML = html;
//   }
  

