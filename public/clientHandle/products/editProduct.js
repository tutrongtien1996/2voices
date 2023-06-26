function editProduct(){
    let list_view_element = document.querySelectorAll(".edit_text_details");
    Array.from(list_view_element).forEach(item => {
        item.onclick = () => {
            const data = JSON.parse(item.parentElement.parentElement.parentElement.getAttribute("data-detail"));
            document.querySelector("#title").value = data.title;
            document.querySelector("#text").innerText = data.content;
        }
    })
}

export {editProduct}