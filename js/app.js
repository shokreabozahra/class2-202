'use strict'

alert("Hi!");

let userName = prompt("What is your name?");

alert("Hi " + userName + " welcome in my website! ");

document.write("welcome in my website! " + userName);

alert("let us have some fun!!");
alert("answer these questions with yes / no or by y / n");

let question;
function myFunction(){
switch(question){
    case "yes":
    case "y" :
    //    console.log("It is a wrong answer");
        alert("It is a wrong answer");
        break;    
    case "no" :
    case "n":
        // console.log("Good, it is a right answer");
        alert("Good, it is a right answer");
        break;
}
}
let question1 = prompt("lion is the largest big cat in the world?");
question = question1.toLocaleLowerCase();
myFunction();


let question2 = prompt("The Dead Sea is 10 times more salty than the ocean?");
question = question2.toLocaleLowerCase();
myFunction();

let question3 = prompt("Earth Day is held on June 18");
question = question3.toLocaleLowerCase();
myFunction();

let question4 = prompt("India is the largest country in Asia؟");
question = question4.toLocaleLowerCase();
myFunction();

let question5 = prompt("The Earth has 7 oceans?");
question = question5.toLocaleLowerCase();
myFunction();


alert("It was a great time " + userName + ", come to visit my website again!");