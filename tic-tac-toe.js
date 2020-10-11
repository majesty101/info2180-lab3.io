window.onload = function () {
  //var newgame = document.querySelector(".btn");
  var boardgame = document.getElementById("board").children;
  for (let i = 0; i < boardgame.length; i++) {
    var brdgame = boardgame[i];
    brdgame.classList.add("square");
    console.log(brdgame.classList);
  }

  var player1turn = 10;
  for (let i = 0; i < boardgame.length; i++) {
    boardgame.item(i).addEventListener("click", function () {
      if (player1turn % 2 == 0) {
        boardgame.item(i).innerHTML = "X";
        boardgame.item(i).classList.add("X");
        player1Array.push(i);
      } else {
        boardgame.item(i).innerHTML = "O";
        boardgame.item(i).classList.add("O");
        player2Array.push(i);
      }
      player1turn--;
      //player2turn--;

      console.log("you clicked box number" + i);
      console.log(player1Array);
      console.log(player2Array);
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

  var player1Array = new Array(5);
  var player2Array = new Array(4);

  // document
  // .getElementsById("hover")
  // .addEventListener("mouseover", mouseOver);
  // document
  //   .getElementsByClassName("hover")
  //  .addEventListener("mouseout", mouseOut);
};
