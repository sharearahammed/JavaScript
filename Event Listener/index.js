const myButton = document.getElementById("heading");
myButton.addEventListener("click",myFunction);
var count = 0;

function myFunction(){
    if(count==0){
    myButton.classList.add("my-style");
    count++;
    }
    else if(count==1){
        myButton.classList.remove("my-style");
        count--; 
    }
}
const myButton2 = document.getElementById("heading2");
myButton2.addEventListener("mouseover",myFunction2);
myButton2.addEventListener("mouseout",myFunction3);

function myFunction2(){
    myButton2.classList.add("my-style");
}
function myFunction3(){
    myButton2.classList.remove("my-style");
}