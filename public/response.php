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
  
  public function get_Product(){
    $sql = "SELECT * FROM information_schema.tables WHERE table_schema = 'public'";
    $queryRecords = pg_query($this->conn, $sql) or die ("error to fetch data");
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