<?php
/**
 * Main game (La traviata) - PHP
 */

session_start();

include "db.php";
include "emit.php";


if($_POST["req"] == "getQuest"){
    emit("quest", json_encode(getQuest($_POST["id"], $dbh)));
}


function getQuest($id, $dbh){
    $stmt = $dbh->prepare("SELECT * FROM story WHERE question_id = :id");
    $stmt->bindParam(":id", $id);
	$stmt->execute();
    $row = $stmt->fetch();

    return $row;
}



?>
