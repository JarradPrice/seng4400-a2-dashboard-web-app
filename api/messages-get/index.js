const data = require('../shared/message-data');

module.exports = async function (context, req) {
  try {
    const messages = data.getMessages();
    context.res.status(200).json(messages);
  } catch (error) {
    context.res.status(500).send(error);
  }
};