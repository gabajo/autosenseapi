const express = require("express");
var cors = require("cors");


const app = express();

require("./routes")(app);


app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
