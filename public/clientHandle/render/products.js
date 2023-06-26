import { listProducts } from "../data/product.js";
import { playAudio } from "../products/playAudio.js";
import { formatTime } from "../helper/formatTime.js";
import { showView } from "../products/view.js";
import { editProduct } from "../products/editProduct.js";
import { deleteProduct } from "../products/deleteProduct.js";

axios.defaults.withCredentials = true;

renderProducts()
async function renderProducts(){
    let html = "";
    let results = await listProducts();
    if(results.data){
        if(results.success && (results.data.length > 0)){
            results.data.forEach(item => {
                html += `<tr class="border-bottom"  data-detail='${JSON.stringify(item)}'>
                <td class="ps-2 py-3"><input type="checkbox"></td>
                <td  class="col_title">${item.title}</td>
                <td class="col_chars">${item.number_chars}</td>
                <td class="col_date">${formatTime(item.created_at)}</td>
                <td class="col_status">thành công</td>
                <td class="col_voices">${item.voice_id}</td>
                <td class="col_action">
                    <ul class="list-inline mt-3">
                        <li class="list-inline-item play_text_details" data-textDetailId="${item.id}"><i class="fa-solid fa-play"></i></li>
                        <li class="list-inline-item view_text_details"  data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-eye"></i></li>
                        <li class="list-inline-item download_text_details"><a id="" class="download text-dark" href="${item.url_audio}"  download="voice-text-to-speech.mp3"><i class="fa-solid fa-download"></i></a>
                        <li class="list-inline-item edit_text_details"><i class="fa-solid fa-pen"></i></li>
                        <li class="list-inline-item delete_text_details"><i class="fa-solid fa-trash-can"></i></li>
                        </li>
                    </ul>
                </td>
            </tr>` 
            });
        }
    }
    document.querySelector(".contai_table tbody").innerHTML = html;

    playAudio()
    showView()
    editProduct()
    deleteProduct()
}


