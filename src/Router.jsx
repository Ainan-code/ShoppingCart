import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Shop from './Components/Shop.jsx';
import App from './App.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Cart from './Components/Cart.jsx';


const Router = () => {
  const router =   createBrowserRouter([
        {
          path: "/",
          element: <App/>,
          errorElement: <ErrorPage/>
        },
      
        {
          path: "/shop",
          element: <Shop/>,

          },

          {
            path: "/cart",
            element: <Cart/>,
  
            },

        
      ]);

      return <RouterProvider router={router}/>

} 

export default Router;