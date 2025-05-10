const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "mini Messageboard",
    messages: messages
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", (req, res) => {
  const body = req.body;
  const { messageText, messageUser } = body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.status(200).redirect("/");
});

indexRouter.get("/message/:index", (req, res) => {
  const messageIndex = req.params.index;
  const message = messages[messageIndex];
  res.render("message", {
    message: message
  });
});

module.exports = indexRouter;