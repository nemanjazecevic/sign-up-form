let btn = document.querySelector(".claim-free-trial-btn");

btn.addEventListener("click", () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.parentNode.classList.contains("wrong")) {
            input.parentNode.classList.remove("wrong");
        }
        if (input.parentNode.classList.contains("error-email")) {
            input.parentNode.classList.remove("error-email");
        }
        if (input.value.trim() === "") {
            input.parentNode.classList.add("wrong");
        }

    })
    let email = document.querySelector(".email");
    if (email.value !== "") {

        ValidateEmail(email);
    }
});

function ValidateEmail(email) {
    let emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailformat)) {
        email.parentNode.classList.add("error-email");
    };

};




