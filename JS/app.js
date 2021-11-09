window.onload = addImages;
function addImages(){
  galleryBuild(imageArray);
}
var imageArray = [{image: "../images/payApp.jpg"},{image:"../images/universityApp.jpg"},
{image:"../images/medicalWeb.jpg"},{image:"../images/insuranceApp.jpg"}];

// function galleryBuild(arr) {
  
//     let gallery = document.getElementById("images");
  
//     let html = "";
  
//     arr.forEach(function (item) {
//       html += '<div style="width: 50px; padding: 10px; gap: 5px;">' + '<img src="'  + item.image + "</div>" 
      
//     });
  
//    gallery.innerHTML = html;
//    return gallery.innerHTML;
//   }
  

