import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Contato from '../pages/Contato';
import DefaultLayout from '../config/layout/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout children={<Home />} />,
    errorElement: <h1>ERROR</h1>
  },
  {
    path: '/products',
    element: <DefaultLayout children={<Produtos />} />
  },
  {
    path: '/contact',
    element: <DefaultLayout children={<Contato />} />
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
