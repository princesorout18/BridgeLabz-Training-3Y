let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

    let fields = [
        [name, namePattern],
        [email, emailPattern],
        [phone, phonePattern],
        [password, passwordPattern]
    ];

    let valid = true;

    fields.forEach(([field, pattern]) => {
        if (pattern.test(field.value)) {
            field.style.border = "2px solid green";
        } else {
            field.style.border = "2px solid red";
            valid = false;
        }
    });

    document.getElementById("message").innerText =
        valid ? "Registration Successful!" : "Please enter valid details.";
});