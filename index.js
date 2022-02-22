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
var allbox = document.querySelectorAll('.box')

allbox.forEach(function(.box) {

    .box.onclick = function(e) {
     

        var randomwin = Math.floor(Math.random() * 3) + 1
        console.log(randomwin)

        if (allbox === randomwin) {
            document.getElementById('message') = "You are a Winner";
            console.log(target.e)
            document.getElementById("wins").innerHTML;
           
            wins++
        }
        else {

            parseInt.lossingmessg = document.getElementById('message')
            document.getElementById("losses").innerHTML;
            losses++
        }
    }
})


