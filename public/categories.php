<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

$maincategory = $_GET['maincategory'];

if (isset($_GET['subcategory'])) {
    $subcategory = $_GET['subcategory'];
    $prods = $newObj->get_Sub_Category($maincategory, $subcategory);
    if (isset($_GET['category'])) {
        $category = $_GET['category'];
        $prods = $newObj->get_Category($maincategory, $subcategory,$category);
        $maincategory = str_replace('_', ' ', $_GET['category']);
    } else {
        $prods = $newObj->get_Sub_Category($maincategory, $subcategory);
        $maincategory = str_replace('_', ' ', $_GET['subcategory']);
    }
} else {
    $prods = $newObj->get_Main_Category($maincategory);
    $maincategory = str_replace('_', ' ', $_GET['maincategory']);
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title><?php echo $category?></title>
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
    <div class="overlay"></div>
    <section class="product">
        <h2 class="product-category"><?php echo $maincategory?></h2>
        <div class="border-container"></div>
        <div class="main-content">
            <div class="product-container">
                <?php foreach ($prods as $prod): ?>
                    <?php $comps = $newObj2->get_Price($prod['name']) ?>
                    <?php foreach ($comps as $comp): ?>
                <div class="product-card">
                    <div class="product-image">
                        <a href="product.php?product=<?php echo $prod['name'] ?>">
                        <img src="<?php echo $prod['image']?>" class="product-thumb" alt="<?$prod['name'] ?>">
                        </a>
                    </div>
                    <div class="product-info">
                        <h2 class="product-brand"><a href="product.php?product=<?php echo $prod['name'] ?>"><?php echo $prod['name'] ?></a></h2>
                        <p class="product-supplier">Cheapest from <span class="supplier" ><a href="product.php?product=<?php echo $prod['name'] ?>"><?php echo $comp['source']?></a></span></p>
                        <p class="product-short-des"><a href="categories.php?product=<?php echo $prod['category'] ?>"><?php echo $prod['category'] ?></a></p>
                        <span class="price">£<?php echo number_format($comp['price'], 2) ?></span> 
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
    <script src="js/overlay.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/product.js"></script>

</body>

</html>