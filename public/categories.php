<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

$page_size = 16;
$current_page = isset($_GET['page']) ? intval($_GET['page']) : 1; // current page number (default to 1)
$offset = ($current_page - 1) * $page_size; // offset for the query

if (isset($_GET['maincategory'])) {
    $maincategory = $_GET['maincategory'];
    if (isset($_GET['subcategory'])) {
        $subcategory = $_GET['subcategory'];
        $subcategory = str_replace('+', '&', $subcategory);
        $prods = $newObj->get_Sub_Category($maincategory, $subcategory, $page_size, $offset);
        if (isset($_GET['category'])) {
            $category = str_replace('_', ' ', $_GET['category']);
            $category = str_replace('+', '&', $category);
            $prods = $newObj->get_Category($maincategory, $subcategory, $category, $page_size, $offset);
            $maincategory = str_replace('_', ' ', $maincategory);
            $maincategory = str_replace('+', '&', $maincategory);
            $finalcategory = str_replace('_', ' ', str_replace('+', '&', $category));
        } else {
            $prods = $newObj->get_Sub_Category($maincategory, $subcategory, $page_size, $offset);
            $maincategory = str_replace('_', ' ', $maincategory);
            $finalcategory = str_replace('_', ' ', str_replace('+', '&', $subcategory));
        }
    } else {
        $prods = $newObj->get_Main_Category($maincategory, $page_size, $offset);
        $maincategory = str_replace('_', ' ', $_GET['maincategory']);
        $finalcategory = str_replace('_', ' ', str_replace('+', '&', $maincategory));
    }
} else if (isset($_GET['category'])) {
    $category =  str_replace('_', ' ', urldecode($_GET['category']));
    $category = str_replace('+', '&', $category);
    $cats = $newObj->get_Category_List($category);
    foreach ($cats as $key => $cat) :
        $subcategory = $cat['sub_category'];
        $maincategory = $cat['main_category'];
    endforeach;
    $prods = $newObj->get_Category($maincategory, $subcategory, $category, $page_size, $offset);
    $maincategory = str_replace('_', ' ', $maincategory);
    $maincategory = str_replace('+', '&', $maincategory);
    $finalcategory = str_replace('_', ' ', str_replace('+', '&', $category));
}


$maincategory = str_replace("''", "'", $maincategory);


?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Compare <?php echo $finalcategory ?></title>
    <script>
        document.title = document.title.toLowerCase().replace(/\b(\w)/g, function(s) {
            return s.toUpperCase();
        });
    </script>
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

    <!-- Boxes -->
    <section class="p-5" id="category-boxes">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center h-100">
                <h2 class="mb-3" id="title"><?php echo $finalcategory ?></h2>
            </div>
            <div class="d-flex justify-content-center align-items-center h-100">
                <?php if ($prods) : ?>
                    <div class="row text-center">

                        <?php foreach ($prods as $prod) : ?>
                            <?php $comps = $newObj2->get_First_Comparison($prod['id']); ?>
                            <?php foreach ($comps as $comp) : ?>
                                <?php $total_products = $prod['total_count']; ?>
                                <div class="col-lg-3 col-md-6 mb-4 p-5">
                                    <div class="card bg-light text-dark" style="width: 18rem;">
                                        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>">
                                                <img src="<?php echo $prod['image'] ?>" class="card-img-top w-100" alt="materials-image">
                                            </a>
                                        </div>

                                        <div class="card-body text-center">
                                            <p class="card-text"><a href="/get-category.php?category=<?php echo urlencode(str_replace('/', '~', $prod['category'])) ?>" id="text-link"><?php echo $prod['category'] ?></a></p>
                                            <h5 class="card-title mb-3"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>" id="text-link"><?php echo $prod['name'] ?></a></h5>
                                            <p class="card-text position-absolute" id="card-source">Cheapest from <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>" id="text-link"><?php echo $comp['source'] ?></a></p>
                                            <h5 class="card-text top-50 position-absolute" id="card-price">£<?php echo number_format($comp['price'], 2) ?></h5>
                                            <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>" class="btn btn-primary position-absolute translate-middle" id="compare-btn">Compare</a>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endforeach; ?>
                    </div>


            </div>
            <?php if ($total_products > $page_size) : ?>
                <?php if (isset($category)) : ?>
                    <?php $category = str_replace(' ', '_', str_replace('&', '+', $category)); ?>
                <?php endif; ?>
                <?php if (isset($subcategory)) : ?>
                    <?php $subcategory = str_replace(' ', '_', str_replace('&', '+', $subcategory)); ?>
                <?php endif; ?>
                <?php if (isset($maincategory)) : ?>
                    <?php $maincategory = str_replace(' ', '_', str_replace('&', '+', $maincategory)); ?>
                <?php endif; ?>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <nav aria-label="...">
                        <ul class="pagination">
                            <?php
                            $start_page = max(1, $current_page - 2);
                            $end_page = ceil($total_products / $page_size);
                            $last_page = $current_page - 1;
                            $next_page = $current_page + 1;
                            ?>
                            <?php if ($current_page > 1) : ?>
                                <li class="page-item">
                                    <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/1" class="page-link">First Page</a>
                                </li>
                                <li class="page-item">
                                    <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $last_page; ?>" class="page-link">Prev</a>
                                </li>
                            <?php endif; ?>
                            <?php if ($current_page > 1) : ?>
                                <li class="page-item">
                                    <a class="page-link" href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $last_page ?>"><?php echo $last_page ?></a>
                                </li>
                            <?php endif; ?>
                            <li class="page-item active" aria-current="page">
                                <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $current_page; ?>" class="page-link"><?php echo $current_page; ?></a>
                            </li>

                            <?php if ($next_page <= $end_page) : ?>
                                <li class="page-item">
                                    <a class="page-link" href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $next_page; ?>"><?php echo $next_page; ?></a>
                                </li>
                            <?php endif; ?>
                            <?php if ($current_page < ceil($total_products / $page_size)) : ?>
                                <li class="page-item">
                                    <a class="page-link" href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $next_page; ?>" class="next-page">Next</i></a>
                                </li>
                                <li class="page-item">
                                    <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $end_page ?>" class="page-link">Last Page</a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </nav>
                </div>
            <?php endif; ?>

        <?php endif; ?>
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
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>

    <!-- <script src="/js/search.js"></script> -->
</body>

</html>