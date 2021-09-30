//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
// function response() {
//     var list = [
//         'Yeah sure, certainly. Whatever.',
//         'I mean, I guess so?',
//         'Sin duda.',
//         'Uh huh, I think it will happen.',
//         'You may rely on it.',
//         'As I see it, yes.',
//         'Most likely, but dont quote me on that.',
//         'Seems like a good chance to me. But Im just an array...',
//         'Ok, yeah, YES.',
//         'Seeming like a yes on this end.',
//         'Reply hazy, try again.',
//         'Ask again later.',
//         'Better not tell you now.',
//         'Cannot predict now.',
//         'Concentrate and ask again.',
//         'Don’t count on it.',
//         'My reply is no.',
//         'My sources say no.',
//         'Outlook not so good.',
//         'No, dont count on it...NO!',
// ];

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
// var number = responses[Math.floor(Math.random() * responses.length)];

// var number = Math.floor(Math.random()*20);
// document.getElementById("response").innerHTML = list[number];
// }

// all this function is doing is picking a number between 1 & 19 (remember that 1 in code, is 0)

// Var denotes a variable... but you could use const too
// randomResponse is what you're naming the function
// * indicates where and when the computer should stop on an answer
// length measures the number of objects in an array
// math.floor rounds a number to a whole number because math.random works in fractions



function shake(){

    var ball= document.getElementById("ball") 

    ball.classList.add("shake");
 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    setTimeout(function(){ getresponse(); }, 1500);
 }

function response() {
    var list = [
        "It shall be so",
        'I shall see it through',
        'You have requested, now you will have it',
        'Assuredly, your wish may be closer than you think',
        'Yes, your wish will soon be realized',
        'It will be done',
        'You may see this in your future, but do not get carried away',
        'The forces beyond us tell me it is possible',
        'As you wish.',
        'It could very well be so',
        'I am having trouble divinating this query',
        'Do not proceed with this question',
        'It would be unwise to tell you now',
        'I have no answer for this query',
        'Clear your thoughts and ask me again',
        'Do not place your bets here',
        'It will not be so',
        'The other side does not forsee it',
        'I do not forsee this in your future',
        'This will not be your fate',
    ];
    var number = Math.floor(Math.random()*20);
    document.getElementById("response").innerHTML = list[number];
}

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
// document.querySelector('response').innerHTML = randomResponse;

// document refers to the whole HTML page (saying look in the linked HTML doc)
// querySelector is a search function (this time with #display, it's searching for that specific ID to alter). Try to use IDs only once in your HTML)
// innerHTML means take whatever's inside that ID, and replace it with a random response
// randomResponse is calling the first funtion to do its job


// Define which variables are positive, neutral and negative, then 
// create an if else statement



// GOAL: If the answer is positive, the bkg will change to green
// GOAL 2: If the answer is neutral, the bkg will change to gray
// GOAL 3: If the answer is negative, the bkg will change to red

// re-notate the array and add 2 object functions that will 

// OBSOLETE(?) CODE:

// if (responses> 11) {
// 	console.log("positive");
// } else {
// 	console.log("not positive");
// }




// var positive = function(elem, index, theArray) {
//     console.log(elem + "-" + index + "-" + "-" +
//     theArray);
//     return elem < 11;
// };




// var result = responses.find(function(elem) {
//     return elem > 5 && elem < 10;
// });

// console.log(result);

// var newArr = [];



// for (i=0; i < responses.length; i++){
//     if(responses[i].length <= 9 ){
//     newArr.push(responses[i]); 
//     } else {
//       console.log('skip' + responses[i]);
//     }
// }

// console.log(newArr);

// Class that holds a collection of players and properties and functions for the group
// class positive {
//     constructor(){
//       this.responses = [
//         'Yeah sure, certainly. Whatever.',
//         'I mean, I guess so?',
//         'Sin duda.',
//         'Uh huh, I think it will happen.',
//         'You may rely on it.',
//         'As I see it, yes.'
//         ]
//      }
//     }

//     class neutral {
//         constructor(){
//           this.responses = [
//             'Most likely, but dont quote me on that.',
//             'Seems like a good chance to me. But Im just an array...',
//             'Ok, yeah, YES.',
//             'Seeming like a yes on this end.',
//             'Reply hazy, try again.',
//             'Ask again later.',
//             'Better not tell you now.',
//             'Cannot predict now.',
//             'Concentrate and ask again.'
//             ]
//         }
//     }

//     class negative {
//         constructor(){
//           this.responses = [
//             'Don’t count on it.',
//             'My reply is no.',
//             'My sources say no.',
//             'Outlook not so good.',
//             'No, dont count on it...NO!'
//             ]
//         }
//     }

// var positive = var.responses < 10;
