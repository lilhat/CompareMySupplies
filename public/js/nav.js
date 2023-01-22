const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-wrapper">
            <div class="main-logo">
                <a href="index.php">
                    <img src="images/main-logo2.png" class="brand-logo" alt="">
                </a>
            </div>
            <form action="search.php" method="get">
                <div class="search-box">
                    <input type="text" class="tbox" placeholder="Search..." />
                    <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
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
                <li class="link-item">
                    <a href="categories.php?product=plaster">Plaster <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete">Concrete <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete">Cement <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=timber">Timber <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=adhesives">Adhesives <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=eletrical">Electricals <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <!-- add more <li> elements here -->
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