let linkItems = document.querySelectorAll('.link-item');
let dropdownContents = document.querySelectorAll('.dropdown-content');
let overlay = document.querySelector('.overlay');
let menu = document.querySelector('.menu-main');
let linksContainer = document.querySelector('.links-container')

for (let i = 0; i < linkItems.length; i++) {
    linkItems[i].addEventListener('mouseenter', function() {
        dropdownContents[i].style.display = 'grid';
        linkItems[i].style.backgroundColor = 'white';
        overlay.style.display = 'block';
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        linksContainer.style.backgroundColor = 'lightgrey';
    });

    linkItems[i].addEventListener('mouseleave', function() {
        dropdownContents[i].style.display = 'none';
        overlay.style.display = 'none';
        menu.style.backgroundColor = '';
        linksContainer.style.backgroundColor = '';
        linkItems[i].style.backgroundColor = '';
    });
}


// const burger = document.querySelector(".burger");

// burger.addEventListener("click", () => {
//     burger.classList.toggle("active");
//     linksContainer.classList.toggle("active");
// })