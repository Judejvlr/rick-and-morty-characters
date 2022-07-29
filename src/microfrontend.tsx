import React from 'react';
import App from './App';
import { eventsToDispatch } from './events';
import { createRoot } from 'react-dom/client';

export interface MicrofrontendOptions {
  basePath: string;
  host: string;
  history: any;
  data: any;
}


export const render = (containerId: string, options: MicrofrontendOptions) => {
  const container = document.getElementById(containerId) as HTMLElement;
  const root = createRoot(container);
  if (!container) return;
  root.render(
    <React.StrictMode>
      <App {...options.data} />
    </React.StrictMode>
  );
  console.log(`Micro-frontend ${containerId} mounted`);
};

export const unMount = (containerId: string) => {
  const container = document.getElementById(containerId) as HTMLElement;
  const root = createRoot(container);
  if (!container) return;
  root.unmount();
  console.log(`Micro-frontend ${containerId} unmounted`);
};

export const subscribe = (
  eventName: string,
  eventHandler: (this: Window, ev: any) => any
) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.addEventListener(eventName, eventHandler);
};

export const unSubscribe = (
  eventName: string,
  eventHandler: (this: Window, ev: any) => any
) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.removeEventListener(eventName, eventHandler, false);
};

export const customEvents = eventsToDispatch;
