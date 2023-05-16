import './App.css';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
  const j = (): string => 'lolo';
  return <div>lolo</div>;
};
