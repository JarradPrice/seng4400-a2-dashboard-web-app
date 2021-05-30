import { addMessage } from '../shared/message-data';

let check = "1894577348";

export default async function (context, req) {
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
      const newMessage = addMessage(message);
      context.res.status(201).json(newMessage);
    } catch (error) {
      context.res.status(500).send(error);
    }
  }
};
