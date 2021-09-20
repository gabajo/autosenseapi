const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")


async function setup() {
    const db = await sqlite.open({ filename: "./mydb.sqlite", driver: sqlite3.Database })
    await db.migrate({ force: "last", migrationsPath: "./src/db/migrations" })

    const stations = await db.all("select * from stations")
    console.log(stations);
    const products = await db.all("select * from products")
    console.log(products);
    const points = await db.all("select * from points")
    console.log(points);
}

setup();