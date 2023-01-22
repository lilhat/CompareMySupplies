<?php
    $host = "localhost";
    $port = "5432";
    $dbname = "logindb";
    $user = "postgres";
    $password = "admin123"; 
    $connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
    $dbconn = pg_connect($connection_string);
    if(isset($_POST['submit'])&&!empty($_POST['submit'])){
        
        $hashpassword = md5($_POST['pwd']);
        $sql ="select * from public.user where email = '".pg_escape_string($_POST['email'])."' and password ='".$hashpassword."'";
        $data = pg_query($dbconn,$sql); 
        $login_check = pg_num_rows($data);
        if($login_check > 0){ 
            
            echo "Login Successfully";    
        }else{
            
            echo "Invalid Details";
        }
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Home</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
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
            <h1> Sign In</h1>
            <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>
            <form action="signin.php" method="post">
            <input type="email" class="input-box" name="email" placeholder="Email">
            <input type="password" class="input-box" name="pwd" placeholder="Password">
            <p><span><input type="checkbox" id="remember-pass"></span> Remember my password</p>
            <input type="submit" class="signup-btn" name="submit" value="Submit">
            <hr>
            <p class="or">OR</p>
            <button type="button" class="facebook-btn">Login with Facebook</button>
            <p>Don't have an account? <a href="signup.php">Sign up here</a></p>
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