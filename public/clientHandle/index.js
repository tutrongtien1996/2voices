
let convertBtn = document.querySelector("#convert");
let playtBtn = document.querySelector("#play");
let downloadBtn = document.querySelector("#download");
let text = document.querySelector("#text");

convertBtn.disabled = true
text.onkeyup = () => {
    if(text.value.length < 1 || text.value.length > 1000){
        convertBtn.disabled = true
    }
    else {convertBtn.disabled = false}
    document.querySelector('#textLength').innerText = text.value.length
}


text.onchange = () => {
    if(text.value.length > 0 && text.value.length < 1001){
    convertBtn.disabled = false
        convertBtn.onclick = async () => {
            let voiceId = document.querySelector("#voiceId").value;
            let audioElement = document.querySelector("#myAudio");
            let output = {
                text: text.value,
                voiceId
            }
        
            let result =  await axios.post('http://localhost:3010/convert', output)
              .then(function (response) {
                return response.data.data
              })
              .catch(function (error) {
                console.log(error);
              });
            if(result){
                playtBtn.style.display = "inline"
                downloadBtn.style.display = "inline"
                convertBtn.style.display = "none"
                downloadBtn.href = "/" + result.file_name;
                function resetValue(value){
                    playtBtn.innerText = value
                }
                audioElement.src = "/" + result.file_name
                playtBtn.onclick = () => {
                    myAudio.paused ? resetValue("Dừng") : resetValue("Đọc");
                    myAudio.paused ? myAudio.play()  : myAudio.pause();
                }

                audioElement.onended = () => {
                    resetValue("Đọc");
                }
        
                text.onkeyup = () => {
                    resetValue("play")
                    playtBtn.style.display = "none"
                    downloadBtn.style.display = "none"
                    convertBtn.style.display = "inline"
                }
            }
        
        }
    }
}

    



