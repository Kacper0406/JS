function setup() {
    createCanvas(400, 400);
}

function draw() {
    let roof = color(179, 76, 62);
    let wall = color(77, 214, 118);
    let grass = color(33, 255, 41);
    let bush = color(0, 94, 35);
    let berry = color(196, 16, 88);
    let door = color(79, 51, 31);
    let window = color(38, 231, 235);
    let handle = color(255, 190, 38);
    let sun = color(251, 255, 0);
    let cloud = color(255, 255, 255);
    let smoke1 = color(164, 166, 165);
    let smoke2 = color(120, 120, 120);
    let smoke3 = color(148, 148, 148);

    background(166, 253, 255);

    fill(wall)
    rect(100, 175, 200, 200);

    fill(roof);
    rect(250, 75, 25, 75);

    fill(roof);
    triangle(100, 175, 300, 175, 200, 50);

    fill(door);
    rect(125, 250, 75, 125);

    fill(handle);
    circle(190, 325, 10);

    fill(window);
    rect(215, 250, 75, 75);

    fill(sun);
    circle(350, 50, 75);

    fill(bush);
    circle(325, 370, 50);
    circle(375, 370, 50);
    circle(350, 350, 50);

    fill(berry);
    circle(313, 370, 5);
    circle(385, 370, 5);
    circle(335, 350, 5);
    circle(355, 355, 5);
    circle(355, 340, 5);

    fill(grass)
    rect(0, 375, 400, 50);

    fill(cloud);
    circle(50, 75, 50);
    circle(100, 75, 50);
    circle(75, 50, 50);
    circle(75, 75, 50);

    fill(smoke2);
    circle(260, 65, 25);
    fill(smoke1);
    circle(270, 55, 25);
    fill(smoke3);
    circle(260, 45, 25);
    fill(smoke2);
    circle(275,25, 25);
    fill(smoke1);
    circle(250,10, 25);

    fill(door);
    rect(5, 325, 85, 10);
    rect(10, 315, 15, 60);
    rect(30, 315, 15, 60);
    rect(50, 315, 15, 60);
    rect(70, 315, 15, 60);
}