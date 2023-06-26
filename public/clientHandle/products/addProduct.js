import { formatTime } from "../helper/formatTime.js";
import { playAudio } from "./playAudio.js";
import { showView } from "./view.js";

async function addlistSpeech(result){
    result.data.url_audio = result.data.filename;
    result.data.voice_id = result.data.voiceId;
    delete result.data.filename;
    delete result.data.voiceId;

    let tbodyElement = document.querySelector(".contai_table tbody");
    let htmlAppenchild = `<tr class="border-bottom" data-detail='${JSON.stringify(result.data)}'>
                        <td class="ps-2 py-3"><input type="checkbox"></td>
                        <td  class="col_title">${result.data.title}</td>
                        <td class="col_chars">${result.data.number_chars}</td>
                        <td class="col_date">${formatTime(result.data.created_at)}</td>
                        <td class="col_status">thành công</td>
                        <td class="col_voices">${result.data.voice_id}</td>
                        <td class="col_action"">
                            <ul class="list-inline mt-3">
                                <li class="list-inline-item play_text_details"  data-textDetailId="${result.data.id}"><i class="fa-solid fa-play"></i></li>
                                <li class="list-inline-item view_text_details" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-eye"></i></li>
                                <li class="list-inline-item"><i class="fa-solid fa-pen"></i></li>
                                <li class="list-inline-item"><a id="" class="download text-secondary" href="${result.data.url_audio}"  download="voice-text-to-speech.mp3"><i class="fa-solid fa-download"></i></a></li>
                            </ul>
                        </td>
                    </tr>` 
    tbodyElement.innerHTML = htmlAppenchild + tbodyElement.innerHTML;
    playAudio()
    showView()
}  
export {addlistSpeech}