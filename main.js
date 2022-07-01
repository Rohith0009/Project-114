function preload() {}

function setup() {
  canvas = createCanvas(400, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 300);
  video.hide();
  posenet = ml5.poseNet(video, modelloaded);
  posenet.on("pose", gotposes);
}

function gotposes(results) {
  if (results.length > 0) {
    console.log(results);
    console.log("Nose X = " + results[0].pose.nose.x);
    console.log("Nose Y = " + results[0].pose.nose.y);
  }
}

function modelloaded() {
  console.log("You Have Successfully Loaded The ml5 Model👍");
}

function draw() {
  image(video, 0, 0, 400, 300);
}

function take_snapshot() {
  save("Your Mustache.png");
}
