// Create an Array of at least 3 losing messages

var lossingmessg = ['You lost', 'Please play again', 'Sorry, you lost'];
var messgarray= lossingmessg.length;
console.log(lossingmessg)

// Create variables to count wins and losses
var wins = 0;
var losses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messag = document.getElementById('message')
var win = document.getElementById('wins')
var loss = document.getElementById('losses')


// target all .box elements and attach a click event listener to each one using a loop
var allbox = document.querySelectorAll('box')

allbox.forEach(function(box) {

    box.onclick = function (e) {
        box.textContent = e.target.textContent
    }
})



// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var randomwin = Math.floor(Math.random() * 3) + 1 


console.log(randomwin)

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
if (allbox === randomwin) {
    document.getElementById('message') = "You are a Winner";

    document.getElementById("wins").innerHTML;
  
    wins++
}


else {
 
    parseInt.lossingmessg = document.getElementById('message')
    document.getElementById("losses").innerHTML;
    losses++
    }

    



// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses