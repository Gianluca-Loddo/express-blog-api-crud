function ServerError(err, req, res, next) {
    res.status(500).json({
        error: true,
        mesasge: err.message,
        stack: err.stack
    })
}

module.exports=ServerError;