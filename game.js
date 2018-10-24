var textToWrite = "";
var writeIndex = 0;
var currentQuest;
var activeText;
var name;




var sound = new Audio();
    sound.src = "sound.mp3";
    sound.loop = true;

function writeText(text){

    textToWrite = text;
    textToWrite = textToWrite.replace(/#name/gi, name);
    //text = text.split("#name").join(name)
    writeIndex = 0;
    charactersOnLine = 0;
    const charactersPerLine = 32;

    var activeText = document.createElement("span");
    activeText.classList.toggle("active-text");
    activeText.classList.toggle("text") 
    sound.play(); // Start playing sound effect

    document.getElementById("game-window").appendChild(activeText);

    var textAnimation = setInterval(() => {

        if(writeIndex < textToWrite.length){
            activeText.textContent += textToWrite[writeIndex];
            charactersOnLine++;
            writeIndex++;

            if(charactersPerLine <= charactersOnLine){
                activeText.innerHTML+="<br>";
                charactersOnLine = 0;
            }
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

on["quest"] = response => {
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

function getQuest(id){
    emit("req=getQuest&id="+id);
}

function choice(id){
    if(currentQuest.options.length-1 < id) return;
    getQuest(currentQuest.options[id].id);
}

window.onload = () => {
    name = prompt("Please choose a name", "Violetta");
    getQuest(0);
}

function newQuest(){
    for(el of document.getElementsByClassName("active-text")){
        el.classList.toggle("active-text")
    }
    writeText(currentQuest.text);
}