const submit = document.querySelector('button');
const form = document.querySelector('form');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const label = document.querySelector('label');

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e){
    e.preventDefault();

    const inpValue = input.value.trim();

    if(!isEmail(inpValue) || inpValue === ""){
        label.style.display = 'block';
        error.style.visibility = 'visible';
    }else{
        label.style.display = 'none';
        error.style.visibility = 'hidden';
    }
}

const isEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email)
}


//Ignore
/*const validateEmail = (email) => {
    const regex = '/\S+@\S+\.\S+/';
    return regex.test(email);
}

submit.addEventListener('click', function(){
    let inp = document.getElementById('email');
    // console.log(inp)
    if(!inp.value){
        document.getElementById('label').style.display = 'block';
        document.querySelector('.error').style.visibility = 'visible';
    }
   const res = validateEmail(inp.value);
   console.log(res);
    if(!validateEmail(inp.value)) {
        document.getElementById('label').style.display = 'block';
        document.querySelector('.error').style.visibility = 'visible';
    }
})*/

