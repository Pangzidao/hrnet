import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import EmployeeList from './pages/EmployeeList/EmployeeList';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
])

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
