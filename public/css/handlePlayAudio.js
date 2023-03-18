let croll_audio = document.querySelector(".croll_audio");
let playelement = document.querySelector(".icon_play_pause.play_icon");
let pauseElement =  document.querySelector(".icon_play_pause.pause_icon")



playAudio()
pauseAudio()

function playAudio(){
    playelement.onclick = (e) => {
        pauseElement.classList.remove("d-none"); 
        e.target.parentElement.classList.add("d-none");

        croll_audio.style.width = "300px"
    }
}
function pauseAudio(){
    pauseElement.onclick = (e) => {
        playelement.classList.remove("d-none"); 
        e.target.parentElement.classList.add("d-none");
        let computedStyle = window.getComputedStyle(croll_audio);
        let widthElement = computedStyle.getPropertyValue('width');
        croll_audio.style.width = widthElement;
    }
}

