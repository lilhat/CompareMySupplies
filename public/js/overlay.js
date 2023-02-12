let dropdownButtons = document.querySelectorAll('.link-item');
let dropdownContents = document.querySelectorAll('.dropdown-content');
let overlay = document.querySelector('.overlay');
let menu = document.querySelector('.menu');
let linksContainer = document.querySelector('.links-container')

for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener('mouseenter', function() {
        dropdownContents[i].style.display = 'grid';
        overlay.style.display = 'block';
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        linksContainer.style.backgroundColor = 'white';
    });

    dropdownButtons[i].addEventListener('mouseleave', function() {
        dropdownContents[i].style.display = 'none';
        overlay.style.display = 'none';
        menu.style.backgroundColor = '';
        linksContainer.style.backgroundColor = '';
    });
}


const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    linksContainer.classList.toggle("active");
})