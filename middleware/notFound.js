function notFound(err, req, res, next) {
    res.status(404).json({
        error: true,
        mesasge: err.message
    })
}

module.exports=notFound;