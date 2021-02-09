'use strict'

let score = 0;
let userName = prompt("What is your name?");

alert("Hi " + userName + " welcome to my website! ");

document.write("welcome to my website! " + userName);

alert("let us have some fun!! answer these questions with yes / no or by y / n");

let question;

let question1 = prompt("Do I live in Amman??");
question = question1.toLocaleLowerCase();

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


let question2 = prompt("More than two years ago I started studying programming, do you think I do that because just for its wide fields in the job market?");
question = question2.toLocaleLowerCase();
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
        score++;

        break;
}

let question3 = prompt("Do you think I studied an Electrical engineering?");
question = question3.toLocaleLowerCase();
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
        score++;
        break;
}

let question4 = prompt("I worked as a teacher before. Do you think I was an English teacher?");
question = question4.toLocaleLowerCase();
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
        score++;
        break;
}

let question5 = prompt("I tried to set up my own business, do you think it is continuing for now?");
question = question5.toLocaleLowerCase();
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
        score++;

        break;
}

let playNumber = Math.trunc(Math.random()* 10);
console.log(playNumber);

let i =0;
for(; i<4; i++){ 
let guessedNumber = prompt(userName + " guess a number between 1 and 10 (You have 4 chances)??");
console.log("the number entered by user" + guessedNumber);
if(guessedNumber == playNumber) {
    alert("Wooow you guessed it !!");
    score++;

    break;
}else if (guessedNumber>playNumber){
    alert("Too high");
    continue;
}else{
    alert("Too low");
    continue;
     }
    }
    if(i==4){
        alert("The number was " + playNumber + " We are sorry !")

    }

    
    let galaxy = ["company", "restaurant", "cafe", "flower shop", "supermarket", "beauty center", "school", "university"];
    let breakCheck1 = false;
    for (let i =0; i<6; i++){
        let answer = prompt(userName + " If I were not an engineer, where do you think I would have liked to have worked ????\nChoose from this list: \ncompany, resturant, cafe, flower shop, supermarket, beauty center, school, university");
        answer.toLowerCase;
        console.log("the answer of user: " + answer);
            switch(answer){
                 case galaxy[0]:
                 case galaxy[1]:
                 case galaxy[2]:
                     break;
                 case galaxy[3]:
                     alert("Good! that's right");
                     breakCheck1 = true;
                     score++;
                     break;
                 case galaxy[4]:
                 case galaxy[5]:
                 case galaxy[6]:
                 case galaxy[7]:
                default:
                    alert("Wrong answer! \n Try again");
            }
            if (breakCheck1) break;
        }
        console.log("score " + score);

        alert("Your score is : " + score);
    
    alert("It was a great time " + userName + ", come to visit my website again!");

        
    
    // var breakCheck1 = false;
    
    // for(let i = 0; i<6; i++){
    //     let question7= prompt(userName + " What are the names of our galaxy planets, do you remember?");

    //     for(let j = 0; j<galaxy.length;j++ ){
    //         question7.toLocaleLowerCase;
    //         console.log(question7);
    //         console.log(galaxy[j]);

    //         if(question7 === galaxy[j]){
    //             alert("Good! that's right");
    //             breakCheck1 = true;
    //             score++;
    //         }else{
    //             alert("Wrong answer! \n Try again");
    //         }
    //     }
    //     if (breakCheck1) break;
    // }
    // console.log(score);
    