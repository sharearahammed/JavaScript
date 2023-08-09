const myForm = document.getElementById("form");
const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const myPassword = document.getElementById("pass");


myForm.addEventListener('submit',formHandler);

function formHandler(e){
    e.preventDefault();
    const userInfo = {
        name : myName.value,
        email : myEmail.value,
        password : myPassword.value,
    };
    console.log(userInfo);
    myName.value = "";
    myEmail.value = "";
    myPassword.value = "";

}