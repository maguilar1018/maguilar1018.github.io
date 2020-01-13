var player;
var testingMode = false;
var interval;
function startGame() {
    var backBtn = $("<a></a>",{href:"../programming.html"});
    $("#backBtn").append("Back to Programming");
    $("#game").append(backBtn);
    $("#start_page").hide();
    player = new Player(30)
    player.addToGame("#game");
    player.setX(window.innerWidth/2);
    player.setY(window.innerHeight/2);
    interval = setInterval(function() {
        var en = new Enemy(); 
        en.addToGame("#game"); 
        en.start();}, 
        1000);
    $(document).on('mousemove', function (event) {player.move(event)});
}

$("#start-button").click(startGame);

$("#test-grow").click(function() {
    testingMode = "grow";
    $("#start_page").hide();
    player = new Player(30);
    player.addToGame("#game");
    player.setX(window.innerWidth/2);
    player.setY(window.innerHeight/2);
    interval = setInterval(function() {
        var en = new Enemy();
        en.setDiameter(20);
        en.addToGame("#game");
        en.start();
        }, 1000);
})

$("#test-shrink").click(function() {
    testingMode = "shrink";
    $("#start_page").hide();
    player = new Player(30);
    player.addToGame("#game");
    player.setX(window.innerWidth/2);
    player.setY(window.innerHeight/2);
    interval = setInterval(function() {
        var en = new Enemy();
        en.setDiameter(50);
        en.addToGame("#game");
        en.start();
        }, 1000);
})