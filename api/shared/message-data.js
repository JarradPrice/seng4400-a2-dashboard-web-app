class Data {
  static messages = [];
  static count = 0;

  static addMessage(message) {
    this.count++;
    message.id = this.count;
    this.messages.push(message)
  }

  static removeMessages() {
    this.messages.splice(0, this.messages.length);
    this.count = 0;
  }
}
/*
const data = {
  messages: [  ],
};*/
/*
const totalMessages = {
  count: 0
};

const getId = () => {
  totalMessages.count++;
  id = totalMessages.count;
  return id;
};*/

const addMessage = (message) => {
  //data.messages.push(message);
  Data.addMessage(message);
  return message;
};

const getMessages = () => {
  return Data.messages;
  //return data.messages;
};

const deleteMessages = () => {
  Data.removeMessages();
  //data.messages.splice(0, data.messages.length);
  return true;
};

module.exports = { addMessage, getMessages, deleteMessages };
