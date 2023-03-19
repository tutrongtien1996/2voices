let convertBtn = document.querySelector("#convert");
let playtBtn = document.querySelector("#play");
let downloadBtn = document.querySelector("#download");
let text = document.querySelector("#text");
let title = document.querySelector("#title");
let textPrompt = document.querySelector("#text-prompt");
let audioElement = document.querySelector("#myAudio");
let askAIButton = document.querySelector("#askAI");

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

// convertBtn.disabled = true
// text.onkeyup = () => { resetButton(0) }
// text.onchange = () => { resetButton(0) }
// if(voiceSelector){
//     voiceSelector.onchange = () => { resetButton(0) }

// }

// if(audioElement){
//     audioElement.onended = () => {
//         playtBtn.innerText = "Đọc"
//     }
// }



convertBtn.onclick = async () => {
    let voiceSelector = document.querySelector(".categories_voices .active");
    // resetButton(1)
    let result = await Repository.convert({
        title: title.value,
        text: text.value, 
        voiceId: voiceSelector.id
    })
    if(await result.success){
        await addlistSpeech(result)
    }
    // if(result){
    //     resetButton(2)
    //     downloadBtn.href = "/" + result.file_name;
    //     audioElement.src = "/" + result.file_name
    // }
}

if(askAIButton){
    askAIButton.onclick = async () => {
        if (textPrompt.value.length <= 0) {
            return;
        }
        let result = await Repository.askAI(textPrompt.value)
        if(result){
            resetButton(0)
            if (result.answer == "") {
                alert("AI đang bận")
            } else {
                text.value = result.answer;
            }
        }
    }
}




// 0: unprocess
// 1: processing
// 2: processed
function resetButton(status){
    if (status == 0) {
        convertBtn.style.display = "inline"
        playtBtn.style.display = "none"
        downloadBtn.style.display = "none"
    }
    if (status == 1) {
        convertBtn.style.display = "inline"
        convertBtn.disabled = true
    }
    if (status == 2) {
        convertBtn.disabled = false
        convertBtn.style.display = "none"
        playtBtn.style.display = "inline"
        downloadBtn.style.display = "inline"
    }
    if (status == 0) {
        if (text.value.length < 1 || text.value.length > 10000) {
            convertBtn.disabled = true
        } else {
            convertBtn.disabled = false
        }
        document.querySelector('#textLength').innerText = text.value.length
    }
}

if(playtBtn){
    playtBtn.onclick = () => {
        playtBtn.innerText = myAudio.paused ? "Dừng" : "Đọc";
        myAudio.paused ? myAudio.play()  : myAudio.pause();
    }
}



const Repository = {
    convert: async (input) => {
        let result =  await axios.post(`${URL_API}/api/convertText`, input,
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
    },
    askAI: async (prompt) => {
        let result =  await axios.post('/generate', {prompt: prompt})
            .then(function (response) {
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
        return result
    },
}

async function addlistSpeech(result){
    let list_voices = await  getListVoices()

    let element = list_voices.data.find(element => element.id == result.data.voiceId);
    result.data.voice_name = element.name
    let tbodyElement = document.querySelector(".contai_table tbody");
    let htmlAppenchild = `<tr class="border-bottom">
                        <td class="ps-2 py-3"><input type="checkbox"></td>
                        <td  class="col_title">${result.data.title}</td>
                        <td class="col_chars">${result.data.number_chars}</td>
                        <td class="col_date">${result.data.created_at}</td>
                        <td class="col_status">thành công</td>
                        <td class="col_voices">${result.data.voice_name}</td>
                        <td class="col_action">
                            <ul class="list-inline mt-3">
                                <li class="list-inline-item play_text_details" data-textDetailId="${result.data.id}"><i class="fa-solid fa-play"></i></li>
                                <li class="list-inline-item"><i class="fa-solid fa-eye"></i></li>
                                <li class="list-inline-item"><i class="fa-solid fa-pen"></i></li>
                                <li class="list-inline-item"><i class="fa-solid fa-download"></i></li>
                            </ul>
                        </td>
                    </tr>` 
    tbodyElement.innerHTML = htmlAppenchild + tbodyElement.innerHTML
}



