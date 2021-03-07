document.getElementById('name').addEventListener('keyup',validateName);
document.getElementById('zipcode').addEventListener('keyup',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone-number').addEventListener('keyup',validatePhone);
function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z ]{2,10}$/;
    if(!re.test(name.value)){
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }
}
function validateZip(){
    const zipcode = document.getElementById('zipcode');
    console.log(zipcode)
    const re = /^[0-9]{6}$/;
    if(!re.test(zipcode.value)){
        zipcode.classList.add('is-invalid')
    }else{
        zipcode.classList.remove('is-invalid')
    }
}
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-5}$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid')
    }else{
        email.classList.remove('is-invalid')
    }
}
function validatePhone(){
    const phone = document.getElementById('phone-number');
    const re = /^[0-9]{10}$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid')
    }else{
        phone.classList.remove('is-invalid')
    }
}