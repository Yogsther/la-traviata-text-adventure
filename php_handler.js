function emit(message, file) {
    /* Emitter to the server */

    /* Default to la_traviata.php */
    if(file == undefined) file = "la_traviata.php";

    var xhr = new XMLHttpRequest(); // Create new XMLHttpsRequest
    xhr.open("POST", file, true); // Set to post and choose what file to send to
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            on(this.responseText); // On respnse, call 'on' function
        }
    }

    xhr.send(message);
}

/* On response, this function is called */
function on(response){
    console.log("> " + response); // Log the raw response
    response = JSON.parse(response); // Parse the JSON response
    type = response.type; // Set type
    response = response.content; // Set response

    // Custom code

    if(type == "smallest"){
        document.getElementById("id").value = response;
    }

    if(type == "quest"){
        currentQuest = JSON.parse(response);
        currentQuest.options = JSON.parse(currentQuest.options); 
        currentQuest.text = JSON.parse(currentQuest.text); 
        for(i = 0; i < currentQuest.options.length; i++){
            option = currentQuest.options[i];
            var newOption = new Object();
            newOption.id = option.substr(0, option.indexOf(" "));
            newOption.text = option.substr(option.indexOf(" ")+1, option.length);
            currentQuest.options[i] = newOption;
        }
        newQuest();
    }


}