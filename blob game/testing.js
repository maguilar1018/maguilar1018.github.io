var testBlob;
var testField;

function makeTestField() {
    $("body").empty();
    $("#testfield").remove();
    testField = $("<div>")
        .attr('id','testfield')
        .css({'width':'100px',
              'height':'100px',
              'border':'2px solid red',
              'position':'relative'})
        .appendTo('body');
}

function testBlobDisplay1() {
    makeTestField()
    testBlob = new Blob('green',100);
    testBlob.setX(50);
    testBlob.setY(50);
    testBlob.addToGame(testfield);
    console.log("does the green blob fit snugly in the red box?");
}

function testBlobDisplay2() {
    makeTestField()
    testBlob = new Blob('green',50);
    testBlob.setX(50);
    testBlob.setY(50);
    testBlob.addToGame(testfield);
    console.log("is the green blob in the center of the red box?");
}

function testBlobDisplay3() {
    makeTestField()
    testBlob = new Blob('green',10);
    testBlob.setX(50);
    testBlob.setY(50);
    testBlob.setRadius(50);
    testBlob.addToGame(testfield);
    console.log("if setRadius works, the green blob fits snugly in the red box");
}

function testBlobDisplay4() {
    makeTestField()
    testBlob = new Blob('green',10);
    testBlob.setX(50);
    testBlob.setY(50);
    testBlob.setRadius(50);
    if(testBlob.getDiameter() != 100) {
        console.log("setRadius and getDiameter don't seem to work");
        return;
    }
    testBlob.setDiameter(100);
    if(testBlob.getRadius() != 50) {
        console.log("setDiameter and getRadius don't seem to work");
        return;
    }
    testBlob.addToGame(testfield);
    console.log('get/set radius/diameter seem to work');
}

function testBlobDisplay5() {
    makeTestField()
    testBlob = new Blob('green',20);
    testBlob.setX(90);
    testBlob.setY(90);
    testBlob.addToGame(testfield);
    console.log("if setX/setY work, the green blob touches the lower and right edges of the red box");
}

function testIntersect(dx,dy) {
    // This test has two blobs of radius 100 and a 120,160,200
    // triangle between their centers, so their centers are
    // 200 px apart and they should be just tangent. The second
    // blob is perturbed by (dx,dy)
    $("body").empty();

    // these are global on purpose, so you can play with them afterward.
    b1 = new Blob("red",200);   // radius of 100
    b2 = new Blob("green",200);

    b1.setX(100);
    b1.setY(100);
    b1.addToGame("body");

    b2.setX(100+120+dx);
    b2.setY(100+160+dy);
    b2.addToGame("body");

    console.log("b1 intersects b2? ",b1.intersects(b2));
    console.log("b2 intersects b1? ",b2.intersects(b1));
}

function testIntersect1() { testIntersect(0,0); }  // just tangent
function testIntersect2() { testIntersect(1,0); }  // barely non-tangent
function testIntersect3() { testIntersect(0,1); }  // barely non-tangent
function testIntersect4() { testIntersect(0,-1); } // barely intersecting
function testIntersect5() { testIntersect(-1,0); } // barely intersecting

// This function assumes that the DOM element corresponding to this blob
// is stored in an instance variable named "elt". Adjust the code if 
// your code is different.

function testProgress() {
    makeTestField();
    testBlob = new Blob("coral",20);
    testBlob.setX(50);
    testBlob.setY(50);
    testBlob.addToGame(testfield);
    $(testBlob.blob)
        .animate({ left: "+=456px" },
                 { duration: 3000,
                   progress: function () {
                     var $elt = $(testBlob.blob);
                     var left = parseInt($elt.css("left"),10);
                     var x = left+100; // radius is 100
                     console.log("x is now "+x);
                 }});                                  
}