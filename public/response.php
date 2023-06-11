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
              SELECT DISTINCT id, name, price, category, image, description 
              FROM u603122697_public.products 
              WHERE main_category = '$maincategory'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            LIMIT $page_size OFFSET $offset;
            ";
    $queryRecords = mysqli_query($this->conn, $sql) or die ("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
}


public function get_Sub_Category($maincategory, $subcategory, $page_size, $offset){
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description 
            FROM (
              SELECT DISTINCT id, name, price, category, image, description 
              FROM u603122697_public.products 
              WHERE main_category = '$maincategory' AND sub_category = '$subcategory'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            LIMIT $page_size OFFSET $offset;
            ";
    $queryRecords = mysqli_query($this->conn, $sql) or die ("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
}

public function get_Category($maincategory, $subcategory, $category, $page_size, $offset){
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description 
            FROM (
              SELECT DISTINCT id, name, price, category, image, description 
              FROM u603122697_public.products 
              WHERE main_category = '$maincategory' AND sub_category = '$subcategory' AND category = '$category'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            LIMIT $page_size OFFSET $offset;
            ";
    $queryRecords = mysqli_query($this->conn, $sql) or die ("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
}


  public function get_Category_List($category){
    $sql = "SELECT DISTINCT category, sub_category, main_category
    FROM u603122697_public.products
    WHERE category LIKE '$category'
    GROUP BY category, sub_category, main_category;";
    $queryRecords = mysqli_query($this->conn, $sql) or die ("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_Product(){
    $sql = "SELECT * FROM u603122697_public.products;";
    $queryRecords = mysqli_query($this->conn, $sql) or die ("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_Price($id) {
    $sql = "SELECT DISTINCT id, name, price, category, image, description, sub_category, main_category
            FROM products
            WHERE id = '$id'
            ORDER BY id ASC, price ASC
            LIMIT 1;
            ";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_Top() {
    $sql = "SELECT DISTINCT id, name, price, category, image, description
    FROM u603122697_public.products
    WHERE top_seller = '1'
    ORDER BY id ASC, price ASC;";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_ID($string) {
    $sql = "SELECT DISTINCT id, name, price, category, image, description
        FROM products
        WHERE name = '$string'
        ORDER BY id ASC, price ASC;
        ";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_Comparison($id) {
    $sql = "SELECT * FROM u603122697_public.comparisons WHERE id = '$id' ORDER BY price ASC;";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_First_Comparison($id) {
    $sql = "SELECT * FROM u603122697_public.comparisons WHERE id = '$id' ORDER BY price ASC LIMIT 1;";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }

  public function get_Search($string, $page_size, $offset) {
    $sql = "SELECT COUNT(*) OVER () AS total_count, id, name, price, category, image, description 
            FROM (
              SELECT DISTINCT id, name, price, category, image, description 
              FROM u603122697_public.products 
              WHERE name LIKE '%$string%'
              ORDER BY id ASC, price ASC 
            ) AS subquery
            ORDER BY id ASC, price ASC
            LIMIT $page_size OFFSET $offset;
    ";
    $queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch data");
    $data = array();
    while(($row = mysqli_fetch_array($queryRecords))) {
        $data[] = $row;
    }
    return $data;
  }
}
?>