import express from "express";
import { readdirSync } from "fs";
require("dotenv").config();

const app = express();

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
