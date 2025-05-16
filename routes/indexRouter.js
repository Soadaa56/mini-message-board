const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/IndexController");

indexRouter.get("/", indexController.getAllMessages);

indexRouter.get("/new", indexController.getNewForm);
indexRouter.post("/new", indexController.postNewForm);
indexRouter.get("/message/:index", indexController.getIndividualMessage);

module.exports = indexRouter;