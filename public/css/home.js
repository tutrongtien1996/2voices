import handleActiveNav from "../clientHandle/NavBar/menuActive.js";

handleActiveNav()

let hide = document.querySelector(".icon_arrow");
let show = document.querySelector(".icon_bar");


hideNav()
showNav()
showBoxTextAI()
hideBoxTextAI()

function hideNav(){
    if(hide){
        hide.onclick = () => {
            document.querySelector(".contai_nav").classList.add("contai_nav_hide");
            document.querySelector(".contai_content").classList.add("contai_content_full");
            show.classList.remove("d-none")
        }
    }
}
function showNav(){
    if(show){
        show.onclick = () => {
            document.querySelector(".contai_nav").classList.remove("contai_nav_hide");
            document.querySelector(".contai_content").classList.remove("contai_content_full");
            show.classList.add("d-none")
        }
    }
}



function showBoxTextAI(){
    let btnAI = document.querySelector(".btn_use_ai");
    if(btnAI){

        btnAI.onclick = () => {
            document.querySelector(".contai_ai").classList.remove("d-none")
        }
    }
}
function hideBoxTextAI(){
    let hideAI = document.querySelector(".hide_AI");
    if(hideAI){

        hideAI.onclick = () => {
            document.querySelector(".contai_ai").classList.add("d-none");
        }
    }
}

