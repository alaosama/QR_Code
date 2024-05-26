let qr_txt, qr_code_url,is_qr_generated = false;

let input_qr_text = document.querySelector ("#input_qr_text");
let qr_code_view_area = document.querySelector (".qr_code_view_area");
let qr_code_img = document.querySelector ("#qr_code_img");

let generate_qr_btn = document.querySelector(".generate_qr_btn");
let download_qr_btn = document.querySelector(".download_qr_btn");


generate_qr_btn.addEventListener ("click",()=>{
    if(is_qr_generated == false){
        qr_txt = input_qr_text.value;
    
        if(qr_txt=="") {
            alert ("Write some text!");
        }else if(window.navigator.onLine!=true){
            alert ("Oops! No internet connection");
        }else {
            GenerateQR();
        }
    }else {
        
    }
});
