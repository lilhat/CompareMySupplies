<?php
    include("response.php");
    $newObj = new Product();
    $prods = $newObj->get_Product("blue_circle_multi_cement_25kg");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Product</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
</head>   
<body>
    <div class="container">
        <nav class="navbar"></nav>
        <div class="single-product">
            <div class="row">
                <div class="col-6">
                    <div class="product-image">
                        <div class="product-image-main">
                            <img src="images/cement.png" alt="" id="product-main-image">
                        </div>
                        <div class="product-image-slider">
                            <img src="img/tshirt-1.png" alt=""  class="image-list">
                            <img src="img/tshirt-2.png" alt=""  class="image-list">
                            <img src="img/tshirt-3.png" alt=""  class="image-list">
                            <img src="img/tshirt-group.png" alt=""  class="image-list">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="breadcrumb">
                        <span><a href="#">Home</a></span>
                        <span><a href="#">Product</a></span>
                        <span class="active">Cement</span>
                    </div>

                    <div class="product">
                        <div class="product-title">
                            <h2>Cement</h2>
                        </div>
                        <div class="product-rating">
                            <span><i class="bx bxs-star"></i></span>
                            <span><i class="bx bxs-star"></i></span>
                            <span><i class="bx bxs-star"></i></span>
                            <span><i class="bx bxs-star"></i></span>
                            <span><i class="bx bxs-star"></i></span>
                            <span class="review">(47 Review)</span>
                        </div>
                        <div class="product-price">
                            <span class="offer-price">$99.00</span>
                            <span class="sale-price">$129.00</span>
                        </div>

                        <div class="product-details">
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                        </div>
                        <div class="product-size">
                            <h4>Size</h4>
                            <div class="size-layout">
                                <input type="radio" name="size" value="50M" id="1" class="size-input">
                                <label for="1" class="size">50M</label>

                                <input type="radio" name="size" value="100M" id="2" class="size-input">
                                <label for="2" class="size">100M</label>
                            </div>
                        </div>
                        <div class="product-color">
                            <h4>Color</h4>
                            <div class="color-layout">
                                <input type="radio" name="color"  value="black" class="color-input">
                                <label for="black" class="black"></label>
                                <input type="radio" name="color"  value="beige" class="color-input">
                                <label for="beige" class="beige"></label>

                                <input type="radio" name="color"  value="brown" class="color-input">
                                <label for="brown" class="brown"></label>
                            </div>
                        </div>
                        <span class="divider"></span>

                        <div class="product-btn-group">
                            <div class="button buy-now"><i class='bx bxs-zap' ></i> Buy Now</div>
                            <div class="button add-cart"><i class='bx bxs-cart' ></i> Add to Cart</div>
                            <div class="button heart"><i class='bx bxs-heart' ></i> Add to Wishlist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "products">
            <div class = "container">
            <table id="product" class="table" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Supplier Name</th>
                    <th>Price (£)</th>
                  </tr>
            </thead>               
            <tbody>
                <?php foreach($prods as $key =>$prod) :?>
                <tr>
                  <td><?php echo $prod['id'] ?></td>
                  <td><?php echo $prod['product_name'] ?></td>
                  <td><?php echo $prod['supplier_name'] ?></td>
                  <td><?php echo $prod['price'] ?></td>
                </tr>
               <?php endforeach;?>
            </table>
            </div>
        </div>


    </div>  
    <footer></footer>
    <script src="js/nav.js"></script>
    <script src="js/script.js"></script>
    <script src="js/footer.js"></script>
</body>
</html>