img="";
status="";

function preload(){
    img = loadImage('bed room.jpg');
}


function setup(){
    canvas = createCanvas(800 , 500);
    canvas.position(400 , 230)
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects " ;

    
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector = detect(img , gotResult);
}

function gotResult(error , results){

    if(error){
        console.log(error);
    }
    console.log(results);

}

function draw(){
    image(img , 0 , 0 , 800 , 500);
    fill('#fc0303');
   text("bed", 200, 80);
   noFill();
   stroke('#fc0303')
    rect(200 , 70, 500 , 400);
    

    fill('#fc0303');
    text("tabel",50, 250);
    noFill();
    stroke('#fc0303')
     rect(50 , 240, 150 , 200);
}