var textToWrite = "";
var writeIndex = 0;
var currentQuest;
var activeText;

var sound = new Audio();
    sound.src = "sound.mp3";
    sound.loop = true;

function writeText(text){

    textToWrite = text;
    writeIndex = 0;

    var activeText = document.createElement("span");
    activeText.classList.toggle("active-text");
    activeText.classList.toggle("text")
    sound.play();

    document.getElementById("game-window").appendChild(activeText);

    var textAnimation = setInterval(() => {

        if(writeIndex < textToWrite.length){
            activeText.textContent += textToWrite[writeIndex];
            writeIndex++;
        } else {
            clearInterval(textAnimation);        
            sound.pause();
            var buttons = document.getElementsByClassName("button");
            
            for(i = 0; i < buttons.length; i++){
                if(currentQuest.options[i] !== undefined){
                    buttons[i].textContent = currentQuest.options[i].text;
                } else {
                    buttons[i].textContent = "";
                }
            }
        }

        var window = document.getElementById("game-window");
        window.scrollTop = window.scrollHeight;
    }, 20);

}

function getQuest(id){
    emit("req=getQuest&id="+id);
}

function choice(id){
    if(currentQuest.options.length-1 < id) return;
    getQuest(currentQuest.options[id].id);
}

window.onload = () => {
    getQuest(0);
}

function newQuest(){
    for(el of document.getElementsByClassName("active-text")){
        el.classList.toggle("active-text")
    }
    writeText(currentQuest.text);
}