const responseResult = {
    success: (data) => {
        return {
            success: true,
            message: "request success",
            data: data
        }
    },
    unsuccess: (message) => { return {
        success: false,
        message: message
    }
}
}

module.exports = {responseResult}