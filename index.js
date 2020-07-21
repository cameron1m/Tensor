
let mobilenet;
let video;
let classifier;
let value = 'needs training';
let sampleButton;
let saveButton;
let trainButton;
// let slider;
let handButton;
let cdButton;

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
    value = result[0].label;
  
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
  
  // sampleButton = createButton('Add Sample');

  // sampleButton.mousePressed(function(){
  //    classifier.addImage(slider.value());

  // });

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
  
  saveButton = createButton('Save');

  saveButton.mousePressed(function(){
    classifier.save();
  });

  // loadButton = createButton('Load');

  // loadButton.mousePressed(function(){
  //   featureExtractor.load();
  // });
  
  // slider = createSlider(0,1,0.5,0.01);

}

function draw(){
  background(0);
  image(video, 0, 0);
  rectMode(CENTER);
  fill('red');
  textSize(32);
  // rect(value*width, height / 2,50,50);

  text(value, 10, 510);
}