<?php
    include("response.php");
    $newObj = new Product();
    $names = $newObj->get_Product();
?>
<!DOCTYPE html>
<html>
<?php
foreach($names as $name)
{
    foreach($names as $key =>$name) :
        $product_code = $name["table_name"];
        $prods = $newObj->get_Comparison($product_code);

    foreach($prods as $key =>$prod) :
        $product_name = $prod["product_name"];
        $product_price = $prod["price"];
    ?>
<head>
    <meta charset="utf-8" />
    <title><?php echo $product_name ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">
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
        <div class="main-image" style="background-image: url('images/products/<?php echo $product_code?>.png')"></div>
        <div class="image-slider">
            <div class="product-images">
                <img src="images/products/<?php echo $product_code?>.png" class="active" alt="">
            </div>
        </div>
        <div class="details">
            <h2 class="product-brand"><?php echo $product_name ?></h2>
            <p class="product-short-des">Description</p>
            <span class="compare-price">Compare prices from </span>
            <span class="product-price"> £<?php echo $product_price ?></span>
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
                <?php foreach($prods as $key =>$prod) :?>
                <tr>
                  <td><?php echo $prod['product_name'] ?></td>
                  <td><span class="compare-price">£<?php echo $prod['price'] ?></span></td>
                  <td><img class="supplier-logo" src="images/suppliers/<?php echo $prod['supplier_name']?>.png"></td>
                  <td><a href="<?php echo $prod['link'] ?>"><button class="supplier-btn">Go To Supplier</button></a></td>
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
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/bluecircle_multi_cement_25kg.png" class="product-thumb" alt="">
                            <a href="product.php"><button class="card-btn">Compare Prices</button></a>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/bluecircle_multi_readymixed_concrete_20kg.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/gyproc_square_edge_plasterboard_l1800_w900_t12p5.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/tarmac_kiln_dried_paving_sand_25kg.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/metsa_roundedge_whitewood_cls_timber_l2400_w63_t38.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/floplast_ringseal_black_singlesocket_soil_pipe_d110_l3000.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/prysmian_6242y_2p5mm_grey_twinearth_100m.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/products/mk_sentry_16module_8way_populated_dual_rcd_consumer_unit_spd.png" class="product-thumb" alt="">
                            <button class="card-btn">Compare Prices</button>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Brand</h2>
                            <p class="product-short-des">Short Description</p>
                            <span class="price">£20.00</span> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <footer></footer>

    <script src="js/nav.js"></script>
    <script src="js/home.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/product.js"></script>

</body>


<?php endforeach;?>
<?php endforeach;?>
<?php
}
?>
</html>
