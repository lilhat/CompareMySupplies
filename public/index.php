<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<?php
include("response.php");
$newObj = new Product();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Home</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>

<body>
    <nav class="navbar"></nav>
    <div class="overlay"></div>
    <div class="container">
        <header class="hero-section">
            <div class="content">
                <p class="sub-heading">Compare thousands of products from the top suppliers in the UK</p>
                <form action="search.php" method="get">
                    <div class="search-box-home">
                            <input type="text" class="tbox" placeholder="What supplies are you looking for?" />
                            <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </header>
        <section class="product">
            <h2 class="product-category">Top Sellers</h2>
            <button class="pre-btn"><img src="images/arrow.png"></button>
            <button class="next-btn"><img src="images/arrow.png"></button>
            <div class="border-container">
                <div class="product-container">
                        <?php $comps = $newObj->get_Top() ?>
                        <?php foreach ($comps as $comp) : ?>
                            <div class="product-card">
                                <div class="product-image">
                                    <a href="product.php?product=<?php echo $comp['name'] ?>">
                                    <img src="<?php echo $comp['image']?>" class="product-thumb" alt="">
                                    </a>
                                </div>
                                <div class="product-info">
                                    <h2 class="product-brand"><a href="product.php?product=<?php echo $comp['name'] ?>"><?php echo $comp['name'] ?></a></h2>
                                    <p class="product-supplier">Cheapest from <span class="supplier" ><a href="<?php echo $comp['source'] ?>"><?php echo $comp['source']?></a></span></p>
                                    <span class="price">£<?php echo number_format($comp['price'],2) ?></span>
                                    <p class="product-short-des"><a href="categories.php?product=<?php echo $comp['category'] ?>"><?php echo $comp['category'] ?></a></p>
                                </div>
                            </div>
                        <?php endforeach; ?>

                </div>
        </section>

        <footer></footer>



    </div>
    <script src="js/nav.js"></script>
    <script src="js/home.js"></script>
    <script src="js/overlay.js"></script>
    <script src="js/footer.js"></script>
</body>

</html>