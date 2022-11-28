const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-wrapper">
            <div class="main-logo">
                <a href="index.html">
                    <img src="images/main-logo.png" class="brand-logo" alt="">
                </a>
            </div>
            <div class="top-menu">
            <ul class="top-links-container">
                <span class="first-link"><li class="top-link-item"><a href="index.html">Home</a></li></span>
                <li class="top-link-item"><a href="categories.html">All Categories</a> </li>
            </ul>
            </div>
            <div class="sign-in">
                <a href="signin.html">
                    <img src="images/user.png" class="user-pic">
                <span class="text-below">Sign In</span>
                </a>
            </div>

        </div>
        <div class="menu">
            <ul class="links-container">
                <li class="link-item"><a href="index.html">Plaster</a></li>
                <li class="link-item"><a href="categories.html">Concrete</a> </li>
                <li class="link-item"><a href="about.html">Cement</a></li>
                <li class="link-item"><a href="contact.html">Timber</a></li>
                <li class="link-item"><a href="contact.html">Adhesives</a></li>
                <li class="link-item"><a href="contact.html">Electricals</a></li>
            </ul>
        </div>
    `;

    
}

createNav();