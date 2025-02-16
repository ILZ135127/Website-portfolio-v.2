let myFont;
const ourWord= "Moo";
let pointArray;

function preload(){
  
  myFont= loadFont("Bigail.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  
  pointArray = 
  myFont.textToPoints( 
    ourWord, 
    70, 
    218, 
    135,                          
    {sampleFactor:0.2})
  
  for ( let i = 0; i < pointArray.length; i++ ){
        if ( i <10){
            size = 10;
        } else{
            size = 5;
    }

    fill(252, 0, 0);
    
        circle(pointArray[i].x, pointArray[i].y, 5);
    }


}

function draw (){

}