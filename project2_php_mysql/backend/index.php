<?php
$mysqli = new mysqli("mysql","root","root","testdb");
if ($mysqli->connect_error) {
  echo "MySQL connection failed";
} else {
  echo "PHP + MySQL Docker OK";
}

