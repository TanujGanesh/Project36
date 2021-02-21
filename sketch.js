var dg,sdg,hdg;
var fd,fdsk,fdobj;
var fedt,lfed;
var fed,adfd;
var dbase;
var nbx,mkbt,mkig;
var t= 0;
var chk= 0;

function preload(){
  sdg=loadImage("Images/Dog.png");
  hdg=loadImage("Images/happy dog.png");
  mkig=loadImage("Images/Milk.png");
  
}

function setup() {
  createCanvas(1000,400);
  dbase= firebase.database();
  
  fdobj= new Food();
  fdsk=dbase.ref('Food');
  fdsk.on("value",rdsk)

  dg= createSprite(800,200,150,150);
  dg.addImage(sdg);
  dg.scale= 0.15;

  fed= createButton("Feed the dog");
  fed.position(700,120);
  fed.mousePressed(fddg);

  adfd= createButton("Add food");
  adfd.position(800,120);
  adfd.mousePressed(adfds);

  nbx= createInput('').attribute('placeholder','Your pet name');
  nbx.position(450,150);

  mkbt= createSprite(720,210);
  mkbt.addImage(mkig);
  mkbt.scale= 0.1;
  mkbt.visible= 0;

}

function draw() {
  background(46,139,87);
  fdobj.display();

  fedt= dbase.ref('feedTime');
  fedt.on("value",function(data){lfed=data.val()});

  fill(255);
  textSize(15);
  if(lfed>=12){
    text("Last Feed : "+ lfed%12 + "PM",350,30);
  }else if(lfed==0){
    text("Last Feed: 12 AM",350,30);
  }else{
    text("Last Feed: "+ lfed + "AM",350,30);
  }
  v= nbx.value();
  fill(4,23,117);
  textSize(20);
  text(v,800,dg.y+80);

  if(chk==1){
    t++;
    if(t%150==0){
      t= 0;
      chk= 0;
      mkbt.visible= 0;
      dg.addImage(sdg);
    }
    
  }
  drawSprites();
}

function rdsk(data){
  fd= data.val();
  fdobj.upfdsk(fd);
}

function fddg(){
  if(chk==0){
  mkbt.visible= 1;
  chk= 1;
  dg.addImage(hdg);
  fdobj.upfdsk(fdobj.gtfdsk()-1);
  dbase.ref('/').update({Food:fdobj.gtfdsk(),feedTime:hour()})
  }
}

function adfds(){
  if(fd<40){
  fd++;
  dbase.ref('/').update({Food:fd})
    }
  }


