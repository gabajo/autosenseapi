module.exports = (app) => {
    const stations = require("./fuelstations.js");
    const auth = require("./auth.js")

    app.get("/stations", auth, stations.getStations);

    app.get("/products/:id", stations.getProducts);

    app.get("/points/:id", stations.getPoints);


    app.delete("/delete/:id", stations.deleteStation);

    app.post("/edit/name/:id", stations.editStationName);

    app.post("/edit/price/:stationId/:productId", stations.editProductPrice);

    app.post("/newstation", stations.saveStation);

};
