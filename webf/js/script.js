// for sidebar
const clostBtn= document.getElementById("navbar-close-btn");
const openBtn= document.getElementById("navbar-show-btn");
const navbar = document.querySelector(".navbar");
console.log(clostBtn);
const sideBar= document.querySelector(".navbar-collapse");

console.log(openBtn);


openBtn.addEventListener("click",()=>{
    sideBar.classList.add("navbar-collapse-rmw");
})
clostBtn.addEventListener("click",()=>{
    sideBar.classList.remove("navbar-collapse-rmw")
    console.log("closed is touched");
    
})

// for image viewer.
const allGalleryItem = document.querySelectorAll('.gallery-item');
const imgModalDiv = document.getElementById('img-modal-box');
const modalCloseBtn = document.getElementById('modal-close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let imgIndex = 0;

allGalleryItem.forEach((galleryItem) => {
    galleryItem.addEventListener('click', () => {
        imgModalDiv.style.display = "block";
        let imgSrc = galleryItem.querySelector('img').src;
        console.log(imgSrc);
        
        // imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
        imgIndex= imgSrc.split("/")[4];

        console.log(imgIndex);
        
    
        showImageContent(imgIndex);
    })
});

function showImageContent(img){
    document.querySelector('#img-modal img').src = `images/${img}`;
}

modalCloseBtn.addEventListener('click', () => {
    imgModalDiv.style.display = "none";
})
//