export type ChatInfoType = {
  [key: string]: MessageTextType[];
};

export type MessageTextType = {
  id: number;
  messageText: string;
  messageType: 'send' | 'receive';
};
