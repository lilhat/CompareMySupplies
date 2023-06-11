<?php
class dbObj {
  private $servername, $username, $password, $dbname, $port, $conn;

  public function __construct() {
    $this->servername = "localhost";
    $this->database = "u603122697_public";
    $this->username = "u603122697_admin";
    $this->password = "LiLHaTGaming123!";
  }

  public function getConnstring() {
    $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->database);

    // Check connection
    if (!$this->conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    return $this->conn;
  }
}
?>
