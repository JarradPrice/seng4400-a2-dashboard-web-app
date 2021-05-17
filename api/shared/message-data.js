const data = {
  messages: [
    {
      
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addMessage = (message) => {
  message.id = getRandomInt();
  data.messages.push(message);
  return message;
};

const updateMessage = (message) => {
  const index = data.messages.findIndex((v) => v.id === message.id);
  console.log(message);
  data.messages.splice(index, 1, message);
  return message;
};

const deleteMessage = (id) => {
  const value = parseInt(id, 10);
  data.messages = data.messages.filter((v) => v.id !== value);
  return true;
};

const getMessages = () => {
  return data.messages;
};

module.exports = { addMessage, updateMessage, deleteMessage, getMessages };
