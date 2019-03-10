function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
var winCase ={
    1:[0,1,2],
    2:[3,4,5],
    3:[6,7,8],
    4:[2,4,6],
    5:[2,5,8],
    6:[1,4,7],
    7:[0,4,8],
    8:[0,3,6]
}
var currentPlayer='';
var currentScore = 0;
var moves= 1;
var player1= '';
var player2= '';
var win = 3;
var finalScore = [0,0];
var sign = true;

$('.buttonNew').on("click", function (event) {
        location.reload();
        currentScore = 0;
        currentPlayer = 0;
        finalScore = [0,0];
         win = 3;
    });
       // highlight the mouseover target
    $('.square').on("mouseover", function (event) {
     
        $(this).addClass("black");
    
    });
        // removw highlight the mouseover target
$('.square').on("mouseout", function (event) {

    $(this).removeClass("black");
});

//on click boxs to change from x to o
$('.square').one("click", function (event) {
       $(this).off("mouseout");
        // checkAll(this)
if (sign == true){
    $(this).text("X");
    sign=!sign;
}else {
    $(this).text("O");
    sign=!sign;
}

     })
     
