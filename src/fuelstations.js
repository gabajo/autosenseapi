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
    //fai un loop normale 
    for (let index = data.length - 1; index >= 0; index--) {
        const station = data[index];
        if (station.id === req.params.id) {
            station.name = req.body.val
        }
    }


    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)



};

exports.editProductPrice = (req, res) => {

    console.log(req.params.stationId);
    console.log(req.params.productId);
    console.log(req.body.val);

    for (const key in data) {
        const station = data[key];
        if (station.id === req.params.stationId) {
            for (const key in station.prices) {
                const price = station.prices[key];
                if (price.product_id === req.params.productId) {
                    price.price = req.body.val
                }


            }
        }

    }

    // for (let index = data.length - 1; index >= 0; index--) {
    //     const station = data[index];
    //     if (station.id === req.params.stationId) {
    //         station.name = req.body.val
    //     }
    // }


    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    res.send(data)



};


