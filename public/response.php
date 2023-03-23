<?php

include("connection.php");
class Product {
  protected $conn;
  protected $data = array();
  function __construct() {
    $db = new dbObj();
    $connString =  $db->getConnstring();
    $this->conn = $connString;
  }

  public function get_Main_Category($maincategory, $page_size, $offset){
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description 
            FROM (
              SELECT DISTINCT ON (id) id, name, price, category, image, description 
              FROM public.products 
              WHERE main_category = '$maincategory'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            OFFSET $offset 
            LIMIT $page_size;";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
}


public function get_Sub_Category($maincategory, $subcategory, $page_size, $offset){
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description
            FROM (
              SELECT DISTINCT ON (id) id, name, price, category, image, description
              FROM public.products 
              WHERE main_category = '$maincategory' AND sub_category = '$subcategory'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            OFFSET $offset 
            LIMIT $page_size;";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
}

public function get_Category($maincategory, $subcategory, $category, $page_size, $offset){
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description
            FROM (
              SELECT DISTINCT ON (id) id, name, price, category, image, description
              FROM public.products
              WHERE main_category = '$maincategory' AND sub_category = '$subcategory' AND category = '$category' 
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            OFFSET $offset 
            LIMIT $page_size;";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
}


  public function get_Category_List($category){
    $sql = "SELECT DISTINCT ON (category) category, sub_category, main_category FROM public.products WHERE category LIKE '$category'";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Product(){
    $sql = "SELECT * FROM public.products";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Price($id) {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, image, description, sub_category, main_category FROM public.products WHERE id = '$id' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Top() {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, image, description FROM public.products WHERE top_seller = '1' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_ID($string) {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, image, description FROM public.products WHERE name = '$string' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Comparison($id) {
    $sql = "SELECT * FROM public.comparisons WHERE id = '$id' order by price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_First_Comparison($id) {
    $sql = "SELECT * FROM public.comparisons WHERE id = '$id' order by price ASC LIMIT 1";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Search($string, $page_size, $offset) {
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description 
            FROM (
              SELECT DISTINCT ON (id) id, name, price, category, image, description 
              FROM public.products
              WHERE name ILIKE '%$string%' OR category ILIKE '%$string%'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            OFFSET $offset 
            LIMIT $page_size;";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
}
?>