song="";

function preload()
{
    song=loadSound("music.mp3");
}
scoreRightWrist= 0;
scorLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
rightWristY = 0;

function setup() {
    canvas  = createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function play()
{
    song.play()
    song.setVolume(1);
    song.rate(1);
}


