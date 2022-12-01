const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".main-image");
const productBrand = document.querySelector(".product-brand");

let activeImageSlide = 0;
productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

