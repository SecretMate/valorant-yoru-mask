noseX = 0;
noseY = 0;

function preload() {
    Yoru_Mask = loadImage("https://i.postimg.cc/rstXWGCQ/Yoru-Ult-Mask-Eyes.png");
}

function setup() {
    canvas = createCanvas(550, 410);
    canvas.position(10, 225);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 550, 410);
    image(Yoru_Mask, noseX, noseY, 215, 240)
}

function take_snapshot() {
    save("The Yoru Me.png")
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 160;
        noseY = results[0].pose.nose.y - 180;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}