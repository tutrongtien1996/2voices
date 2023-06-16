let popup_contai = document.querySelector(".contai_popup");
let popup_active = document.querySelector(".popup_active");
let popup_content = popup_contai.querySelector(".content_popup");
let close_x = popup_content.querySelector(".popup_x");
let close_btn = popup_content.querySelector(".popup_btn");
if(close_x){
    close_x.onclick = () => {
        popup_contai.classList.add("d-none")
        popup_contai.classList.remove("popup_active")
    }
}
if(close_btn){
    close_btn.onclick = () => {
        popup_contai.classList.add("d-none")
        popup_contai.classList.remove("popup_active")
    }
}

if(popup_active){
    popup_active.onclick = (e) => {
        if (popup_content.contains(e.target)){
                return
            } else{
            popup_contai.classList.add("d-none")
            popup_contai.classList.remove("popup_active")
            } 
    }
}