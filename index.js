const submit = document.querySelector('button');
const form = document.querySelector('form');



const validateEmail = (email) => {
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
})

