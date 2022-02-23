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
    //e.target.textContent
    var newbox = e.target.textContent
    
    console.log(newbox)
   
     



        var randomwin = Math.floor(Math.random() * 3) + 1
    console.log(randomwin)

    if (newbox === randomwin) {
     

        document.getElementById("message").innerHTML = "You are a Winner";
        document.getElementById("message").textContent = "I have changed!";
          
        document.getElementById("wins").innerHTML;
        wins++
       
        }
        else {

        parseInt.lossingmessg = document.getElementById('message');
            document.getElementById("losses").innerHTML;
        losses++
        
        }
    }
})


