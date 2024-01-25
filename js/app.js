
// let allImages = document.querySelectorAll(".item img");
// let mainImg = document.getElementById("main-img");
// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].addEventListener('click', function (e) {
//         // console.log("BTATS")
//         let imgUrl = console.log(e.target.getAttribute('src'));
//         imgUrl = e.target.getAttribute('src');
//         e.target.classList.add("active")
//         e.target.classList.add("border-info")
//         if( e.target){
//             e.target.classList.remove("active")
//         }
//         mainImg.setAttribute("src", imgUrl);
//     })
// }

// let allImages = document.querySelectorAll(".item img");
// let mainImg = document.getElementById("main-img");
// let activeImage = null;

// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].addEventListener('click', function (e) {
//         let imgUrl = e.target.getAttribute('src');
        
//         if (activeImage) {
//             activeImage.classList.remove("active");
//             activeImage.classList.remove("border-danger");
//         }
        
//         e.target.classList.add("active");
//         e.target.classList.add("border-danger");
        
//         mainImg.setAttribute("src", imgUrl);
        
//         activeImage = e.target;
//     });
// }

// // Simulate a click event on the first image
// if (allImages.length > 0) {
//     allImages[0].click();
// }
let allImages = document.querySelectorAll(".item img");
let mainImg = document.getElementById("main-img");
let activeImage = null;
let currentIndex = 0; // Keep track of the current image index

// Function to handle image clicks
function handleImageClick(index) {
    if (activeImage) {
        activeImage.classList.remove("active");
        activeImage.classList.remove("border-info");
    }
    
    allImages[index].classList.add("active");
    allImages[index].classList.add("border-info");
    
    mainImg.setAttribute("src", allImages[index].getAttribute('src'));
    
    activeImage = allImages[index];
    currentIndex = index;
}

// Attach click event listeners to images
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function (e) {
        handleImageClick(i);
    });
}

// Function to automatically play the slider
function playSlider() {
    currentIndex = (currentIndex + 1) % allImages.length;
    handleImageClick(currentIndex);
}

// Start automatic slider playback
let interval = setInterval(playSlider, 3000); // Change 3000 to your desired interval in milliseconds

// Stop automatic slider playback when user clicks on an image
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function () {
        clearInterval(interval);
    });
}


