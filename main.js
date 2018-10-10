emit("test");

function emit(message) {
    /* Emitter to the server */
    var xhr = new XMLHttpRequest(); // Create new XMLHttpsRequest
    xhr.open("POST", 'la_traviata.php', true); // Set to post and choose what file to send to
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            on(this.responseText); // On respnse, call 'on' function
        }
    }

    xhr.send(message);
}

function on(response){
    /* On response, this function is called */
    console.log("Response:" + response);
}