exports.serverErrorResponse = async (res) => {
    await res.status(500).json({
        error: {
            message: "internal server error."
        }
    })
}

//this function check the validation error then response the error otherwise call next function
/* 
    param1 - validation detail
    param2 - response
    param3 - next function
*/
exports.validateErrorResponse = (validation, res, next) => {
    if (validation.error) {
        res.status(400).json({
            error: {
                [validation.error.details[0].path[0]]: validation.error.details[0].message
            }
        })
    }
    else
        next()
}