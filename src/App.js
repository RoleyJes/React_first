import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Repos from "./Pages/Repos";
import Error404 from "./Pages/Error404";
import RepoDetails from "./Pages/repodetails";

function App() {
  /* Page routing using react-router-dom */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Repos />,
      errorElement: <Error404 />,
    },

    {
      path: "/repodetails/:id",
      element: <RepoDetails />,
      errorElement: <Error404 />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
