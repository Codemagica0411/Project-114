function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(400, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color=""
}


function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(30, 30, 50);
    circle(30, 450, 50);
    circle(610, 30, 50);
    circle(610, 450, 50);
    rect(5, 53, 55, 375);
    rect(585, 53, 55, 375);

    
}

function take_snapshot() {
    save('student_name.png')
}

