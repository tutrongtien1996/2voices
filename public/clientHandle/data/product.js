
async function listProducts(){
    let result =  await axios.get(`/products`)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    return result
}
export {listProducts}