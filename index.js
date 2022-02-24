var lossingmessg = ["You lost", "Lost, Please play again", "Sorry, you lost"];
var randomItem = lossingmessg[Math.floor(Math.random() * lossingmessg.length)];

var wins = 1;
var losses = 1;

var messag = document.getElementById('message')
var win = document.getElementById('wins')
var loss = document.getElementById('losses')


// target all .box elements and attach a click event listener to each one using a loop
var allbox = document.querySelectorAll('.box')
  allbox.forEach(function(box) {

      box.onclick = function (e) {
          //e.target.textContent
          var newbox = e.target.textContent
         

          // console.log(newbox)
          newbox = parseInt(newbox)

          var randomwin = Math.floor(Math.random() * 3) + 1
         

          if (newbox === randomwin) {


              document.getElementById("message").innerHTML = "You are a Winner";
              document.getElementById("wins").innerHTML = "Wins:" + wins


              wins++
                           
              

          }
          else {
             

              document.getElementById("message").innerHTML = randomItem;

              document.getElementById("losses").innerHTML = "losses:" + losses

              losses++
            

          }
      }
     
  })