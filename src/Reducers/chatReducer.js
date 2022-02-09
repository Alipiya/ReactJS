import update from 'react-addons-update';
import { SEND_MESSAGE } from '../Actions/messageActions';
import { ADD_CHAT } from '../Actions/chatActions';

const initialStore = {
  chats: [
    {
      title: 'Olga Alopova',
      messageList: [0],
    },
    {
      title: 'Jane Doe',
      messageList: [1],
    },
  ],
};

export default (store = initialStore, action) => {
  switch (action.type) {
  case SEND_MESSAGE: {
    return update(store, {
      chats: {
        $merge: {
          [action.chatId]: {
            ...store.chats[action.chatId],
            messageList: [...store.chats[action.chatId].messageList, action.messageId],
          },
        },
      },
    });
  }
  case ADD_CHAT: {
    return update(store, {
      chats: {
        $push: [{ title: action.title, messageList: [] }],
      },
    });
  }
  default:
    return store;
  }
};