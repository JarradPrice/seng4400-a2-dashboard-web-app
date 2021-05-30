import { deleteMessages } from '../shared/message-data';

export default async function (context, req) {
    try {
      deleteMessages();
      context.res.status(200).json({});
    } catch (error) {
      context.res.status(500).send(error);
    }
  };