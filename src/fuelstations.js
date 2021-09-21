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

    console.log(req.body);

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("update stations set name=? where station_id=?", [req.body.val, req.params.id])

    const stations = await db.all("select * from stations")

    res.send(stations)



};

exports.editProductPrice = async (req, res) => {

    if (isNaN(req.body.val)) {

        res.send({ message: "Price should be a number" })
        return
    }

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
    let name = req.body.name
    let address = req.body.address
    let latitude = req.body.latitude
    let longitude = req.body.longitude


    if (!name || !address || !latitude || !longitude) {

        res.send({ message: "Please fill in the required fields" })
        return
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        res.send({ message: "Latitude and longitude should be numbers" })
        return
    }

    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })

    await db.all("insert into stations(name, address, latitude, longitude) values(?,?,?,?)", [name, address, latitude, longitude])

    stationId = await db.get("select station_id from stations where name=?", [name])

    console.log(stationId.station_id);

    let products = req.body.products


    products.forEach(async product => {


        await db.all("insert into products(product_name, station_id, price, currency) values(?,?,?,?)", [product.name, stationId.station_id, product.price, product.currency])

        productId = await db.get("select product_id from products where product_name=? and station_id=?", [product.name, stationId.station_id])

        product.points.forEach(async point => {
            await db.all("insert into points(point_number, status, product_id) values(?,?,?)", [point.id, point.availability, productId.product_id])

        });

    });


    const pr = await db.all("select * from products")
    console.log(pr);
    const stations = await db.all("select * from stations")

    res.send(stations)



};


