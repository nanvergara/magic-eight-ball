// Magic Eight Ball
// user will ask a question and program will give a fortune

// enter your name
const userName = "Nancy"

let userQuestion = "Will I be getting coffee?"
// generate a number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ""

//condition for initial greeting
if (userName === "Nancy") {
    console.log("Hello!");
    console.log(`Your question: ${userQuestion}`);
}

// switch statement evaluates an expression to a case, then executes statements in the case
// case will execute if there is no break from the switch statement


switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidely so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Dont count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = ""
}
console.log(eightBall);
