renderVoices()
async function getListVoices(){
    let result =  await axios.get(`${URL_API}/api/voices`)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    return result
}

async function renderVoices(){
    let html = "";
    let results = await getListVoices();
    if(results.success && (results.data.length > 0)){
        results.data.forEach(item => { 
            html += `<li class="d-none" id="${item.id}"  role="button">${item.name}</li>` 
        });
        let categories_voices = document.querySelector(".categories_voices");
        let categories_voices_first = document.querySelector(".categories_voices li:first-child");
        if(categories_voices){
            categories_voices.innerHTML = html;
        }
        if(categories_voices_first){
            categories_voices_first.classList.remove("d-none");
            categories_voices_first.classList.add("active");
        }
        showCategoriesVoices()
    }
}

function showCategoriesVoices(){
    let voicesActive = document.querySelector(".contai_content .categories_voices  li.active")
    let listVoices = document.querySelectorAll(".contai_content .categories_voices  li")
    if(voicesActive){
        voicesActive.onclick = () => {
            Array.from(listVoices).forEach( element => {
                element.classList.remove("d-none")
            })
            getVoices()
        }
    }
}
function getVoices(){
    let voicesActive = document.querySelector(".contai_content .categories_voices  li.active")
    let listVoices = document.querySelectorAll(".contai_content .categories_voices  li")
    Array.from(listVoices).forEach( element => {
        element.onclick = () => {
            voicesActive.classList.remove("active");
            element.classList.add("active");
            voicesActive = element;
            Array.from(listVoices).forEach(item => {
                item.classList.add("d-none")
                voicesActive.classList.remove("d-none")
            })
            showCategoriesVoices()
        }
    })
}
export {getListVoices}