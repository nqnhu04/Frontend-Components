const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');
const form = document.getElementById('login-form');

togglePasswordButton.addEventListener("click", function(){

    const currentType = passwordInput.type;
    if (currentType === 'password'){
        passwordInput.type = 'text';
        togglePasswordButton.classList.remove('fa-eye');
        togglePasswordButton.classList.add('fa-eye-slash');
    }else{
        passwordInput.type = 'password';
        togglePasswordButton.classList.remove('fa-eye-slash');
        togglePasswordButton.classList.add('fa-eye');
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = passwordInput.value;
    const keepLogin = document.getElementById('keep-login-check').checked;
    alert("login successful");
});