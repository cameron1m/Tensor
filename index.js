
let mobilenet;
let video;
let classifier;
let label = '';
let cdButton;
let handButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');

    //mobilenet.predict(gotResults);

}

function videoReady(){
  console.log("Video is Ready");
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    // console.log(results);
    label = results[0].label;
  
    classifier.classify(gotResults);

  }
}
function whileTraining(loss){
  if (loss == null){
    console.log('Training Comeplete!');
    classifier.classify(gotResults);
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
  classifier = mobilenet.classification(video, videoReady);
  
  cdButton = createButton('CD');

  cdButton.mousePressed(function(){
    classifier.addImage('CD');
  });

  handButton = createButton('Hand');

  handButton.mousePressed(function(){
    classifier.addImage('Hand');
  });

  trainButton = createButton('Train');

  trainButton.mousePressed(function(){
    classifier.train(whileTraining);
  });
}

function draw(){
  background(0);
  image(video, 0, 0);
  fill('red');
  textSize(32);

  text(label, 10, 510);
}