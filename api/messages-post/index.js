const data = require('../shared/message-data');

let check = "1894577348";

module.exports = async function (context, req) {
  // simple auth check
  let key = req.body.key;
  if (key != check) {
    context.res.status(401).send();
  } else {
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
  }
};
