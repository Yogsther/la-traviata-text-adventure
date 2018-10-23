<?php

    include "db.php";
    include "emit.php";

    if($_POST["req"] == "all_quests"){
        $stmt = $dbh->prepare("SELECT * FROM story");
	    $stmt->execute();
        $row = $stmt->fetchAll();
        
        echo json_encode($row);

    }

    if($_POST["req"] == "get_recommended_id"){

        $smallest = 0;        
        while(1){
            $stmt = $dbh->prepare("SELECT * FROM story WHERE question_id = :smallest");
            $stmt->bindParam(":smallest", $smallest);
	        $stmt->execute();
            $row = $stmt->fetch();
            if(count($row) > 1){
                $smallest++;
            } else {
                emit("smallest", $smallest);
                return;
            }
        }
    }

    if($_POST["req"] == "new_entry"){

        if($token !== $_POST["token"]){
            echo "Incorrect token!";
            return;
        }

        $stmt = $dbh->prepare("INSERT INTO story (text, options, gives, question_id) VALUES (:text, :options, :gives, :question_id)");
        $stmt->bindParam(':text', $_POST["text"]); 
        $stmt->bindParam(':options', $_POST["options"]); 
        $stmt->bindParam(':gives', $_POST["special"]); 
        $stmt->bindParam(':question_id', $_POST["id"]); 
        $success = $stmt->execute();
        
        if($success) {
            echo "Success!";
        } else {
            echo $stmt->error;
            echo "Failed to insert";
        }
    }


?>

