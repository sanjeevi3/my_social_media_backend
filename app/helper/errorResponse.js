exports.serverErrorResponse = async (res) => {
    await res.status(500).json({
        error: {
            message: "internal server error."
        }
    })
}