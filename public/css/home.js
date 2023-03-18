let hide = document.querySelector(".icon_arrow");
let show = document.querySelector(".icon_bar");
let voicesActive = document.querySelector(".contai_content .categories_voices  li.active")
let listVoices = document.querySelectorAll(".contai_content .categories_voices  li")
hideNav()
showNav()
showCategoriesVoices()
showBoxTextAI()
hideBoxTextAI()

function hideNav(){
    if(hide){
        hide.onclick = () => {
            document.querySelector(".contai_nav").classList.add("contai_nav_hide");
            document.querySelector(".contai_content").classList.add("contai_content_full");
        }
    }
}
function showNav(){
    if(show){
        show.onclick = () => {
            document.querySelector(".contai_nav").classList.remove("contai_nav_hide");
            document.querySelector(".contai_content").classList.remove("contai_content_full");
        }
    }
}

function showCategoriesVoices(){
    voicesActive.onclick = () => {
        Array.from(listVoices).forEach( element => {
            element.classList.remove("d-none")
        })
        getVoices()
    }
}
function getVoices(){
    Array.from(listVoices).forEach( element => {
        element.onclick = () => {
            voicesActive.classList.remove("active");
            element.classList.add("active");
            voicesActive = element;
            Array.from(listVoices).forEach(item => {
                item.classList.add("d-none")
                voicesActive.classList.remove("d-none")
            })
            showCategoriesVoices()
        }
    })
}

function showBoxTextAI(){
    let btnAI = document.querySelector(".btn_use_ai")
    btnAI.onclick = () => {
        document.querySelector(".contai_ai").classList.remove("d-none")
    }
}
function hideBoxTextAI(){
    let hideAI = document.querySelector(".hide_AI");
    hideAI.onclick = () => {
        document.querySelector(".contai_ai").classList.add("d-none");
    }
}

