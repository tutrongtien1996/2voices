import { Repository } from "./data/reponsitory.js";
import { listVoices } from "./data/voicesList.js";

import { addlistSpeech } from "./products/addProduct.js";
import readTextFile from "./helper/readFileText.js";

let convertBtn = document.querySelector("#convert");
let text = document.querySelector("#text");
let title = document.querySelector("#title");
let textPrompt = document.querySelector("#text-prompt");
let askAIButton = document.querySelector("#askAI");
const numberCurrent = document.querySelector("#numberCurrent")
const fileTextUpload = document.querySelector('#fileText')
listVoices()


if(convertBtn){
    convertBtn.disabled = true
    text.onkeyup = () => {
        resetButton(0)
        numberCurrent.innerText = handleLengthText(text)
    }
    text.onchange = (e) => { 
        resetButton(0)
        numberCurrent.innerText = handleLengthText(text)
    }
    
    convertBtn.onclick = async () => {
        let voiceSelector = document.querySelector(".categories_voices .active");
        resetButton(1);
        document.querySelector('.loading_convert').classList.remove('d-none');
        try{
            let result = await Repository.convert({
                title: title.value,
                text: text.value, 
                voiceId: voiceSelector.id
            })
            if(await result.success){
                await addlistSpeech(result)
            }
        }
        catch(err){
            return;
        }
        document.querySelector('.loading_convert').classList.add('d-none');  
        document.querySelector('.success_convert').classList.remove('d-none');  
        setTimeout(showButtonSuccess, 2000)
    }
}


if(askAIButton){
    askAIButton.onclick = async () => {
        if (textPrompt.value.length <= 0) {
            return;
        }
        document.querySelector('.loading_AI').classList.remove('d-none');
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
        if (text.value.length < 1 || text.value.length > 5000) {
            convertBtn.disabled = true
        } else {
            convertBtn.disabled = false
        }
        // document.querySelector('#textLength').innerText = text.value.length
    }
}

function showButtonSuccess(){
    document.querySelector('.success_convert').classList.add('d-none')
}

const handleLengthText = (e) => {
    return e.value.length
}

fileTextUpload.onchange = async (event) => {
    try {
      const content = await readTextFile(event);
      text.value = content;
      numberCurrent.innerText = handleLengthText(text)
    } catch (error) {
        text.value = "File tải lên lỗi, vui lòng tải file theo đúng định dạng .txt .xlsx, .xls, or .csv"
    }
}





