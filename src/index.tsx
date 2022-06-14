import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import '@styles/globals.module.css';

const container = document.getElementById('app');
// @ts-ignore
const root = createRoot(container);

root.render(<App />);
