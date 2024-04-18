import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { NextuiProvider } from './providers/NextuiProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextuiProvider>
      <RouterProvider router={router} />
    </NextuiProvider>
  </React.StrictMode>
);
