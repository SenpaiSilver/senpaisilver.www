import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Home from './Home';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
