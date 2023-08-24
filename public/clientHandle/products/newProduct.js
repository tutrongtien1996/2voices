import { formatTime } from "../helper/formatTime.js"
const newProduct = (jsonDetail, data) => {
    return (
        `<tr class="border-bottom" data-detail="${jsonDetail}">
            <td class="ps-2 py-3"><input type="checkbox"></td>
            <td  class="col_title">${data.title}</td>
            <td class="col_chars">${data.number_chars}</td>
            <td class="col_date">${formatTime(data.created_at)}</td>
            <td class="col_status">thành công</td>
            <td class="col_voices">${data.voice_id}</td>
            <td class="col_action"">
                <ul class="list-inline mt-3">
                    <li class="list-inline-item play_text_details"  data-textDetailId="${data.id}"><i class="fa-solid fa-play"></i></li>
                    <li class="list-inline-item view_text_details" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-eye"></i></li>
                    <li class="list-inline-item download_text_details"><a id="" class="download text-dark" href="${data.url_audio}"  download="voice-text-to-speech.mp3"><i class="fa-solid fa-download"></i></a></li>
                    <li class="list-inline-item edit_text_details"><i class="fa-solid fa-pen"></i></li>
                    <li class="list-inline-item delete_text_details"><i class="fa-solid fa-trash-can"></i></li>
                </ul>
            </td>
        </tr>` 
    )
}

export default newProduct
