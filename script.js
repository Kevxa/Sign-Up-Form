function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=cPassword]');
    if (confirm.value === password.value) {
        confirm.style.borderColor = "green";
        password.style.borderColor = "green";
        } else {
        confirm.style.borderColor = "red";
        password.style.borderColor = "red";
        
    }
}

