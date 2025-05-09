const { Router } = require("express");
const indexRouter = Router();

indexRouter.use("/", (req, res) => {
    res.render("index", {} );
});

module.exports = indexRouter;