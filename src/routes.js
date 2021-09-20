module.exports = (app) => {
    const stations = require("./fuelstations.js");



    //for a bigger dataset is might be worth it to have the data in 3 different tables STATIONS PRODUCTS and PRICES (I guess points for products won't be too large) referencing eachother by stationid and productid 
    //in that case it might be woth to create separate endpoints to get the products for the given station and prices for the given product



    app.get("/stations", stations.getAll);


    app.delete("/delete/:id", stations.deleteStation);

    app.post("/edit/name/:id", stations.editStationName);

    app.post("/edit/price/:stationId/:productId", stations.editProductPrice);

    app.post("/newstation", stations.saveStation);

};
