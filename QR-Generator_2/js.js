let btn = document.querySelector(" button");
let qr_code_element = document.querySelector("-qr-code");

btn.addEventListener("click", () => {
    let user_input = document.querySelector("#input_text");
    if (user_input.value != "") {
        if (qr_code_element.childElementCount == 0) {
            generate(user_input);
        } else {
            qr_code_element.innerHTML = "";
            generate(user_input);
        }
    } else {
        qr_code_element.style = "display: none";
    }
});

