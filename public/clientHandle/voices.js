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
        document.querySelector(".categories_voices").innerHTML = html;
        document.querySelector(".categories_voices li:first-child").classList.remove("d-none");
        document.querySelector(".categories_voices li:first-child").classList.add("active");
        showCategoriesVoices()
    }
}

function showCategoriesVoices(){
    let voicesActive = document.querySelector(".contai_content .categories_voices  li.active")
    let listVoices = document.querySelectorAll(".contai_content .categories_voices  li")
    voicesActive.onclick = () => {
        Array.from(listVoices).forEach( element => {
            element.classList.remove("d-none")
        })
        getVoices()
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