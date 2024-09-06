var numberOfDrums = document.querySelectorAll(".drum").length;
var i=0;

//button press
while (i<numberOfDrums){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this.style = "color:white";

        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    });

    i++;
}

//key board press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function to make sound

function makeSound(buttonHtml){
    switch (buttonHtml) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;

        case "m":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;
    
        default:
            console.log(buttonHtml)
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}