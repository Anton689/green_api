import s from './MainView.module.css';

import { ChatWindow, ContactList, Wrapper } from 'components';
import { ReturnComponentType } from 'types';

export const MainView = (): ReturnComponentType => (
  <div className={s.container}>
    <Wrapper>
      <ContactList />
      <ChatWindow />
    </Wrapper>
  </div>
);
