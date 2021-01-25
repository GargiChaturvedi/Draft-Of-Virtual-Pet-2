var dog,sadDog,happyDog;
var feedPetButton, addFoodButton, foodObj, database;

function preload(){
  sadDog=loadAnimation("Images/Dog.png");
  happyDog=loadAnimation("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  
  foodObj = new Food();

  addFoodButton = createButton("Add Food");
  addFoodButton.position(500, 0);
  
  dog=createSprite(800,200,150,150);
  dog.addAnimation("sadDog", sadDog);
  dog.addAnimation("happyDog", happyDog);
  dog.scale=0.15;
}

function draw() {
  background(46,139,87);
  drawSprites();

  foodObj.updateFoodStock();
  foodObj.display();
  foodObj.button();
  /*
  foodObj.getName();
  foodObj.updatingName();
  foodObj.namingDog();
  */
  
  addFood();
  feedDog();
}

function addFood() {
  console.log("nice");
  addFoodButton.mousePressed(()=>{foodObj.addFood();});
  //this.button.mousePressed(()=>{
}

function feedDog() {
  if(foodObj.foodStock > 0 && foodObj.feedPetButton != undefined) {
    foodObj.feedPetButton.mousePressed(()=>{foodObj.deductFood()});
  }
}