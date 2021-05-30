const data = {
  messages: [  ],
};
/*
const totalMessages = {
  count: 0
};

const getId = () => {
  totalMessages.count++;
  id = totalMessages.count;
  return id;
};*/

const updateIds = () => {
  data.messages.forEach(function (item, index) {
    data.messages[index].id = index + 1;
  })
};

const addMessage = (message) => {
  data.messages.push(message);
  
  return message;
};

const getMessages = () => {
  updateIds();
  return data.messages;
};

const deleteMessages = () => {
  data.messages.splice(0, data.messages.length);
  return true;
};

module.exports = { addMessage, getMessages, deleteMessages };
