var losingDiameter = 5;
var winningDiameter = window.innerHeight/2;
var growDiameter = 20;
var shrinkDiameter = 5;
class Player extends Blob {
    constructor (diameter) {
        super('blue',diameter);
    }
    move(event){
        var x = event.clientX;
        var y = event.clientY;
        this.setX(x);
        this.setY(y);
    }
    grow() {
        var d = this.diameter;
        this.setDiameter(d+growDiameter);
    }
    shrink() {
        var d = this.diameter;
        this.setDiameter(d-shrinkDiameter);
    }
    collide(enemy) {
        var enemySize = enemy.getDiameter();
        var playerSize = this.diameter;
        if (enemySize> playerSize) {
            this.shrink();
            if (this.diameter <= losingDiameter) {
                $(".circle").stop();
                clearInterval(interval);
                console.log("You lost");
                $('#result').text('You Lost :(');
            }
        } else if (playerSize> enemySize) {
            this.grow();
            enemy.remove();
            if (this.diameter >= winningDiameter) {
                $(".circle").stop();
                console.log("You won");
                $('#result').text('You Won :)');
                clearInterval(interval);
            }
        }

    }
}