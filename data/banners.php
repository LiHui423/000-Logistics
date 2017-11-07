<?php
require("00_init.php");
$sql="SELECT * FROM logistics_index_carousel";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_All($result,MYSQLI_ASSOC);
if($result&&$rows>0){
    echo json_encode($rows);
}
/*header("Content-Type:application/json");
require_once("./init.php");
$sql="SELECT * FROM logistics_index_carousel";
echo json_encode(sql_execute($sql));*/
