const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//check email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())){
        showSuccess(input)
    }else{
        showError(input,'Email is not valid')
    }
}


//show error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')

    small.textContent = message

}

//show success

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// get attribute

function getInputType(input,message){
    return  message = `${input.getAttribute("data-type")} ${message}`
}

//check required

function checkRquired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            
            
            showError(input, getInputType(input, 'is required'))
        }else{
            showSuccess(input)
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, getInputType(input, `must contain at least ${min} characters`))
    } else if (input.value.length > max){
        showError(input, getInputType(input, `cannot contain more than ${max} characters`))
    }else {
        showSuccess(input)
    }
}

//check password match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passswords do not match')
    }
}

//Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    // if(username.value === ''){
    //     showError(username,'input cant be blank')
    // }else{
    //     showSuccess(username)
    // }
    // if(email.value === ''){
    //     showError(email,'email cant be blank')
    // }else if(!checkEmail(email.value)){
    //     showError(email,'email is not valid')
    // }
    
    // else{
    //     showSuccess(email)
    // }

    checkRquired([username,email,password,password2])
    checkLength(username, 3,5);
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
})