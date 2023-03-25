<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Sign Up</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<?php include_once("analyticstracking.php") ?>
    <div class="container">
        <nav class="navbar"></nav>
    </div>
    <div class="signup-container">
        <div class="alert-box">
            <img src="images/error.png" class="alert-img" alt="">
            <p class="alert-msg">Error message</p>
        </div>
        <img src="images/loader.gif" class="loader" alt="">
        <div class="sign-up-form">
            <img src="images/user.png">
            <h1> Sign Up</h1>
            <form action="/home" method="post">
                <input type="name" class="input-box" id="name" placeholder="Full Name">
                <input type="email" class="input-box" id="email" placeholder="Email">
                <input type="password" class="input-box" id="pwd" placeholder="Password">
                <input type="password" class="input-box" id="confirm-pwd" placeholder="Confirm Password">
                <p><span><input type="checkbox" id="terms-and-cond"></span> I agree to the <span class="link"><a href="/tos">terms of services</a></span></p>
                <button type="button" id="signUp" name="signUp" class="signup-btn">Register</button>
                <hr>
                <p class="or">OR</p>
                <button type="button" class="facebook-btn">Login with Facebook</button>
                <p>Already have an account? <a href="/signin">Sign in here</a></p>
            </form>

        </div>
    </div>

    <footer></footer>
    <script type="module" src="/js/nav.js"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script src="/js/footer.js"></script>
</body>

</html>