import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BooksList from "../pages/Books/BooksList";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthorRegister from "../pages/Author/AuthorRegister";
import AuthorLogin from "../pages/Author/AuthorLogin";
import Profile from "../pages/User/Profile";
import MyOrders from "../pages/User/MyOrders";
import MyReviews from "../pages/User/MyReviews";
import AdminMangement from "../pages/Admin/AdminMangement";
import PublishBookForm from "../pages/Author/PublishBook";
import Book from "../pages/Books/Book";
import OrderPage from "../pages/order/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/books",
        element: <BooksList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/authorregister",
        element: <AuthorRegister />,
      },
      {
        path: "/authorLogin",
        element: <AuthorLogin />,
      },
      {
        path: "admin-management",
        element: <AdminMangement />,
      },
      {
        path: "/publishbook",
        element: <PublishBookForm />,
      },
      {
        path: "/orderbook",
        element: <OrderPage />,
      },
    ],
  },
]);

export default router;
