module.exports = (req, res, next) => {

    const key = req.headers["authorization"];


    if (key == null) return res.sendStatus(401);


    if (key === process.env.KEY) {
        next()
    }
};