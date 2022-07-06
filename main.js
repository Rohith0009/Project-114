nose_x = 0;
nose_y = 0;

function preload() {
  mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

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
    nose_x = results[0].pose.nose.x - 20;
    console.log("Nose X = " + results[0].pose.nose.x);
    nose_y = results[0].pose.nose.y - 20;
    console.log("Nose Y = " + results[0].pose.nose.y);
  }
}

function modelloaded() {
  console.log("You Have Successfully Loaded The ml5 Model👍");
}

function draw() {
  image(video, 0, 0, 400, 300);
  image(mustache, nose_x, nose_y, 70, 70);
}

function take_snapshot() {
  save("Your Mustache.png");
}
