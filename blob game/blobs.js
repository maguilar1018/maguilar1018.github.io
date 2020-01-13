class Blob {
    constructor (color,diameter) {
        this.color = color;
        this.diameter = diameter;
        this.radius = .5*diameter;
        this.blob = $("<div></div>", {"class": "circle"});
        this.setColor(color);
        this.setDiameter(diameter);

    }
    addToGame(elt) {
        $(elt).append(this.blob);
    }
    setColor(c) {
        this.blob.css('background-color',c);
        this.color = c;
    }
    setDiameter(d) {
        var diff = this.radius-(d/2)
        this.blob.css({'width':d,'height':d,
        'top':'+='+diff,
        'left':'+='+diff});
        this.diameter = d;        
        this.radius = 0.5*d;
    }
    setRadius(r) {
        this.setDiameter(2*r);
    }
    setX(x) {
        this.blob.css('left',x-this.radius);
        this.x = x;
    }
    setY(y) {
        this.blob.css('top',y-this.radius);
        this.y = y;
    }
    getDiameter() {
        return this.diameter
    }
    getRadius() {
        return this.radius
    }
    getX(){
        return this.x
    }
    getY() {
        return this.y
    }
    intersects(other) {
        var dx = this.getX() - other.getX();
        var dy = this.getY() - other.getY();
        var distance_squared = (dx * dx + dy * dy);

        var r1 = this.getRadius();
        var r2 = other.getRadius();
        var rsum = r1+r2;
        var closer = (distance_squared <= rsum*rsum);
        return closer;
    }
}