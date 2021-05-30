const data = {
  messages: [  ]
};

const totalMessages = {
  count: 0
};

const getId = () => {
  totalMessages.count++;
  id = totalMessages.count;
  return id;
};

const addMessage = (message) => {
  message.id = getId();
  data.messages.push(message);
  return message;
};

const getMessages = () => {
  return data.messages;
};

const deleteMessages = () => {
  data.messages.splice(0, data.messages.length);
  totalMessages.count = 0;
  return true;
};

module.exports = { addMessage, getMessages, deleteMessages };
