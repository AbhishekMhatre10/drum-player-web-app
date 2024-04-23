var drumnumbers = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumnumbers; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonselect = this.innerHTML;
        switch (buttonselect) {
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
        
        
    });
}
