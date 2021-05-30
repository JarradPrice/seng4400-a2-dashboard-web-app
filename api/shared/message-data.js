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
class TotalMessages {
  static count = 0;

  static getId() {
    this.count++;
    return this.count;
  }

  static reset() {
    this.count = 0;
  }
}

const addMessage = (message) => {
  //message.id = getId();
  message.id = TotalMessages.getId();
  data.messages.push(message);
  return message;
};

const getMessages = () => {
  return data.messages;
};

const deleteMessages = () => {
  data.messages.splice(0, data.messages.length);
  //totalMessages.count = 0;
  TotalMessages.reset();
  return true;
};

module.exports = { addMessage, getMessages, deleteMessages };
