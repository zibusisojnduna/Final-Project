// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// document.getElementById("overlay").style.display = "block";

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//   let items = document.querySelectorAll('.item')
//   document.querySelector('.slide').appendChild(items[0])
// })
// prev.addEventListener('click', function(){
//   let items = document.querySelectorAll('.item')
//   document.querySelector('.slide').prepend(items[items.length -1 ])
// })

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length -1 ])
})