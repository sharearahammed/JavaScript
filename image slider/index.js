const photos = ["images/1.jpg","images/2.jpeg","images/3.jpg"];

const myImg = document.getElementById("img");

var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        myImg.src=photos[count];
    }
    else{
        myImg.src=photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length - 1;
        myImg.src=photos[count];
    }
    else{
        myImg.src=photos[count];
    }
}