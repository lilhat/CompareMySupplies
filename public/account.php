<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Account</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/product.css">
    <link rel="stylesheet" href="/css/products.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>   
<body>
<?php include_once("analyticstracking.php") ?>
    <div class="overlay"></div>
    <nav class="navbar"></nav>
    <div class="container">
        
        <div class="content-wrapper">
            <div class="two-column-wrapper">
                <div class="text-wrapper">
                <p class="account-details">Name: </p>
                <br><br>
                <p class="account-details">Email: </p>
                </div>
                <div class="account-content-wrapper">
                    <h1>My Account</h1>
                
                    <input type="text" id="name" name="name" readonly><br><br>
                    <input type="text" id="email" name="email" readonly><br><br>
                    <button type="submit" class="btn" id="delete-btn">Delete Account</button>    
                </div>
            </div>


        </div>
    </div>
    <footer></footer>
    <script type="module" src="/js/nav.js"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script type="module" src="/js/account.js"></script>
    <script src="/js/overlay.js"></script>
    <script src="/js/footer.js"></script>

</body>

</html>
