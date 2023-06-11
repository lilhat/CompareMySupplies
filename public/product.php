<?php
include("response.php");
$newObj = new Product();
$newObj1 = new Product();
$newObj2 = new Product();
$newObj3 = new Product();
$newObj4 = new Product();
$newObj5 = new Product();
$name = str_replace('--', '+', str_replace('~', '/', urldecode($_GET['product'])));
$ids =  $newObj->get_ID($name);

foreach ($ids as $key => $id) :
    $prodID = $id['id'];
endforeach;

if (isset($prodID)) {
    $comps = $newObj1->get_Comparison($prodID);
    $prods = $newObj2->get_First_Comparison($prodID);
    $mains = $newObj3->get_Price($prodID);
    foreach ($prods as $prod) :
        $link = $prod['link'];
        $price = $prod['price'];

    endforeach;

    foreach ($mains as $main) :
        $image = $main['image'];
        $category = $main['category'];
        $subcategory = $main['sub_category'];
        $maincategory = $main['main_category'];
        $description = $main['description'];
    endforeach;
}

$name = str_replace("''", "'", $name);
$extras = $newObj4->get_Top();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Compare <?php echo $name ?></title>
    <meta name="Description" content="Find and compare the best deals on building materials and supplies. 
    Compare prices from top UK suppliers to find the right products for your project. Save time and money with our easy-to-use platform.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <!-- <link href="/vendor/twbs/bootstrap/dist/css/bootstrap.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/owl_carousel/owl.carousel.css">
    <link rel="stylesheet" href="/owl_carousel/owl.theme.default.css">
    <!-- MDB -->
    <link href="/vendor/mdbootstrap/css/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
    <?php include_once("analyticstracking.php") ?>
    <header class="mobile-header"></header>
    <div class="overlay"></div>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="top-navbar"></nav>
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="logo-navbar"></nav>
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="main-navbar"></nav>
    </header>

    <div class="bg-primary" id="links-section">
        <div class="container py-4">
            <!-- Breadcrumb -->
            <nav class="d-flex">
                <h6 class="mb-0" id="breadcrumb">
                    <a href="/categories/<?php echo $maincategory ?>" class="text-white-50"><?php echo str_replace('_', ' ', $maincategory) ?></a>
                    <span class="text-white-50 mx-2"> > </span>
                    <a href="/categories/<?php echo $maincategory ?>/<?php echo $subcategory ?>" class="text-white-50"><?php echo str_replace('_', ' ', $subcategory) ?></a>
                    <span class="text-white-50 mx-2"> > </span>
                    <a href="/categories/<?php echo $maincategory ?>/<?php echo $subcategory ?>/<?php echo $category ?>" class="text-white"><u><?php echo $category ?></u></a>
                </h6>
            </nav>
            <!-- Breadcrumb -->
        </div>
    </div>
    <!-- Product -->

    <section class="py-5" id="product-section">
        <div class="container">
            <div class="row gx-5" id="image-section">
                <aside class="col-lg-6" id="image-col">
                    <div class="border rounded-4 mb-3 d-flex justify-content-center" id="main-image">
                        <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image">
                            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" src="<?php echo $image ?>" />
                        </a>
                    </div>
                    <div class="d-flex mb-3" id="side-image">
                        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" class="item-thumb">
                            <img width="60" height="60" class="rounded-2" src="<?php echo $image ?>" />
                        </a>
                    </div>
                    <!-- thumbs-wrap.// -->
                    <!-- gallery-wrap .end// -->
                </aside>
                <main class="col-lg-6" id="product-column">
                    <div class="ps-lg-3" id="product-details">
                        <div class="small mb-1" id="category-text"><?php echo $category ?></div>
                        <h1 class="display-6 fw-bolder text-dark"><?php echo $name ?></h1>
                        <div class="fs-5 mb-5">
                            <span>Compare prices from <span class="fw-bold">£<?php echo number_format($price, 2) ?></span></span>
                        </div>
                        <!-- Table -->
                        <div class="ps-lg-3">
                            <table class="table table-hover align-middle mb-0 bg-white">
                                <tbody>
                                    <?php foreach ($comps as $key => $comp) : ?>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="ms-3">
                                                        <p class="text-muted mb-0"><?php echo $comp['name'] ?></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="fs-6 fw-bold mb-1">£<?php echo number_format($comp['price'], 2) ?></p>
                                            </td>
                                            <td>
                                                <img src="/images/suppliers/<?php echo $comp['source'] ?>.png" alt="" style="width: 100px; height: 45px" class="rounded-circle" id="table-img" />
                                            </td>
                                            <td>
                                                <a href="<?php echo $comp['link'] ?>" target="_blank">
                                                    <button type="button" id="table-btn" class="btn btn-link btn-outline-orange btn-sm btn-rounded">
                                                        Go to supplier
                                                    </button>
                                                </a>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                <h3 class="main pt-5">Product Details</h3>
                <p class="lead pt-3"><?php echo $description ?></p>

            </div>
        </div>
    </section>

    <section class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <h2 class="mb-3" id="title">Top Sellers</h2>
                </div>
                <div class="owl-carousel owl-theme">
                    <?php $comps = $newObj->get_Top() ?>
                    <?php foreach ($comps as $comp) : ?>
                        <?php $extras = $newObj2->get_First_Comparison($comp['id']) ?>
                        <?php foreach ($extras as $extra) : ?>
                            <div class="item">
                                <div class="col-lg-3 col-md-6 mb-4 p-5" id="carousel-products">
                                    <div class="card bg-light text-dark" style="width: 18rem;">
                                        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>">
                                                <img src="<?php echo $comp['image'] ?>" class="card-img-top w-100" alt="materials-image">
                                            </a>
                                        </div>

                                        <div class="card-body text-center">
                                            <p class="card-text"><a href="/get-category.php?category=<?php echo urlencode(str_replace('/', '~', $comp['category'])) ?>" id="text-link"><?php echo $comp['category'] ?></a></p>
                                            <h5 class="card-title mb-3"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>" id="text-link"><?php echo $comp['name'] ?></a></h5>
                                            <p class="card-text position-absolute" id="card-source">Cheapest from <a href="#" id="text-link"><?php echo $extra['source'] ?></a></p>
                                            <h5 class="card-text top-50 position-absolute" id="card-price">£<?php echo number_format($extra['price'], 2) ?></h5>
                                            <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>" class="btn btn-warning position-absolute translate-middle" id="compare-btn">Compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"></footer>
    </div>


    <!-- <script src="/vendor/twbs/bootstrap/dist/js/bootstrap.js"></script> -->
    <!-- MDB -->
    <script type="text/javascript" src="/vendor/mdbootstrap/js/mdb.min.js"></script>
    <script src="/js/nav.js"></script>
    <script src="/js/sidenav.js"></script>
    <script src="/js/footer.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/owl_carousel/owl.carousel.js"></script>
    <script src="/js/carousel.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>

    <!-- <script src="/js/search.js"></script> -->
</body>

</html>