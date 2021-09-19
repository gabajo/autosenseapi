let data = require("../test-data.json")


exports.getAll = (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)
};



exports.deleteStation = (req, res) => {

    for (let index = data.length - 1; index >= 0; index--) {
        const element = data[index];
        if (element.id === req.params.id) {
            data.splice(index, 1)
        }
    }


    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)

};




exports.editStationName = (req, res) => {

    for (let index = data.length - 1; index >= 0; index--) {
        const element = data[index];
        if (element.id === req.params.id) {
            element.name = req.body.val
        }
    }


    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)



};


