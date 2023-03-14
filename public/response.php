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

  public function get_Main_Category($maincategory){
    $sql = "SELECT * FROM public.$maincategory ORDER BY id ASC, price ASC LIMIT 20";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Sub_Category($maincategory, $subcategory){
    $sql = "SELECT * FROM public.$maincategory WHERE sub_category = '$subcategory' ORDER BY id ASC, price ASC LIMIT 20";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
  
  public function get_Category($maincategory, $subcategory,$category){
    $sql = "SELECT * FROM public.$maincategory WHERE sub_category = '$subcategory' AND category = '$category' ORDER BY id ASC, price ASC LIMIT 20 ";
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

  public function get_Price($string) {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, link, image, description, source FROM public.products WHERE name = '$string' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Top() {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, link, image, description, source FROM public.top_sellers order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_ID($string) {
    $sql = "SELECT DISTINCT ON (id) id, name, price, category, link, image, description, source FROM public.products WHERE name = '$string' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Comparison($id) {
    $sql = "SELECT * FROM public.products WHERE id = '$id' order by id ASC, price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
}
?>