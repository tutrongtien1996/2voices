function showView(){
    let list_view_element = document.querySelectorAll(".view_text_details");
    Array.from(list_view_element).forEach(item => {
        item.onclick = () => {
            let data = JSON.parse(item.parentElement.parentElement.parentElement.getAttribute("data-detail"));
            document.querySelector(".popup_view p.view_id").innerText = data.id
            document.querySelector(".popup_view p.view_title").innerText = data.title
            document.querySelector(".popup_view p.view_content_text").innerText = data.content
            document.querySelector(".popup_view p.view_number_chars").innerText = data.number_chars
            document.querySelector(".popup_view p.view_voice_name").innerText = data.voice_id
        }
    })
}

export {showView}