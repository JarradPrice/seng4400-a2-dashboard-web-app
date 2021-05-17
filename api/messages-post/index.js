const data = require('../shared/message-data');

module.exports = async function (context, req) {
  const message = {
    id: undefined,
    answer: req.body.answer,
    time_taken: req.body.time_taken,
  };

  try {
    const newMessage = data.addMessage(message);
    context.res.status(201).json(newMessage);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
