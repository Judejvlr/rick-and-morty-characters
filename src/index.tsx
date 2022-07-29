import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export interface MicrofrontendOptions {
  basePath: string;
  host: string;
  history: any;
  data: any;
}

declare global {
  interface Window {
    renderYourBrandNewMicrofrontend: (containerId: string, options: MicrofrontendOptions) => void;
  }
  interface Window {
    unMountYourBrandNewMicrofrontend: (containerId: string) => void;
  }
}

window.renderYourBrandNewMicrofrontend = (containerId: string, options: MicrofrontendOptions) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  root.render(
    <React.StrictMode>
      <App {...options.data} />
    </React.StrictMode>
  );
  console.log(`Micro-frontend ${containerId} mounted`);
};

window.unMountYourBrandNewMicrofrontend = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
  console.log(`Micro-frontend ${containerId} unmounted`);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
