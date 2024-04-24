var drumnumbers = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumnumbers; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonselect = this.innerHTML;
        makeSound(buttonselect);
        buttonAnimation(buttonselect);
        
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();    
            break;
        case "c":
            var audio = new Audio("sounds/snare.mp3")
             audio.play();    
             break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();    
            break;
        case "e":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();    
            break;
        case "f":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();    
            break;
        case "g":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();    
            break;
        default:
            break;
    }
}

function buttonAnimation (currentkey) {
    var buttonaction = document.querySelector("."+currentkey);
    buttonaction.classList.add("pressed");

    setTimeout(function(){
        buttonaction.classList.remove("pressed");
    },100);
}