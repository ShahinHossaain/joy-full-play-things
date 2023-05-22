import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register";
import Page404 from "../Pages/Page404/Page404";
import Blog from "../Pages/Blog";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ToyDetailsNew from "../Shared/ToyDetailsNew/ToyDetailsNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://joy-full-play-things-server.vercel.app/toys"),
        // fetch("http://localhost:3000/toys"),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetailsNew></ToyDetailsNew>,
        loader: ({ params }) =>
          fetch(
            `https://joy-full-play-things-server.vercel.app/toys/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/*",
    element: <Page404></Page404>,
  },
]);
export default router;
