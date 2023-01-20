<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();
$prods = $newObj->get_Category();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Home</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/homenav.css">
    <link rel="stylesheet" href="css/homesearchbar.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>   
<body>
    <div class="container">
        <nav class="navbar"></nav>

        <header class="hero-section">
            <div class="content">
                <p class="sub-heading">Compare the prices of all your essential building supplies!</p>
                <div class="search-box">
                    <input type="text" class="tbox" placeholder="What supplies are you looking for?" />
                    <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </header>
        <section class="product">
            <h2 class="product-category">Top Sellers</h2>
            <button class="pre-btn"><img src="images/arrow.png"></button>
            <button class="next-btn"><img src="images/arrow.png"></button>
            <div class="border-container">
                <div class="product-container">
                <?php foreach ($prods as $prod): ?>
                    <?php $comps = $newObj2->get_Price($prod['product_code']) ?>
                        <?php foreach ($comps as $comp): ?>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/<?php echo $prod['product_code']?>.png" class="product-thumb" alt="">
                            <a href="product.php?product=<?php echo $prod['product_code']?>"><button class="card-btn">Compare Prices</button></a>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand"><?php echo $prod['product_name']?></h2>
                            <p class="product-short-des"><?php echo $prod['category']?></p>
                            <span class="price">£<?php echo $comp['price'] ?></span> 
                        </div>
                    </div>
                    <?php endforeach; ?>
                    <?php endforeach; ?>
                    
            </div>
        </section>

        <footer></footer>


       
    </div>
    <script src="js/homenav.js"></script>
    <script src="js/home.js"></script>
    <script src="js/footer.js"></script>
</body>
</html>