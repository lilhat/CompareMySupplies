<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

$page_size = 15;
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
    <title><?php echo $finalcategory ?></title>
    <script>
        document.title = document.title.toLowerCase().replace(/\b(\w)/g, function(s) {
            return s.toUpperCase();
        });
    </script>
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
        <h2 class="product-category"><?php echo $finalcategory ?></h2>
        <div class="border-container"></div>
        <div class="main-content">
            <div class="product-container">
                <?php if ($prods) : ?>
                    <?php foreach ($prods as $prod) : ?>
                        <?php $comps = $newObj2->get_First_Comparison($prod['id']); ?>
                        <?php foreach ($comps as $comp) : ?>

                            <?php $total_products = $prod['total_count']; ?>
                            <div class="product-card">
                                <div class="product-image">
                                    <a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>">
                                        <img src="<?php echo $prod['image'] ?>" class="product-thumb" alt="<? $prod['name'] ?>">
                                    </a>
                                </div>
                                <div class="product-info">
                                    <h2 class="product-brand"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>"><?php echo $prod['name'] ?></a></h2>
                                    <p class="product-supplier">Cheapest from <span class="supplier"><a href="/product/<?php echo urlencode(str_replace("'", "''", str_replace('+', '--', str_replace('/', '~', $prod['name'])))) ?>"><?php echo $comp['source'] ?></a></span></p>
                                    <p class="product-short-des"><a href="/categories/<?php echo urlencode(str_replace('/', '~', $prod['category'])) ?>"><?php echo $prod['category'] ?></a></p>
                                    <span class="price">£<?php echo number_format($comp['price'], 2) ?></span>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endforeach; ?>
            </div>

            <?php if ($total_products > $page_size) : ?>
                <?php if (isset($category)) : ?>
                    <?php $category = str_replace(' ', '_', str_replace('&', '+', $category)); ?>
                <?php elseif (isset($subcategory)) : ?>
                    <?php $subcategory = str_replace(' ', '_', str_replace('&', '+', $subcategory)); ?>
                <?php elseif (isset($maincategory)) : ?>
                    <?php $maincategory = str_replace(' ', '_', str_replace('&', '+', $maincategory)); ?>
                    <div class="pagination">
                        <?php if ($current_page > 1) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'main_categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $current_page - 1; ?>" class="prev">&laquo; Prev</a>
                        <?php endif; ?>
                        <?php
                            $start_page = max(1, $current_page - 2);
                            $end_page = min($start_page + 4, ceil($total_products / $page_size));
                        ?>
                        <?php if ($start_page > 1) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'main_categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/1">1</a>
                            <?php if ($start_page > 2) : ?>
                                <span>...</span>
                            <?php endif; ?>
                        <?php endif; ?>
                        <?php for ($i = $start_page; $i <= $end_page; $i++) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'main_categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $i; ?>" class="<?php echo $i == $current_page ? 'active' : ''; ?>"><?php echo $i; ?></a>
                        <?php endfor; ?>
                        <?php if ($end_page < ceil($total_products / $page_size)) : ?>
                            <?php if ($end_page < ceil($total_products / $page_size) - 1) : ?>
                                <span>...</span>
                            <?php endif; ?>
                            <a href="/<?php echo isset($maincategory) ? 'main_categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo ceil($total_products / $page_size); ?>"><?php echo ceil($total_products / $page_size); ?></a>
                        <?php endif; ?>
                        <?php if ($current_page < ceil($total_products / $page_size)) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'main_categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $current_page + 1; ?>" class="next-page">Next Page &raquo;</i></a>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>


                <?php if (isset($subcategory)) : ?>
                    <?php $maincategory = str_replace(' ', '_', str_replace('&', '+', $maincategory)); ?>
                    <div class="pagination">
                        <?php if ($current_page > 1) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $current_page - 1; ?>" class="prev">&laquo; Prev</a>
                        <?php endif; ?>
                        <?php
                            $start_page = max(1, $current_page - 2);
                            $end_page = min($start_page + 4, ceil($total_products / $page_size));
                        ?>
                        <?php if ($start_page > 1) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/1">1</a>
                            <?php if ($start_page > 2) : ?>
                                <span>...</span>
                            <?php endif; ?>
                        <?php endif; ?>
                        <?php for ($i = $start_page; $i <= $end_page; $i++) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $i; ?>" class="<?php echo $i == $current_page ? 'active' : ''; ?>"><?php echo $i; ?></a>
                        <?php endfor; ?>
                        <?php if ($end_page < ceil($total_products / $page_size)) : ?>
                            <?php if ($end_page < ceil($total_products / $page_size) - 1) : ?>
                                <span>...</span>
                            <?php endif; ?>
                            <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo ceil($total_products / $page_size); ?>"><?php echo ceil($total_products / $page_size); ?></a>
                        <?php endif; ?>
                        <?php if ($current_page < ceil($total_products / $page_size)) : ?>
                            <a href="/<?php echo isset($maincategory) ? 'categories/' . $maincategory . '/' : 'categories/'; ?><?php echo isset($subcategory) ? $subcategory . '/' : ''; ?><?php echo isset($category) ? $category . '/' : ''; ?>page/<?php echo $current_page + 1; ?>" class="next-page">Next Page &raquo;</i></a>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            <?php endif; ?>
        <?php endif; ?>
    </section>
    <footer></footer>

    <script type="module" src="/js/nav.js"></script>
    <script type="module" src="/js/firebase.js"></script>
    <script src="/js/home.js"></script>
    <script src="/js/overlay.js"></script>
    <script src="/js/footer.js"></script>
    <script src="/js/product.js"></script>

</body>

</html>