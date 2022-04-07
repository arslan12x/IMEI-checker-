const express = require("express");
const { isValidIMEI } = require("./controlles/imeiControllers");

//init
const app = express();

//body parser
app.use(express.json());

const imeiRoutes = require("./routes/imeiRoutes");

//Middelware
app.use("/api/v1", imeiRoutes);

app.listen(5000, () => console.log(`Run on PORT 5000`));
