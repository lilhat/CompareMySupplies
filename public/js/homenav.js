const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-wrapper">
            <div class="main-logo">
                <a href="index.php">
                    <img src="images/main-logo.png" class="brand-logo" alt="">
                </a>
            </div>
            <div class="top-menu">
            <ul class="top-links-container">
                <span class="first-link"><li class="top-link-item"><a href="index.php">Home</a></li></span>
                <li class="top-link-item"><a href="products.php">All Categories</a> </li>
            </ul>
            </div>
            <div class="sign-in">
                <a>
                    <img src="images/user.png" id="user-pic" class="user-pic">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Logged in as, name</p>
                        <button class="btn" id="user-btn">Log Out</button>
                    </div>
                </a>

            </div>

        </div>
        <div class="menu">
            <ul class="links-container">
                <li class="link-item"><a href="categories.php?product=plaster">Plaster</a></li>
                <li class="link-item"><a href="categories.php?product=concrete">Concrete</a> </li>
                <li class="link-item"><a href="categories.php?product=cement">Cement</a></li>
                <li class="link-item"><a href="categories.php?product=timber">Timber</a></li>
                <li class="link-item"><a href="categories.php?product=adhesives">Adhesives</a></li>
                <li class="link-item"><a href="categories.php?product=eletrical">Electricals</a></li>
            </ul>
        </div>
    `;

    
}

createNav();

// nav popup

const userImageButton = document.querySelector('#user-pic');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `Signed in as ${user.name}`;
        actionBtn.innerHTML = 'Sign out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'Not logged in';
        actionBtn.innerHTML = 'Sign in';
        actionBtn.addEventListener('click', () => {
            location.href = '/signin';
        })
    }
}