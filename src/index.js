import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Result from './Pages/Result';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/uni",
    element: <Result />
  },
  {
    path: `/*`,
    element: <Result />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</>
);