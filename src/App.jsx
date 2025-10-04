import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AppLayout } from "./Components/AppLayout/Applayout";
import { Home } from "./Components/Home";
import { Feedback } from "./Components/Feedback";
import { About } from "./Components/About";
import { Login } from "./Auth/Login";
import { Error } from "./Error/Error";

export const App = () => {
  const router = createBrowserRouter([
    // Default redirect -> login
    {
      path: "/",
      errorElement: <Error />,
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: '/app', // /app -> Home
          element: <Home />,
        },
      
        {
          path: "about", // /app/about
          element: <About />,
        },
        {
          path: "feedback", // /app/feedback
          element: <Feedback />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
