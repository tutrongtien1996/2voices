import newProduct from "./newProduct.js";
import { deleteProduct } from "./deleteProduct.js";
import { editProduct } from "./editProduct.js";
import { playAudio } from "./playAudio.js";
import { showView } from "./view.js";

async function addlistSpeech(result){
    result.data.url_audio = result.data.filename;
    result.data.voice_id = result.data.voiceId;
    delete result.data.filename;
    delete result.data.voiceId;

    const jsonDetail = JSON.stringify(result.data).replace(/"/g, '&quot;');
    let tbodyElement = document.querySelector(".contai_table tbody");
    let htmlAppenchild = newProduct(jsonDetail, result.data)
    tbodyElement.innerHTML = htmlAppenchild + tbodyElement.innerHTML;
    playAudio()
    showView()
    editProduct()
    deleteProduct()
    const table_product = document.getElementById("table_product");
    table_product.scrollIntoView({ behavior: 'smooth' });
}  
export {addlistSpeech}