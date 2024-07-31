import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/css/base.css";
import "./assets/css/style.css";
import "./assets/css/grid.css";
import "./assets/css/responsive.css";
import { Provider } from "react-redux";
import store from "../src/state/store";
import Home from "./scenes/home/home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ProductList from "./scenes/productList/ProductList";
import ProductDetail from "./scenes/productDetail/ProductDetail";
import Checkout from "./scenes/checkout/checkout";
import Confirmation from "./scenes/checkout/confirmation";
import CartMenu from "./scenes/global/CartMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "product",
                element: <ProductList />,
            },
            {
                path: "product/page/:pageNum",
                element: <ProductList />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "checkout/success",
                element: <Confirmation />,
            },
            {
                path: "cart",
                element: <CartMenu />,
            },
        ],
    },
]);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);
