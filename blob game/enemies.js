var direction = ['left', 'right', 'top','bottom'];

class Enemy extends Blob{
    constructor() {
        var color = random.color();
        var diameter = random.intBetween(0,winningDiameter);
        super(color,diameter);
        this.direction = direction[Math.floor(Math.random()*direction.length)];
        this.setCoords();
        if (testingMode=='grow'||testingMode=='shrink') {
            if (this.direction == "left" || this.direction == "right") {
                this.setY(window.innerHeight/2);
            } else if (this.direction == "top" || this.direction == "bottom") {
                this.setX(window.innerWidth/2);
            }
        }
        this.collided = false;        
    }
    start() {
        if (this.direction=='top') {
            $(this.blob).animate({top: "+="+(window.innerHeight+this.diameter)}, 
                {duration: 5000,
                progress: function () {
                    this.maybeCollide();
                }.bind(this),
                complete: function () {
                    this.remove();
                }.bind(this)
            });
        }else if (this.direction=='bottom') {
            $(this.blob).animate({top: "-="+(window.innerHeight+this.diameter)}, 
                {duration: 5000,
                progress: function () {
                    this.maybeCollide();
                }.bind(this),
                complete: function () {
                    this.remove();
                }.bind(this)
            });
        }else if (this.direction=='left') {
            $(this.blob).animate({left: "+="+(window.innerWidth+this.diameter)}, 
                {duration: 5000,
                progress: function () {
                    this.maybeCollide();
                }.bind(this),
                complete: function () {
                    this.remove();
                }.bind(this)
            });
        }else if (this.direction=='right') {
            $(this.blob).animate({left: "-="+(window.innerWidth+this.diameter)}, 
                {duration: 5000,
                progress: function () {
                    this.maybeCollide();
                }.bind(this),
                complete: function () {
                    this.remove();
                }.bind(this)
            });
        }  
    }
    collide() {
        var enemy = this;
        player.collide(enemy);
        console.log("these collided");
    }
    maybeCollide() {
        if (this.collided == false) {
            this.x = parseInt(this.blob.css("left"), 10) + this.diameter/2;
            this.y = parseInt(this.blob.css("top"), 10) + this.diameter/2;
            if (this.intersects(player)) {
                this.collided = true;
                this.collide();
            }
        }    
    }
    setCoords() {
        var randX = random.intBetween(0,window.innerWidth);
        var randY = random.intBetween(0,window.innerHeight);
         if (this.direction=='top') {
            this.setX(randX);
            this.setY(0-(this.diameter/2));
        }else if (this.direction=='bottom') {
            this.setX(randX);
            this.setY(window.innerHeight+(this.diameter/2));
        }else if (this.direction=='left') {
            this.setX(0-(this.diameter/2));
            this.setY(randY);
        }else if (this.direction=='right') {
            this.setX(window.innerWidth+(this.diameter/2));
            this.setY(randY);
        }
    }
    remove() {
        this.blob.remove();
    }
}