import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createRoutesFromElements for alternative way

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// Alternative way to create routes, older
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
  // Path dependant routing
  // {
  //   path: '/admin',
  //   children: []
  // }
]);

// Alternative way to create router, older
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
