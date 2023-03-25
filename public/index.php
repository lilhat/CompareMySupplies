<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>UK's Top Building Materials And Supplies Comparison Site | Compare My Supplies</title>
    <meta name="Description" content="Find the best deals on building materials and supplies with our comparison website. 
    Compare prices from top UK suppliers to find the right products for your project. Save time and money with our easy-to-use platform.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "CompareMySupplies",
            "description": "CompareMySupplies is a price comparison website for construction materials and supplies.",
            "url": "https://comparemysupplies.com",
            "logo": "",
            "email": "contact@comparemysupplies.com",
            "founder": {
                "@type": "Person",
                "name": "Tahlil Chowdhury",
                "gender": "Male",
                "jobTitle": "CEO",
                "sameAs": [
                    "linkedin.com/in/tahlilchowdhury/"
                ]
            },
            "foundingDate": "2010-07-15",
            "sameAs": [
                "https://www.instagram.com/comparemysupplies/",
                "https://twitter.com/comparemysupply"
            ],
            "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@comparemysupplies.com",
                "url": "https://comparemysupplies.com"
            }]
        }
    </script>
</head>

<body>
    <?php include_once("analyticstracking.php") ?>
    <nav class="navbar"></nav>
    <div class="overlay"></div>
    <div class="container">
        <header class="hero-section">
            <div class="content">
                <h1 class="sub-heading">Compare thousands of products from the top suppliers in the UK</h1>
                <form action="/search/" method="get">
                    <div class="search-box-home">
                        <input type="text" class="tbox" name="query" placeholder="What supplies are you looking for?" />
                        <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </header>
        <section class="product">
            <h2 class="product-category">Top Sellers</h2>
            <button class="pre-btn"><img src="/images/arrow.png"></button>
            <button class="next-btn"><img src="/images/arrow.png"></button>
            <div class="border-container">
                <div class="product-container">
                    <?php $comps = $newObj->get_Top() ?>
                    <?php foreach ($comps as $comp) : ?>
                        <?php $extras = $newObj2->get_First_Comparison($comp['id']) ?>
                        <?php foreach ($extras as $extra) : ?>
                            <div class="product-card">
                                <div class="product-image">
                                    <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>">
                                        <img src="<?php echo $comp['image'] ?>" class="product-thumb" alt="supplies-image">
                                    </a>
                                </div>
                                <div class="product-info">
                                    <h2 class="product-brand"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>"><?php echo $comp['name'] ?></a></h2>
                                    <p class="product-supplier">Cheapest from <span class="supplier"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $comp['name'])))) ?>"><?php echo $extra['source'] ?></a></span></p>
                                    <span class="price">£<?php echo number_format($extra['price'], 2) ?></span>
                                    <p class="product-short-des"><a href="/categories/<?php echo urlencode(str_replace('/', '~', $comp['category'])) ?>"><?php echo $comp['category'] ?></a></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endforeach; ?>

                </div>
        </section>

        <footer></footer>



    </div>

    <script type="module" src="/js/nav.js"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script type="module" src="/js/home.js"></script>
    <script type="module" src="/js/overlay.js"></script>
    <script src="/js/footer.js"></script>
</body>

</html>