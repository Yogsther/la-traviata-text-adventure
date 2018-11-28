get_all_quests();

on["smallest"] = response => {document.getElementById("id").value = response;};

on["success"] = message => {
    document.getElementById("messages").innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>Success!</strong> Database modified. </div>' + document.getElementById("messages").innerHTML; 
}

on["error"] = message => {
    if(message == "internal"){
        document.getElementById("messages").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>OOOOOOOOOOOOH NO!</strong> Interntal error, you better take a look at this! </div>' + document.getElementById("messages").innerHTML; 
    } else if(message == "token"){
        document.getElementById("messages").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>Yeet!</strong> You need to submit a valid token! </div>' + document.getElementById("messages").innerHTML; 
    }
}

emit("req=get_recommended_id", "editor.php");

function create_quest() {


    var options = document.getElementsByClassName("options");
    var optionsArr = [];

    for (option of options) {
        if (option.value != undefined && option.value != "" && option.value != null) {
            optionsArr.push(option.value);
        }
    }

    quest = {
        text: JSON.stringify(document.getElementById("text").value),
        options: JSON.stringify(optionsArr),
        id: document.getElementById("id").value,
        token: document.getElementById("token").value,
        special: "" // Removed feature
    }

    emit("req=new_entry&text=" + quest.text + "&options=" + quest.options + "&id=" + quest.id + "&token=" + quest.token+"&special="+quest.special, "editor.php");
}


function get_all_quests() {
    emit("req=all_quests", "editor.php");
}

var quests;
on["all_quests"] = (pack) => {
    quests = pack;

    quests.sort(function(a, b) {
        return a.question_id - b.question_id;
    });

    document.getElementById("quests-insert").innerHTML = ""; // Clear
    i = 0;
    for(quest of pack){
        document.getElementById("quests-insert").innerHTML += '<div class="jumbotron log" style="color:white;background: rgb(87,' + (100 - (i*20)) + ', 238) !important;"> <p><b>Text:</b>' + quest.text + '</p> <p><b>Options:</b> ' + quest.options + '</p> <p><b>ID: ' + quest.question_id + '</b></p> <button class="btn btn-danger float-right" onclick="remove(' + i + ')" style="margin-left:10px;"> Delete </button> <button class="btn btn-default float-right" onclick="load(' + i + ')"> Load </button> </div>';
        i++;
    }
}

function load(id){
    quest = quests[id];
    document.getElementById("text").value = JSON.parse(quest.text);
    document.getElementById("id").value = JSON.parse(quest.question_id);
    
    options = JSON.parse(quest.options);
    optionElements = document.getElementsByClassName("options");

    for(i = 0; i < optionElements.length; i++){
        if(options[i]) optionElements[i].value = options[i];
            else optionElements[i].value = "";
    }
}

function remove(id){
    if(!confirm("Are you sure you want to delete this quest?")) return;
    emit("req=delete&id="+quests[id].question_id + "&token=" + document.getElementById("token").value, "editor.php");
}