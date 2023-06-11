<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>UK's Top Building Materials And Supplies Comparison Site | CompareMySupplies</title>
    <meta name="Description" content="Find and compare the best deals on building materials and supplies. 
    Compare prices from top UK suppliers to find the right products for your project. Save time and money with our easy-to-use platform.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <!-- <link href="/vendor/twbs/bootstrap/dist/css/bootstrap.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/owl_carousel/owl.carousel.css">
    <link rel="stylesheet" href="/owl_carousel/owl.theme.default.css">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="/vendor/mdbootstrap/css/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "CompareMySupplies",
            "alternateName": "CompareSupplies"
            "description": "CompareMySupplies is a price comparison website for construction materials and supplies for all your building needs.",
            "url": "https://comparemysupplies.com",
            "logo": "",
            "email": "support@comparemysupplies.com",
            "founder": {
                "@type": "Person",
                "name": "Tahlil Chowdhury",
                "gender": "Male",
                "jobTitle": "CEO",
                "sameAs": [
                    "linkedin.com/in/tahlilchowdhury/"
                ]
            },
            "foundingDate": "2023-03-30",
            "sameAs": [
                "https://www.instagram.com/comparemysupplies/",
                "https://twitter.com/comparemysupply"
            ],
            "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@comparemysupplies.com",
                "url": "https://comparemysupplies.com"
            }]
        }
    </script>

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



    <!-- Showcase -->
    <section>
        <div id="showcase" class="p-5 text-center bg-image rounded-3" style="
        background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)),url('../images/header-background-building-materials.png');
        height: 530px;">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3">Compare thousands of products from the top suppliers in the UK</h1>
                        <h4 class="mb-3">Search for materials and supplies</h4>
                        <div class="row height d-flex justify-content-center align-items-center">

                            <div class="col-md-8">
                                <form action="/search/" method="get">
                                    <div class="search">
                                        <i class="fa fa-search" id="search-icon"></i>
                                        <input type="text" class="form-control" name="query" placeholder="What are you looking for?">
                                        <button class="btn btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <!-- Boxes -->
    <section class="p-5" id="top-sellers">
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <h2 class="mb-3" id="title">Top Sellers</h2>
                </div>
                <div class="owl-carousel owl-theme">
                    <?php $comps = $newObj->get_Top() ?>
                    <?php foreach ($comps as $comp) : ?>
                        <div class="item">
                            <?php $extras = $newObj2->get_First_Comparison($comp['id']) ?>
                            <?php foreach ($extras as $extra) : ?>

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
                                            <p class="card-text position-absolute" id="card-source">Cheapest from <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>" id="text-link"><?php echo $extra['source'] ?></a></p>
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

    <!-- Search -->
    <section class="bg-light text-dark p-5" id="cat-container">
        <div class="container" id="button-container">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="d-md pb-3" id="top-row">
                    <a class="btn btn-dark btn-lg" href="/categories/building_hardware" role="button" id="cat-button">Building & Hardware</a>
                    <a class="btn btn-dark btn-lg" href="/categories/heating_plumbing" role="button" id="cat-button">Heating & Plumbing</a>
                    <a class="btn btn-dark btn-lg" href="/categories/home_furniture" role="button" id="cat-button">Home & Furniture</a>
                    <a class="btn btn-dark btn-lg" href="/categories/kitchen_bathroom" role="button" id="cat-button">Kitchen & Bathroom</a>
                    <a class="btn btn-dark btn-lg" href="/categories/lighting_electrical" role="button" id="cat-button">Lighting & Electrical</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="d-md pb-3" id="bottom-row">
                    <a class="btn btn-dark btn-lg" href="/categories/outdoor_garden" role="button" id="cat-button">Outdoor & Garden</a>
                    <a class="btn btn-dark btn-lg" href="/categories/painting_decorating" role="button" id="cat-button">Painting & Decorating</a>
                    <a class="btn btn-dark btn-lg" href="/categories/tiling_flooring" role="button" id="cat-button">Tiling & Flooring</a>
                    <a class="btn btn-dark btn-lg" href="/categories/tools_equipment" role="button" id="cat-button">Tools & Equipment</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-primary text-light p-5" id="news-letter">
        <div class="container">
            <div class="d-md-flex jusitfy-content-between align-items-center">
                <h3 class="mb-3 mb-md-0" id="news-text">Sign Up For Our Newsletter</h3>

                <div class="input-group" id="news-input">
                    <input type="text" class="form-control border-0 mr-2" name="email" placeholder="Enter Email" aria-label="Recipient's email" aria-describedby="button-addon2" id="news-form" />
                    <button class="btn btn-dark text-light" type="button" id="newsSubmit" name="newsSubmit" data-mdb-ripple-color="dark">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    </section>


    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"></footer>
    </div>
    
    <!-- MDB -->
    <script type="text/javascript" src="/vendor/mdbootstrap/js/mdb.min.js"></script>
    <script src="/js/nav.js"></script>
    <script src="/js/sidenav.js"></script>
    <script src="/js/footer.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script src="/owl_carousel/owl.carousel.js"></script>
    <script src="/js/carousel.js"></script>
    <script src="https://kit.fontawesome.com/fa1ecb41b8.js" crossorigin="anonymous"></script>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>

</body>

</html>