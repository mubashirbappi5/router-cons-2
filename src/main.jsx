import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Users from './component/Users';
import ShowDetail from './component/ShowDetail';
import Posts from './component/Posts';
import Postditels from './component/Postditels';
import Error from './component/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error></Error>,
    children:[{
      path:"/about",
      element:<About/>

    },
    
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/users",
      loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
      element:<Users/>
    },
    { 
      path:"/users/:userid",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
      element:<ShowDetail/>

    },
    {
      path:"/posts",
      loader:()=> fetch("https://jsonplaceholder.typicode.com/posts"),
      element:<Posts/>

    },
    {
      path:"/posts/:postid",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
      element:<Postditels/>
    }
   
    
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
