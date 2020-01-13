// Made by Maxine and Jennifer 


var indexBlank1 = 2
var indexBlank2 = 2

var keyboard = [['a','b','c'],
                ['d','e','f'],
                ['g','h','blank']];

function getRightTile() {
    if (indexBlank2 < 2) {
        return keyboard[indexBlank1][indexBlank2+1]
    }
}
function getLeftTile() {
    if (indexBlank2 > 0) {
        return keyboard[indexBlank1][indexBlank2-1]
    }
}
function getTopTile() {
    if (indexBlank1 > 0) {
        return keyboard[indexBlank1-1][indexBlank2]
    }
}
function getBottomTile() {
    if (indexBlank1 < 2) {
        return keyboard[indexBlank1+1][indexBlank2]
    }
}

function tileUp (tile) {
    var positionStr = $("#data-" + tile).css("top");
    var positionInt = parseInt(positionStr,10);
    if (positionInt > 20) {
    var positionNew = positionInt - 200;
    $("#data-"+ tile).animate({top: positionNew},2000); }
};
function tileRight (tile) {
    var positionStr = $("#data-" + tile).css("left");
    var positionInt = parseInt(positionStr,10);
    if (positionInt < 200) {
    var positionNew = positionInt + 200;
    $("#data-"+ tile).animate({left: positionNew},2000); }
};
function tileLeft (tile) {
    var positionStr = $("#data-" + tile).css("left");
    var positionInt = parseInt(positionStr,10);
    if (positionInt > -200) {
    var positionNew = positionInt - 200;
    $("#data-"+ tile).animate({left: positionNew},2000); }
};
function tileDown (tile) {
    var positionStr = $("#data-" + tile).css("top");
    var positionInt = parseInt(positionStr,10);
    if (positionInt < 420) {
    var positionNew = positionInt + 200;
    $("#data-"+ tile).animate({top: positionNew},2000); }
};
    
function doMove(direction) {
    if (direction == 'right') {
        keyboard[indexBlank1][indexBlank2] = getLeftTile();
        var tempL = getLeftTile();
        keyboard[indexBlank1][indexBlank2-1] = 'blank';
        indexBlank2 = indexBlank2-1;
        tileRight(tempL);
    }
    else if (direction == 'left') {
        keyboard[indexBlank1][indexBlank2] = getRightTile();
        var tempR = getRightTile();
        keyboard[indexBlank1][indexBlank2+1] = 'blank';
        indexBlank2 = indexBlank2+1;
        tileLeft(tempR);
    }
    else if (direction == 'up') {
        keyboard[indexBlank1][indexBlank2] = getBottomTile();
        var tempU = getBottomTile();
        keyboard[indexBlank1+1][indexBlank2] = 'blank';
        indexBlank1 = indexBlank1+1;
        tileUp(tempU);
    }
    else if (direction == 'down') {
        keyboard[indexBlank1][indexBlank2] = getTopTile();
        var tempD = getTopTile();
        keyboard[indexBlank1-1][indexBlank2] = 'blank';
        indexBlank1 = indexBlank1-1; 
        tileDown(tempD);
    }
}

document.addEventListener(
    'keypress',
    function (eventObj) {
  
      var a_key = 97; //left
      var s_key = 115; //down
      var d_key = 100; //right
      var w_key = 119; //up
    
      console.log(eventObj.keyCode);
      if(eventObj.keyCode === a_key ) {
          doMove('left');
      } else if(eventObj.keyCode === d_key ) {
          doMove('right');
      } else if(eventObj.keyCode === w_key ) {
          doMove('up');
      } else if(eventObj.keyCode === s_key ) {
          doMove('down');
      }
    });