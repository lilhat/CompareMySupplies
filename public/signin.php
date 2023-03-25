<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Sign In</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>

<body>
<?php include_once("analyticstracking.php") ?>
    <nav class="navbar"></nav>
    <div class="overlay"></div>
    <div class="signup-container">
        <div class="alert-box">
            <img src="images/error.png" class="alert-img" alt="">
            <p class="alert-msg">Error message</p>
        </div>
        <img src="images/loader.gif" class="loader" alt="">
        <div class="sign-in-form">
            <img src="images/user.png">
            <h1>Sign In</h1>
            <form action="/home" method="post">
                <input type="email" class="input-box" id="email" placeholder="Email">
                <input type="password" class="input-box" id="pwd" placeholder="Password">
                <p><span><input type="checkbox" id="remember-pass"></span> Remember my password</p>
                <button type="button" id="signIn" name="signIn" class="signup-btn">Sign In</button>
                <hr>
                <p class="or">OR</p>
                <button type="button" class="facebook-btn">Login with Facebook</button>
                <p>Don't have an account? <a href="/signup">Sign up here</a></p>
            </form>

        </div>
    </div>
    <footer></footer>
    <script type="module" src="/js/nav.js"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script type="module" src="js/overlay.js"></script>
    <script src="/js/footer.js"></script>
</body>

</html>