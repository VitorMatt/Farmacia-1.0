import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cartao from './pages/Cartao.jsx';
import Camisetas from './pages/Camisetas.jsx';
import App from './App.jsx';

const router = createBrowserRouter([{

  path: '/',
  element: <App />,
  children: [{

    path: '/cartao',
    element: <Cartao />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/camisetas',
    element: <Camisetas />
  }
]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);