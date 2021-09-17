import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { itemsRouter } from "./items/items.router";


dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/menu/items", itemsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});