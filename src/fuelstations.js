let data = require("../test-data.json")


exports.getAll = (req, res) => {
    res.send(data)
};