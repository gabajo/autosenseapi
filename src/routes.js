module.exports = (app) => {
    const stations = require("./fuelstations.js");

    app.get("/stations", stations.getAll);



};
