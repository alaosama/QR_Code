let QRImgUrl,is_img_selected = false,is_qr_code_decoded = false;

let decoded_qr_text = document.querySelector("#decoded_qr_text");
let qr_code_view_area = document-querySelector("•gr_code_view_area");
let qr_code_img = document.querySelector("#qr_code_img");

let input_select_img = document.querySelector("#input_select_img");
let select_img_btn = document.querySelector("#select_img_btn");

let read_qr_btn = document.querySelector("#read-qr-btn");
let copy_qr_btn = document.queryselector("#copy-qr-btn");

input_select_img.addEventListener("change", function(){
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        select_img_btn.classList.add("hide_view");
        qr_code_img.classList.remove("hide_view");

        reader.addEventListener("load", function(){
            QRImgUrl = this.result;
            qr_code_img.setAttribute("src", this.result);
        })

        reader.readAsDataURL(file);
        is_img_selected = true;
    }
})


read_qr_btn.addEventListener("click", ()=> {
    if(is_qr_code_decoded == false) {
        if(is_img_selected == false) {
            alert("Please select QR code image!");
        } else {
            ReadQRCode();
        }
    }
})