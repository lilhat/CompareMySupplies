<?php
    include("response.php");
    $newObj = new Product();
    $newObj2 = new Product();
    $newObj3 = new Product();
    $newObj4 = new Product();
    $id = $_GET['product'];
    $comps = $newObj->get_Comparison($id);
    $prods = $newObj2->get_Price($id);
    $extras = $newObj3->get_Category();
    
    foreach($prods as $key =>$prod) :
        $name = $prod['product_name'];
        $price = $prod['price'];

    endforeach;



?>
<!DOCTYPE html>
<html>
<?php
    ?>
<head>
    <meta charset="utf-8" />
    <title><?php echo $id?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/product.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>   
<body>

    <nav class="navbar"></nav>

    <section class="product-details">
        <div class="main-image" style="background-image: url('images/products/<?php echo $id?>.png')"></div>
        <div class="image-slider">
            <div class="product-images">
                <img src="images/products/<?php echo $id?>.png" class="active" alt="">
            </div>
        </div>
        <div class="details">
            <h2 class="product-brand"><?php echo $name?></h2>
            <p class="product-short-des"></p>
            <span class="compare-price">Compare prices from </span>
            <span class="product-price"> £<?php echo $price?></span>
        </div>
    
    </section>

    <section class="compare-table">
        <div class = "table-container">
            <table id="compare" class="table" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th></th>
                </tr>
            </thead>               
            <tbody>
                <?php foreach($comps as $key =>$comp) :?>
                <tr>
                  <td><?php echo $comp['product_name'] ?></td>
                  <td><span class="compare-price">£<?php echo $comp['price'] ?></span></td>
                  <td><img class="supplier-logo" src="images/suppliers/<?php echo $comp['supplier_name']?>.png"></td>
                  <td><a href="<?php echo $comp['link'] ?>" target="_blank"><button class="supplier-btn">Go To Supplier</button></a></td>
                </tr>
               <?php endforeach;?>
            </table>
        </div>
    </section>
    <section class="product">
            <h2 class="product-category">Top Sellers</h2>
            <button class="pre-btn"><img src="images/arrow.png"></button>
            <button class="next-btn"><img src="images/arrow.png"></button>
            <div class="border-container">
                <div class="product-container">
                <?php foreach ($extras as $extra): ?>
                    <?php $prices = $newObj4->get_Price($extra['product_code'])?>
                    <?php $comps = $newObj2->get_Price($extra['product_code']) ?>
                    <?php foreach($prices as $price): ?>
                        <?php foreach ($comps as $comp) : ?>
                        <div class="product-card">
                            <div class="product-image">
                                <img src="images/products/<?php echo $extra['product_code']?>.png" class="product-thumb" alt="">
                                <a href="product.php?product=<?php echo $extra['product_code']?>"><button class="card-btn">Compare Prices</button></a>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand"><a href="product.php?product=<?php echo $extra['product_code'] ?>"><?php echo $extra['product_name'] ?></a></h2>
                                <p class="product-supplier">Cheapest from <span class="supplier" ><a href="product.php?product=<?php echo $extra['product_code'] ?>"><?php echo $comp['supplier_name']?></a></span></p>
                                <p class="product-short-des"><a href="categories.php?product=<?php echo $extra['category'] ?>"><?php echo $extra['category'] ?></a></p>
                                <span class="price">£<?php echo $price['price'] ?></span> 
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <?php endforeach; ?>
                    <?php endforeach; ?>
                    
            </div>
        </section>

    <footer></footer>

    <script src="js/nav.js"></script>
    <script src="js/home.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/product.js"></script>

</body>




</html>