class Food {
    constructor(){
        var fsk
        this.fsk
        this.lfed
        this.image=loadImage("Images/Milk.png");
    }

    upfdsk(fdsk){
        if(fdsk<=40){
        this.fsk= fdsk;
        }
    }

    gtfdsk(){
        return this.fsk;
    }

    display(){
        var x= 80,y= 100;
        imageMode(CENTER);
        //image(this.image,720,220,70,70);
        
        if(this.fsk!=0 ){
            for (var i= 0;i<this.fsk;i++){
                if(i%10==0 && y<=250){
                    x= 80;
                    y= y+50;
                }
                    
                
                image(this.image,x,y,50,50);

                x+= 30;
            }
        }

    }
    
}