export type SendType = {
  chatId: string;
  message: string;
};

export type ReceiveMessageResponseType = {
  body: BodyType;
  receiptId: number;
};

type BodyType = {
  idMessage: string;
  instanceData: InstanceDataType;
  messageData: {
    textMessageData: { textMessage: string };
    typeMessage: 'textMessage';
  };
  senderData: SenderDataType;
  timestamp: number;
};

type InstanceDataType = {
  idInstance: number;
  typeInstance: 'whatsapp';
  wid: string;
};

type SenderDataType = {
  chatId: string;
  chatName: string;
  sender: string;
  senderName: string;
};
