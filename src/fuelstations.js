let data = require("../test-data.json")


exports.getAll = (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)
};