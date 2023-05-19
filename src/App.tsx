import './App.css';

import { useSelector } from 'react-redux';

import { LoginView, MainView } from './views';

import { selectAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
  const isAuth = useSelector(selectAuth);

  if (isAuth) {
    return <MainView />;
  }

  return <LoginView />;
};
