import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import NotFound from './routes/NotFound/index.tsx';
import Usuarios from './routes/Usuarios/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import ExcluirProdutos from './routes/ExcluirProdutos/index.tsx';

const routes = createBrowserRouter([
  {path:"/",element:<App/> , errorElement:<NotFound/>, children:[
    {path:"/",element:<Home/>},
    {path:"/users",element:<Usuarios/>},
    {path:"/produtos",element:<Produtos/>},
    {path:"/editar/produtos/:id",element:<EditarProdutos/>},
    {path:"/excluir/produtos/:id",element:<ExcluirProdutos/>},

  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
