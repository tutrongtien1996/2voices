
const handleActiveNav = () => {
    const url_current = window.location.href;
    const listNav = document.querySelectorAll(".contai_content_list .item_nav")
    if(listNav){
        const listItem = Array.from(listNav);
        listItem.forEach((item) => {
            item.classList.remove("active_nav")
            if(url_current.includes(item.getAttribute("id"))){
                item.classList.add("active_nav")
            }
        })
        const navActive = document.querySelector(".contai_content_list .active_nav")
        if(!navActive){
            document.querySelector("#defail").classList.add("active_nav")
        }
    }
}

export default handleActiveNav