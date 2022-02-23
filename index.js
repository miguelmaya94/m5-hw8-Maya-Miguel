var lossingmessg = ['You lost', 'Please play again', 'Sorry, you lost'];
var messgarray= lossingmessg.length;

var wins = 0;
var losses = 0;

var messag = document.getElementById('message')
var win = document.getElementById('wins')
var loss = document.getElementById('losses')


// target all .box elements and attach a click event listener to each one using a loop
var allbox = document.querySelectorAll('.box')
  allbox.forEach(function(box) {

box.onclick = function(e) {
     

        var randomwin = Math.floor(Math.random() * 3) + 1
        console.log(randomwin)

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
    }
})


