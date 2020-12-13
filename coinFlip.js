function coinFlip(){
let flip = Math.floor(Math.random() * 2);  
    if(flip <0.50){
        console.log("head")
        }else{
            console.log("tail")
        }
}
coinFlip()