const data = require('../shared/message-data');

module.exports = async function (context, req) {
    try {
      data.deleteMessages();
      context.res.status(200).json({});
    } catch (error) {
      context.res.status(500).send(error);
    }
  };