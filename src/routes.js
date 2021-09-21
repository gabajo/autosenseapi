module.exports = (app) => {
    const stations = require("./fuelstations.js");
    const auth = require("./auth.js")

    app.get("/stations", auth, stations.getStations);

    app.get("/products/:id", auth, stations.getProducts);

    app.get("/points/:id", auth, stations.getPoints);


    app.delete("/delete/:id", auth, stations.deleteStation);

    app.post("/edit/name/:id", auth, stations.editStationName);

    app.post("/edit/price/:stationId/:productId", auth, stations.editProductPrice);

    app.post("/newstation", auth, stations.saveStation);

};
