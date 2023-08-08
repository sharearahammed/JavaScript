const myButton = document.querySelectorAll("#button").length;

for(var i = 0; i<3; i++){
    document.querySelectorAll("#button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.getElementById("head").innerHTML= text + " is clicked";
    });
}
