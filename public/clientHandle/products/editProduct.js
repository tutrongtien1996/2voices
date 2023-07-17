function editProduct(){
    let list_view_element = document.querySelectorAll(".edit_text_details");
    Array.from(list_view_element).forEach(item => {
        item.onclick = () => {
            const data = JSON.parse(item.parentElement.parentElement.parentElement.getAttribute("data-detail"));
            document.querySelector("#title").value = data.title;
            document.querySelector("#text").innerText = data.content;
            const contentWrapper = document.getElementById("content_wrapper");
            contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })
}

export {editProduct}