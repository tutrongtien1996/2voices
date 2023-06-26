function playAudio(item){
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
export {playAudio}