import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createRoutesFromElements for alternative way

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

// Alternative way to create routes, older
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )



const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage />}
]);

// Alternative way to create router, older
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
