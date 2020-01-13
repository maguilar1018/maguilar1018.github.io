function rpsJudge(arg1,arg2) {
    if (arg1==arg2) {
        return 0; }
    else if ((arg1 == "paper"  && arg2 =="rock") || 
    (arg1== "scissors" && arg2== "paper") || (arg1 == "rock" && arg2== "scissors")) {
        return 1; }
    else{
        return -1;
    }
}

function randomElt (anArray) {
    var randomElementArray = Math.floor(Math.random() * anArray.length);
    var randomElement = anArray[randomElementArray];
    return randomElement;
}

function highlightPlayerChoice(arg) {
    $("."+arg+"Img").css("border-color","blue");
}

function showComputerChoice(arg) {
    var imagePath = "images/" + arg +"-200.png";
    $("#computerImg").attr("src", imagePath);
}

function resetRPS () {
    $(".paperImg").css("border-color","white");
    $(".rockImg").css("border-color","white");
    $(".scissorsImg").css("border-color","white");
    $("#computerImg").attr("src", "images/question-200.png");
}

var compScore = 0;
var meScore = 0;
var tieScore = 0;

function startOver () {
    $("#meWon").text("0");
    $("#compWon").text("0");
    $("#numTies").text("0");
    compScore = 0;
    meScore = 0;
    tieScore = 0;
}

function updateScores (score) {
    if (score == -1) {
        compScore++;
        $("#compWon").text(compScore);}
    else if (score == 1) {
        meScore++;
        $("#meWon").text(meScore);}
    else {
        tieScore++;
        $("#numTies").text(tieScore);}

}


function playerTurn(arg) {
    var compChoice = randomElt(["rock","paper","scissors"]);
    resetRPS();
    $(".paperImg").click(highlightPlayerChoice(arg));
    $(".rockImg").click(highlightPlayerChoice(arg));
    $(".scissorsImg").click(highlightPlayerChoice(arg));
    showComputerChoice(compChoice);
    var score = rpsJudge(arg,compChoice);
    updateScores(score);
    if (score == -1) {
        $("#whoWins").text("Computer Wins!");
    } else if (score == 0) {
        $("#whoWins").text("It is a tie!");
    } else {
        $("#whoWins").text("Player Wins!");
    }
}


$('.paperImg').click(function(){
    var playerChoice = "paper";
    playerTurn(playerChoice);
});
$('.rockImg').click(function(){
    var playerChoice = "rock";
    playerTurn(playerChoice);
});
$('.scissorsImg').click(function(){
    var playerChoice = "scissors";
    playerTurn(playerChoice);
});

$("#startOverButton").click(function(){
    resetRPS();
    startOver();
});