import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementsByTagName('body')[0] as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);