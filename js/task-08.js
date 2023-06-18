const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (!(email.value.trim() && password.value.trim())) {
        return alert("Hello")
    }
    const data = {
        [email.name]: email.value,
        [password.name]: password.value
    };
    console.log(data);
    e.target.reset();
}
