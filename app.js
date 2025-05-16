require('dotenv').config()
const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`);
});