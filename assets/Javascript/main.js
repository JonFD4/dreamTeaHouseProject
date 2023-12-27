// Readmore 
let myBtnElem = document.getElementById("myBtn");
myBtnElem.addEventListener("click", function () {
  let dots = document.getElementById("displayDots");
  let extraContent = document.getElementById("extra-content");
  if (extraContent.style.display !== "none") {
    myBtnElem.innerHTML = "Read More";
    extraContent.style.display = "none";
    dots.style.display = "inline";
  } else {
    myBtnElem.innerHTML = "Read Less";
    extraContent.style.display = "inline";
    dots.style.display = "none";
  }
});


// Function for product carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
  
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slidesVisible = 3; // Number of slides visible on larger screens
    let slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginLeft);
  
    // Function to update the number of visible slides based on screen width
    function updateVisibleSlides() {
      slidesVisible = window.innerWidth < 768 ? 1 : 3; // Adjust breakpoint as needed
      slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginLeft);
    }
  
    // Function to scroll to the left
    function scrollLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
  
    // Function to scroll to the right
    function scrollRight() {
      if (currentIndex < totalSlides - slidesVisible) {
        currentIndex++;
        updateCarousel();
      }
    }
  
    // Function to update the carousel based on the currentIndex
    function updateCarousel() {
      const translateXValue = -currentIndex * slideWidth;
      carousel.style.transform = `translateX(${translateXValue}px)`;
    }
  
    // Event listeners for scroll buttons
    scrollLeftBtn.addEventListener('click', scrollLeft);
    scrollRightBtn.addEventListener('click', scrollRight);
  
    // Update visible slides when the window is resized
    window.addEventListener('resize', function () {
      updateVisibleSlides();
      updateCarousel();
    });
  
    // Initial setup
    updateVisibleSlides();
    updateCarousel();
  });
  