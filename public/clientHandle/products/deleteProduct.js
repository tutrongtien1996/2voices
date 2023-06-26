function deleteProduct(){
    let list_view_element = document.querySelectorAll(".delete_text_details");
    Array.from(list_view_element).forEach(item => {
        item.onclick = async () => {
            let parentElement = item.parentElement.parentElement.parentElement;
            const data = JSON.parse(parentElement.getAttribute("data-detail"));
            let response = await axios.delete('/products', {data: data})
            if(response.data.success){
                parentElement.remove();
            }
        }
    })
}

export {deleteProduct}