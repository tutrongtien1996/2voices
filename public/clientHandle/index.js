import { Repository } from "./data/reponsitory.js";
import { listVoices } from "./data/voicesList.js";

import { addlistSpeech } from "./products/addProduct.js";

let convertBtn = document.querySelector("#convert");
let playtBtn = document.querySelector("#play");
let downloadBtn = document.querySelector("#download");
let text = document.querySelector("#text");
let title = document.querySelector("#title");
let textPrompt = document.querySelector("#text-prompt");
let audioElement = document.querySelector("#myAudio");
let askAIButton = document.querySelector("#askAI");
let voiceSelectorChange = document.querySelector(".categories_voices .active");
listVoices()

if(convertBtn){
    convertBtn.disabled = true
    text.onkeyup = () => { resetButton(0) }
    text.onchange = () => { resetButton(0) }
    
    convertBtn.onclick = async () => {
        let voiceSelector = document.querySelector(".categories_voices .active");
        resetButton(1)
        let result = await Repository.convert({
            title: title.value,
            text: text.value, 
            voiceId: voiceSelector.id
        })
        if(await result.success){
            await addlistSpeech(result)
        }
    }
}


if(askAIButton){
    askAIButton.onclick = async () => {
        if (textPrompt.value.length <= 0) {
            return;
        }
        document.querySelector('.loading').classList.remove('d-none');
        askAIButton.classList.add('d-none');
        try{
            let result = await Repository.askAI(textPrompt.value)
            text.value = result;
        }
        catch(error){
            alert("AI đang bận")
        }
        document.querySelector('.loading').classList.add('d-none');
        askAIButton.classList.remove('d-none');
        
    }
}
// 0: unprocess
// 1: processing
// 2: processed
function resetButton(status){
    if(status == 1){
        convertBtn.disabled = true
    }
    if (status == 0) {
        if (text.value.length < 1 || text.value.length > 3000) {
            convertBtn.disabled = true
        } else {
            convertBtn.disabled = false
        }
        // document.querySelector('#textLength').innerText = text.value.length
    }
}




