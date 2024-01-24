import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostBlog from './components/PostBlogForm';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Edit from './components/EditBlog';
import ViewPost from './components/viewBlogs';

const route = createBrowserRouter([

  {
    path: '/',
    element: <Navbar/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blog-details/:id',
        element: <ViewPost />
      },
      {
        path: '/add-blog/',
        element: <PostBlog />
      },
      {
        path: '/edit-blog/:id',
        element: <Edit/>
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
