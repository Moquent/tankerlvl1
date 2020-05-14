
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ground, canon;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    canon = new Canon(100, 350);

}

function draw() {
    background("yellow");
    Engine.update(engine);

    ground.display();
    canon.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}