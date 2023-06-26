const Repository = {
    convert: async (input) => {
        let result =  await axios.post(`/convert`, input)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
        return result
    },
    askAI: async (prompt) => {
        let result =  await axios.post(`/ganerate`, {prompt: prompt}, 
            {headers: {
                authorization: localStorage.getItem('accessToken')
            }})
            .then(function (response) {
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
        return result
    },
}

export {Repository}