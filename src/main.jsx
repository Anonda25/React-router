import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contuct from './Components/Contuct/Contuct.jsx';
import Profile from './Components/Profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home></Home>,
        loader: ()=>fetch('fackdata.json')
      },
      {
        path: "Blog",
        element: <Blog></Blog>,
      },
      {
        path: "Contuct",
        element: <Contuct></Contuct>,
      },
      {
        path: "Profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
