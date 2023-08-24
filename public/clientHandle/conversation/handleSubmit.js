var mp3URL = '';
let sentenceId = 1; // Initialize the sentence ID counter


document.getElementById('conversationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const people = [];
    const participantFields = document.querySelectorAll('.participantId');
    const voiceFields = document.querySelectorAll('.participantVoice');
    participantFields.forEach((participantField, index) => {
        const person = {
            id: participantField.value,
            voice_id: voiceFields[index].value,
        };
        people.push(person);
    });
    const conversation = document.getElementById('conversation').value.split('\n')
        .map(message => {
            const person = message.split(': ')[0];
            const text = message.split(': ')[1];
            const sentence = {
                [person]: text
            };
            return sentence;
        });
    const formData = {
        voices: people,
        conversation: conversation,
    };
    const jsonData = JSON.stringify(formData);
    postData(formData, function() {
        showAudioSection();
    })
});

async function postData(conversationData, successCB) {
    const cookies = document.cookie;
    // axios.post('/api/convert/conversation', conversationData, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Cookie': cookies,
    //     },
    // })
    // .then(response => {
    //     mp3URL = response.data.data
    //     successCB()
    // })
    // .catch(error => {
    //     alert('Error:', error);
    // });
    try {
        const response = await axios.post('/api/convert/conversation', conversationData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(await response.data.success){
            
        }
    }
    catch(error) {
        alert('Error:', error);
    };
}

function showAudioSection() {
    const audioWrapper = document.getElementById('audioWrapper');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = mp3URL;
    audioWrapper.style.display = 'block';
}

function downloadAudio() {
    const mp3Url = mp3URL;
    const link = document.createElement('a');
    link.href = mp3Url;
    link.download = "audio.mp3";
    link.click(); 
    link.remove();
}