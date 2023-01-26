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
                    <a href="categories.php?product=plaster">Building & <br> Hardware <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Aggregates & Sand</a></li>
                        <li><a href="#">Bricks & Blocks</a></li>
                        <li><a href="#">Concrete & Cement</a></li>
                        <li><a href="#">Additives & Chemicals</a></li>
                        <li><a href="#">Guttering & Drainage</a></li>
                        <li><a href="#">Insulation & Damp</a></li>
                        <li><a href="#">Plasterboard</a></li>
                        <li><a href="#">Plastering supplies</a></li>
                        <li><a href="#">Coving</a></li>
                        <li><a href="#">Roofing supplies</a></li>
                        <li><a href="#">Builder's metalwork</a></li>
                        <li><a href="#">Sealants</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete">Heating & <br> Plumbing <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete"><span class="first-line">Home & </span><br> Furniture <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=timber"><span class="first-line-2">Kitchen & </span><br> Bathroom <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=adhesives">Lighting & <br><span class="first-line-3"> Electrical </span><i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical">Outdoor & <br><span class="first-line-4"> Garden </span><i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-3">Painting & </span><br> Decorating <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-3">Tiling & </span><br> Flooring <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="#">Option 1</a></li>
                        <li><a href="#">Option 2</a></li>
                        <li><a href="#">Option 3</a></li>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-5">Tools & </span><br> Equipment <i class="fa fa-angle-down"></i></a>
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