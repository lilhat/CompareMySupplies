<?php
include("response.php");
$newObj = new Product();
$newObj2 = new Product();

if(isset($_GET['category'])){
    $category = str_replace('_', ' ', $_GET['category']);
    $category = str_replace('+', '&', $category);
    $cats = $newObj->get_Category_List($category);
    foreach ($cats as $key => $cat) :
        $subcategory = $cat['sub_category'];
        $maincategory = $cat['main_category'];
    endforeach;
    $category = str_replace(' ', '_', $category);
    $category = str_replace('&', '+', $category);
    header("Location: categories/" . $maincategory . "/" . $subcategory . "/" . $category);
}

?>