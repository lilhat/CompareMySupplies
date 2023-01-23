<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

$id = $_GET['product'];
$prods = $newObj->get_Category_id($id);

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title><?php echo $id?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/product.css">
    <link rel="stylesheet" href="css/products.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>   
<body>

    <nav class="navbar"></nav>
    <section class="product">
            <h2 class="product-category"><?php echo $id?></h2>
            <div class="border-container">
                <div class="product-container">
                    <?php foreach ($prods as $prod): ?>
                        <?php $comps = $newObj2->get_Price($prod['product_code']) ?>
                        <?php foreach ($comps as $comp): ?>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/<?php echo $prod['product_code']?>.png " class="product-thumb" alt="<?$prod['product_name'] ?>">
                            <a href="product.php?product=<?php echo $prod['product_code']?>"><button class="card-btn">Compare Prices</button></a>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand"><?php echo $prod['product_name'] ?></h2>
                            <p class="product-short-des"><?php echo $prod['category'] ?></p>
                            <span class="price">£<?php echo $comp['price'] ?></span> 
                        </div>
                    </div>
                    <?php endforeach; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    <footer></footer>

    <script src="js/nav.js"></script>
    <script src="js/home.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/product.js"></script>

</body>

</html>