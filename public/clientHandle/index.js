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
    let result = await Repository.convert({
        text: text.value, 
        voiceId: voiceSelector.value
    })
    if(result){
        resetButton(2)
        downloadBtn.href = "/" + result.file_name;
        audioElement.src = "/" + result.file_name
    }
}

askAIButton.onclick = async () => {
    if (textPrompt.value.length <= 0) {
        return;
    }
    let result = await Repository.askAI({
        prompt: textPrompt.value, 
    })
    if(result){
        resetButton(0)
        if (result.answer == "") {
            alert("AI đang bận")
        } else {
            text.value = result.answer;
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
        if (text.value.length < 1 || text.value.length > 1000) {
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
    convert: async (input) => {
        let result =  await axios.post('/convert', input)
            .then(function (response) {
                return response.data.data
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
