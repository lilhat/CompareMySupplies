<?php
    $host = "localhost";
    $port = "5432";
    $dbname = "logindb";
    $user = "postgres";
    $password = "admin123"; 
    $connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
    $dbconn = pg_connect($connection_string);
    if(isset($_POST['submit'])&&!empty($_POST['submit'])){
        
        $sql = "insert into public.user(name,email,password) values('".$_POST['name']."','".$_POST['email']."','".md5($_POST['pwd'])."')";
        $ret = pg_query($dbconn, $sql);
        if($ret){
                echo "Data saved Successfully";
        }else{
            
                echo "Soething Went Wrong";
        }
    }
    ?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Home</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
</head>   
<body>
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
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <input type="name" class="input-box" name="name" placeholder="Full Name">
                <input type="email" class="input-box" name="email" placeholder="Email">
                <input type="password" class="input-box" name="pwd" placeholder="Password">
                <p><span><input type="checkbox" id="terms-and-cond"></span> I agree to the <span class="link"><a href="#">terms of services</a></span></p>
                <input type="submit" name="submit" class="signup-btn" value="Submit">
                <hr>
                <p class="or">OR</p>
                <button type="button" class="facebook-btn">Login with Facebook</button>
                <p>Already have an account? <a href="signin.php">Sign in here</a></p>
            </form>
    
        </div>
    </div>
    
    <footer></footer>
    <script src="js/nav.js"></script>
    <script src="js/form.js"></script>
    <script src="js/token.js"></script>
    <script src="js/footer.js"></script>
</body>
</html>