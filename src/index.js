import './assets/css/style.css'
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';  

const rootElement = document.getElementById('root');

const reactRoot = createRoot(rootElement);
reactRoot.render(<App />);

