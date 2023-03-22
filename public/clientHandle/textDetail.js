async function getListVoices(){
    let result =  await axios.get(`${URL_API}/api/voices`)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    return result
}
let list_voices = await getListVoices()

renderlistTextDetail()
async function getListTextDetails(){
    let result =  await axios.get(`${URL_API}/api/textDetails`,
            {headers: {
                authorization: localStorage.getItem('accessToken')
            }})
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    return result
}

async function renderlistTextDetail(){
    let html = "";
    let results = await getListTextDetails();
    if(results.data){
        if(results.success && (results.data.length > 0)){
            results.data.forEach(item => {
                let element = list_voices.data.find(element => element.id == item.voice_id);
                item.voice_name = element.name
                html += `<tr class="border-bottom"  data-detail='${JSON.stringify(item)}'>
                <td class="ps-2 py-3"><input type="checkbox"></td>
                <td  class="col_title">${item.title}</td>
                <td class="col_chars">${item.number_chars}</td>
                <td class="col_date">${item.created_at}</td>
                <td class="col_status">thành công</td>
                <td class="col_voices">${item.voice_name}</td>
                <td class="col_action">
                    <ul class="list-inline mt-3">
                        <li class="list-inline-item play_text_details" data-textDetailId="${item.id}"><i class="fa-solid fa-play"></i></li>
                        <li class="list-inline-item view_text_details"  data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-eye"></i></li>
                        <li class="list-inline-item"><i class="fa-solid fa-pen"></i></li>
                        <li class="list-inline-item"><a id="" class="download text-secondary" href="${item.url_audio}"  download="voice-text-to-speech.mp3"><i class="fa-solid fa-download"></i></a>
                        </li>
                    </ul>
                </td>
            </tr>` 
            });
            document.querySelector(".contai_table tbody").innerHTML = html;
            playSpeech()
            showView()
        }
    }
}

function playSpeech(){
    let list_play_element = document.querySelectorAll(".play_text_details");
    Array.from(list_play_element).forEach(item => {
        item.onclick = () => {
            let audio_url = JSON.parse(item.parentElement.parentElement.parentElement.getAttribute("data-detail")).url_audio;
            let audioElement = document.querySelector(".contai_audio audio");
            audioElement.src = "/" + audio_url;
            audioElement.play()
        }
    })
}

function showView(){
    let list_view_element = document.querySelectorAll(".view_text_details");
    Array.from(list_view_element).forEach(item => {
        item.onclick = () => {
            let views = JSON.parse(item.parentElement.parentElement.parentElement.getAttribute("data-detail"));
            console.log(views)
            document.querySelector(".popup_view p.view_id").innerText = views.id
            document.querySelector(".popup_view p.view_title").innerText = views.title
            document.querySelector(".popup_view p.view_content_text").innerText = views.content
            document.querySelector(".popup_view p.view_number_chars").innerText = views.number_chars
            document.querySelector(".popup_view p.view_voice_name").innerText = views.voice_name
        }
    })
}
