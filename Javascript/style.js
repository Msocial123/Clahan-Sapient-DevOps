function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let orderDetails = document.getElementById('orderDetails').value;

    if (name === "" || email === "" || orderDetails === "") {
        alert("Please fill in all fields before submitting your order.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
