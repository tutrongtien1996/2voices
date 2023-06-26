
async function listVoices(){
    let result =  await axios.get(`/voices`)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    return result
}
export {listVoices}