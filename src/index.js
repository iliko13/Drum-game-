
//detection button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;
       
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

    
}

//detection keyboard press

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("src/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("src/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("src/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("src/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("src/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("src/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("src/sounds/kick-bass.mp3");
            kick.play();
            break;
            
    
        default: console.log(buttonInnerHTML);
            
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}










//Higher order function
// Higher order functions are functions that can take other fucntions as inputs

// //Construction function(we use it in functions, ყოველთვის რომ არ გამოვიძახოთ ფუნქციებში პარამეტრები, შესაბამისად ამ კონტრუქციულ ფუნცქიას ვაძლევთ ფუნცქციას და მერე ვიყენებთ ჩვეულებრივ ფუნცქიაში)
// function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
// }

// var houseKeeper1 = new HouseKeeper (9, "Tom", ["lobby", "bedroom"]);
// console.log(houseKeeper1.name); //TOM