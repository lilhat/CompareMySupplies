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
  
  public function get_bluecircle_multi_cement_25kg() {
    $sql = "SELECT * FROM bluecircle_multi_cement_25kg";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch data");
    $data = pg_fetch_all($queryRecords);
    return $data;
  }
}

?>