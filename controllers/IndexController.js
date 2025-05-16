const db = require("../db/queries")

async function getAllMessages(req, res) {
  messages = await db.getAllUserMessages();
  res.render("index", {
    messages: messages
  });
}

async function getNewForm(req, res) {
  res.render("form", {});
}

async function postNewForm(req, res) {
  const body = req.body;
  const { messageUsername, messageMessage } = body;
  await db.postUserMessage(messageUsername, messageMessage);
  res.status(200).redirect("/");
}

async function getIndividualMessage(req, res) {
  const messageIndex = Number(req.params.index) + 1;
  if (isNaN(messageIndex)) {
    return res.status(400).send("Message index must be a number");
  }
  const message = await db.getUserMessage(messageIndex);
  res.render("message", {
    message: message
  });
}

module.exports = {
  getAllMessages,
  getNewForm,
  postNewForm,
  getIndividualMessage
}