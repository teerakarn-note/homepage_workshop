import React from 'react';
import ReactDOM from 'react-dom/client';
import Index  from './pages/index';
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([

  // การกำหนดเส้นทางของแอปพลิเคชัน
  // โดยใช้ React Router
  // เพิ่มหน้าส่วนนี้
  {
    path: '/',
    element: <Index/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
