const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const passWord2 = document.getElementById("password2");


function showError(input , message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username , 'Username is required');
    }
    else{
        showSucess(username);
    }

    if(email.value === ''){
        showError(email , 'Email is required');
    }

    else{
        showSucess(email);
    }
    if(passWord.value === ''){
        showError(passWord , 'password is required');
    }
    else{
        showSucess(passWord);
    }
    if(passWord2.value === ''){
        showError(passWord2 , 'Confirm password is required');
    }
    else{
        showSucess(passWord2);
    }

})