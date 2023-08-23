
const { URL_API } = require("../../../clientHandle/constant");
let convertBtn = document.querySelector("#convert");
let playtBtn = document.querySelector("#play");
let downloadBtn = document.querySelector("#download");
let text = document.querySelector("#text");
let textPrompt = document.querySelector("#text-prompt");
let audioElement = document.querySelector("#myAudio");
let voiceSelector = document.querySelector("#voiceId");
let askAIButton = document.querySelector("#askAI");


convertBtn.disabled = true
text.onkeyup = () => { resetButton(0) }
text.onchange = () => { resetButton(0) }
voiceSelector.onchange = () => { resetButton(0) }

audioElement.onended = () => {
    playtBtn.innerText = "Đọc"
}

convertBtn.onclick = async () => {
    resetButton(1)
    // let check = await Repository.checkIP();
    // if(true){
        let result = await Repository.convert({
            text: text.value, 
            voiceId: voiceSelector.value
        })
        if(result){
            resetButton(2)
            downloadBtn.href = "/" + result.file_name;
            audioElement.src = "/" + result.file_name
        }
        return
    // }
    document.querySelector(".contai_popup").classList.remove("d-none")
    document.querySelector(".contai_popup").classList.add("popup_active")
}

// askAIButton.onclick = async (e) => {
//     let check = await Repository.checkIP();
//     if(check){
//         if (textPrompt.value.length <= 0) {
//             return;
//         }
//         document.querySelector(".wrapper").classList.remove("d-none")
//         let result = await Repository.askAI(textPrompt.value)
//         if(result){
//         document.querySelector(".wrapper").classList.add("d-none")
//             resetButton(0)
//             if (result.answer == "") {
//                 alert("AI đang bận")
//             } else {
//                 text.value = result.answer;
//             }
//         }
//         return;
//     }
//     document.querySelector(".contai_popup").classList.remove("d-none")
//     document.querySelector(".contai_popup").classList.add("popup_active")
// }


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
        if (text.value.length < 1 || text.value.length > 5000) {
            convertBtn.disabled = true
        } else {
            convertBtn.disabled = false
        }
        document.querySelector('#textLength').innerText = text.value.length
    }
}

playtBtn.onclick = () => {
    playtBtn.innerText = myAudio.paused ? "Dừng" : "Đọc";
    myAudio.paused ? myAudio.play()  : myAudio.pause();
}

const Repository = {
    checkIP: async () => {
        let result =  await axios.get(`${url_api}/api/checkip`)
            .then(function (response) {
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
        return result
    },

    convert: async (input) => {
        let result =  await axios.post('/convert', input)
            .then(function (response) {
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
            console.log(result)
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

//hieu ung please wait
// let interval = setInterval(() => {
//     document.querySelector('.wrapper ul').classList.toggle('active')
//   }, 1200);
