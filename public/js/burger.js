const createBurger = () => {
    let burger = document.querySelector('.burger-menu');

    burger.innerHTML = `
        <header class="header">
    <div class="header__container">
        <a href="" class="header__logo"></a>
        <div class="header__menu menu">
        <div class="menu__icon">
            <span></span>
        </div>
        <nav data-sub_menu_auto_close="true" class="menu__body">
            <ul class="menu__list">
            <li>
                <a data-goto=".page__section_1" href="" class="menu__link"
                >Section 1</a
                >
            </li>
            <li>
                <a data-goto=".page__section_2" href="" class="menu__link"
                >Section 2</a
                >
            </li>
            <li>
                <a data-goto=".page__section_3" href="" class="menu__link"
                >Section 3</a
                >
            </li>
            <li>
                <a href="" class="menu__link">Page 1</a>
                <span class="menu__arrow"></span>
                <ul class="menu__sub-list">
                <li>
                    <a href="" class="menu__sub-link">Section page 1</a>
                </li>
                <li>
                    <a href="" class="menu__sub-link">Section page 2</a>
                </li>
                <li>
                    <a href="" class="menu__sub-link">Section page 3</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="" class="menu__link">Page 2</a>
            </li>
            </ul>
        </nav>
        </div>
    </div>
    </header>
    
    
   `;

}

createBurger();

'use strict';
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (isMobile.any()) {
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}
// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('.header').offsetHeight;
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        // auto close sub-menu
        if (
          menuBody.dataset.sub_menu_auto_close &&
          document.body.classList.contains('_touch')
        ) {
          let menuArrows = document.querySelectorAll('.menu__arrow');
          for (let index = 0; index < menuArrows.length; index++) {
            menuArrows[index].parentElement.classList.remove('_active');
          }
        }
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}