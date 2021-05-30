import { getMessages } from '../shared/message-data';

export default async function (context, req) {
  try {
    const messages = getMessages();
    context.res.status(200).json(messages);
  } catch (error) {
    context.res.status(500).send(error);
  }
};