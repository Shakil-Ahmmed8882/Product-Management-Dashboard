import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

// Dashboard
import DashboardLayout from "../layouts/DashboardLayout";


//  Import standalone pages
import ErrorPage from "../pages/ErrorPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        index:true,
        element: <Dashboard/>
      },
    ],
  },
]);
