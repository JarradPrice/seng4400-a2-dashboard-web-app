const data = {
  messages: [  ],
  count: 1
};

const getId = () => {
  id = data.count;
  data.count++;
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
  return true;
};

module.exports = { addMessage, getMessages, deleteMessages };
