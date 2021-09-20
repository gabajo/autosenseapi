const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')



exports.getStations = async (req, res) => {

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    const result = await db.all("select * from stations")

    res.send(result)
};

exports.getProducts = async (req, res) => {

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    const result = await db.all("select * from products where station_id=?", [req.params.id])

    res.send(result)
};



exports.deleteStation = async (req, res) => {
    console.log("deletestaitons");

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("delete from stations where station_id=?", [req.params.id])

    const stations = await db.all("select * from stations")

    res.send(stations)

};




exports.editStationName = async (req, res) => {

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("update stations set name=? where station_id=?", [req.params.id])

    const stations = await db.all("select * from stations")

    res.send(stations)



};

exports.editProductPrice = async (req, res) => {

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("update products set price=? where station_id=? and product_id=?", [req.body.val, req.params.stationId, req.params.productId])

    const products = await db.all("select * from products where station_id=?", [req.params.stationId])

    res.send(products)





};

exports.getPoints = async (req, res) => {

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    const points = await db.all("select * from points where product_id=?", [req.params.id])



    res.send(points)

};

exports.saveStation = async (req, res) => {
    console.log(req.body);


    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("insert into stations(name, address, latitude, longitude) values(?,?,?,?)", [req.body.name, req.body.address, req.body.latitude, req.body.longitude])



    let products = req.body.products

    await db.all("insert into stations(name, address, latitude, longitude) values(?,?,?,?)", [req.body.name, req.body.address, req.body.latitude, req.body.longitude])

    const stations = await db.all("select * from stations")

    res.send(stations)



};


