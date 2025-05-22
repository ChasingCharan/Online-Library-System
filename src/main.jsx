import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import BrowserBooks from './components/BrowserBooks.jsx';
import AddBook from './components/AddBook.jsx';
import BookDetails from './components/BookDetails.jsx';
import PageNotFound from './components/PageNotFound.jsx';



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children : [
      {
        path : "/",
        element : <HomePage/>,
      },
      {
        path : "/browser-book",
        element : <BrowserBooks/>,
      },
      {
        path : "/add-book",
        element : <AddBook/>,
      },
      {
        path : "/book/:id",
        element : <BookDetails/>,
      },
      {
        path: "/browser-book/:category",
        element: <BrowserBooks />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
