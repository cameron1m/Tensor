
let mobilenet;
let video;
let predictor;
let value = 0;
let sampleButton;
let handButton;
let trainButton;
let slider;

function modelReady() {
  console.log('Model is Ready!!');

    //mobilenet.predict(gotResults);

}

function videoReady(){
  console.log("Video is Ready!!");
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    // console.log(results);
    value = result.value;
  
    predictor.predict(gotResults);

  }
}
function whileTraining(loss){
  if (loss == null){
    console.log('Training Comeplete!');
    predictor.predict(gotResults);
  }
  else {
    console.log(loss);
  }

  }
// function imageReady() {
//   image(video, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);
  
  sampleButton = createButton('Add Sample');

  sampleButton.mousePressed(function(){
     predictor.addImage(slider.value());

  });

  trainButton = createButton('Train');

  trainButton.mousePressed(function(){
    predictor.train(whileTraining);
  });

  slider = createSlider(0,1,0.5,0.01);

}

function draw(){
  background(0);
  image(video, 0, 0);
  rectMode(CENTER);
  fill('red');
  textSize(32);
  rect(value*width, height / 2,50,50);

  text(value, 10, 510);
}