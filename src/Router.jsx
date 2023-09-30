import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Shop from './Components/Shop.jsx';
import App from './App.jsx';
import ErrorPage from './Components/ErrorPage.jsx';


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

        
      ]);

      return <RouterProvider router={router}/>

} 

export default Router;