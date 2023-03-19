<?php
include("response.php");
$newObj = new Product();
$newObj1 = new Product();

$page_size = 15;
$current_page = isset($_GET['page']) ? intval($_GET['page']) : 1; // current page number (default to 1)
$offset = ($current_page - 1) * $page_size; // offset for the query

if (isset($_GET['query'])) {
    $search_query = $_GET['query'];
    $prods = $newObj->get_Search($search_query, $page_size, $offset);
}





?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Search Result</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/product.css">
    <link rel="stylesheet" href="/css/products.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>

<body>
    <nav class="navbar"></nav>
    <div class="overlay"></div>
    <section class="product">
        <h2 class="product-category">Search Result</h2>
        <div class="border-container"></div>
        <div class="main-content">
        <?php if ($prods && $search_query) : ?>
            <div class="product-container">
                    <?php foreach ($prods as $prod) : ?>
                        <?php $extras = $newObj1->get_First_Comparison($prod['id']) ?>
                        <?php $total_products = $prod['total_count']; ?>
                        <?php foreach ($extras as $extra) : ?>
                            <div class="product-card">
                                <div class="product-image">
                                    <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>">
                                        <img src="<?php echo $prod['image'] ?>" class="product-thumb" alt="<? $prod['name'] ?>">
                                    </a>
                                </div>
                                <div class="product-info">
                                    <h2 class="product-brand"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>"><?php echo $prod['name'] ?></a></h2>
                                    <p class="product-supplier">Cheapest from <span class="supplier"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>"><?php echo $extra['source'] ?></a></span></p>
                                    <p class="product-short-des"><a href="/categories/<?php echo urlencode(str_replace('/', '~', $prod['category'])) ?>"><?php echo $prod['category'] ?></a></p>
                                    <span class="price">£<?php echo number_format($extra['price'], 2) ?></span>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endforeach; ?>
            </div>
        


            <?php if ($total_products > $page_size) : ?>
                <div class="pagination">
                    <?php if ($current_page > 1) : ?>
                        <a href="/<?php echo 'search/' . $search_query . '/' ?>page/<?php echo $current_page - 1; ?>" class="prev">&laquo; Prev</a>
                    <?php endif; ?>
                    <?php
                    $start_page = max(1, $current_page - 2);
                    $end_page = min($start_page + 4, ceil($total_products / $page_size));
                    ?>
                    <?php if ($start_page > 1) : ?>
                        <a href="/<?php echo 'search/' . $search_query . '/' ?>page/1">1</a>
                        <?php if ($start_page > 2) : ?>
                            <span>...</span>
                        <?php endif; ?>
                    <?php endif; ?>
                    <?php for ($i = $start_page; $i <= $end_page; $i++) : ?>
                        <a href="/<?php echo 'search/' . $search_query . '/' ?>page/<?php echo $i; ?>" class="<?php echo $i == $current_page ? 'active' : ''; ?>"><?php echo $i; ?></a>
                    <?php endfor; ?>
                    <?php if ($end_page < ceil($total_products / $page_size)) : ?>
                        <?php if ($end_page < ceil($total_products / $page_size) - 1) : ?>
                            <span>...</span>
                        <?php endif; ?>
                        <a href="/<?php echo 'search/' . $search_query . '/' ?>page/<?php echo ceil($total_products / $page_size); ?>"><?php echo ceil($total_products / $page_size); ?></a>
                    <?php endif; ?>
                    <?php if ($current_page < ceil($total_products / $page_size)) : ?>
                        <a href="/<?php echo 'search/' . $search_query . '/' ?>page/<?php echo $current_page + 1; ?>" class="next-page">Next Page &raquo;</i></a>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        <?php elseif ($search_query) : ?>
            <div class="product-container">    
                <h1 class="result-text">No results found for <span class="search-result"><?php echo $search_query ?></span></h1>
            </div>
        <?php else : ?>
            <div class="product-container"> 
                <h1 class="result-text">No results found</h1>
            </div>
        <?php endif; ?>
        </div>
    </section>
    <footer></footer>

    <script src="/js/nav.js"></script>
    <script src="/js/home.js"></script>
    <script src="/js/overlay.js"></script>
    <script src="/js/footer.js"></script>
    <script src="/js/product.js"></script>

</body>

</html>