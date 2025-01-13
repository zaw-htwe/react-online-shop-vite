import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import MyCart from "../Pages/MyCart";
import ProductDetail from "../Pages/ProductDetail";
import Home from "../Pages/Home";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
