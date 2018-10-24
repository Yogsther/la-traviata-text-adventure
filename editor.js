on["smallest"] = response => {document.getElementById("id").value = response;};


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
        special: document.getElementById("special").value
    }

    emit("req=new_entry&text=" + quest.text + "&options=" + quest.options + "&id=" + quest.id + "&token=" + quest.token+"&special="+quest.special, "editor.php");
}


function get_all_quests() {
    emit("req=all_quests", "editor.php");
}