const data = {
  messages: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
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
