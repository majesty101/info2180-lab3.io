window.onload = function () {
  
  currentplayer = " ";
  var player1Array = ["i","a","m","s","a","d","h","e","l"];
  var player1turn = 10;
  var status = document.getElementById("status");
  
    var boardgame = document.getElementById("board").children;
    for (let i = 0; i < boardgame.length; i++) {
      var brdgame = boardgame[i];
      brdgame.classList.add("square");
      console.log(brdgame.classList);
    }
  
    var winner = false;
    
    for (let i = 0; i < boardgame.length; i++) {
      boardgame.item(i).addEventListener("click", function () {
       if(winner == false){
        if (player1turn % 2 == 0) {
          boardgame.item(i).innerHTML = "X";
          boardgame.item(i).classList.add("X");
          player1Array[i]="X";
          currentplayer=i;
         winner = checkwinnerfunc(player1Array, status, "X")
          
              } else  {
          boardgame.item(i).innerHTML = "O";
          boardgame.item(i).classList.add("O");
          player1Array[i]="O";
          currentplayer=i;
         
         winner= checkwinnerfunc(player1Array, status, "O")
          }
       
      
      
        player1turn--;
        
        console.log("you clicked box number" + i);
        console.log(player1Array);
        console.log(currentplayer);
       }
      
      });
    
    
      boardgame.item(i).onmouseenter = function () {
        mouseEnter();
      };
      function mouseEnter() {
        boardgame.item(i).classList.add("hover");
      }
      boardgame.item(i).onmouseleave = function () {
        mouseLeave();
      };
      function mouseLeave() {
        boardgame.item(i).classList.remove("hover");
      }
    
    }
  
      
    
      
    
  
  
  
    const checkwinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  function checkwinnerfunc(player1Array, status, currentplayer){
   
    for (var j = 0; j < checkwinner.length; j++){
      checkpos = checkwinner[j][0];
      checkpos1 = checkwinner [j][1];
      checkpos2 = checkwinner [j][2];
      console.log(checkpos);
      if (player1Array[checkpos] == currentplayer && player1Array[checkpos1] == currentplayer && player1Array[checkpos2]==currentplayer){
       status.textContent = "Congratulation!" +"" + currentplayer +" "+ "is the Winner!";
        status.classList.add("you-won");
        return true;
       
      }else{
        return false;
      }
    
    }
  } 
  
  
  
  
  
  var newgame = document.querySelector(".btn");
  document.addEventListener('click', function(event){
      if (event.target.matches('.btn')){
        status.classList.remove("you-won");
        status.innerHTML =  'Move your mouse over a square and click to play an X or an O.';
        for (let y= 0; y<=boardgame.length; y++){
          boardgame[y].classList.remove("X");
          boardgame[y].classList.remove("O");
          boardgame[y].innerHTML = "";
          
       }
      }
    });
  
    
  
  
    
  
     
    
  };