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

  public function get_Category(){
    $sql = "SELECT * FROM public.product_list ORDER BY id ASC";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Category_id($string){
    $sql = "SELECT * FROM public.product_list WHERE category = '$string' ORDER BY id ASC ";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
  
  public function get_Product(){
    $sql = "SELECT * FROM information_schema.tables WHERE table_schema = 'public'";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Price($string) {
    $sql = "SELECT * FROM $string order by price ASC LIMIT 1";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }

  public function get_Comparison($string) {
    $sql = "SELECT * FROM $string order by price ASC";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
}
?>