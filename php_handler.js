var on = new Array();

function emit(message, file) {
    /* Emitter to the server */

    /* Default to la_traviata.php */
    if(file == undefined) file = "la_traviata.php";

    var xhr = new XMLHttpRequest(); // Create new XMLHttpsRequest
    xhr.open("POST", file, true); // Set to post and choose what file to send to
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            onHandler(this.responseText); // On respnse, call 'on' function
        }
    }

    xhr.send(message);
}

/* On response, this function is called */
function onHandler(response){
    response = JSON.parse(response); // Parse the JSON response
    type = response.type; // Set type
    response = response.content; // Set response

    if(on[type]) on[type](response)
        else console.warn(type + " is not defined");
}