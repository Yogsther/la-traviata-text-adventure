<?php

function emit($type, $content){
    $obj->type = $type;
    $obj->content = $content;
    echo json_encode($obj);
}

?>