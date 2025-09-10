const errorHandling = (err, req, res, next) => {
    if (err) {
        res.status(500).json(err.message)
    }
}

export default errorHandling