

let convertBtn = document.querySelector("#convert");
convertBtn.onclick = async () => {
    let textValue = document.querySelector("#text").value;
    let output = {
        text: textValue,
        voiceId: "vi-VN-Standard-A"
    }

    let result =  await axios.post('http://localhost:3010/convert', output)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
    
      console.log(result)
}
