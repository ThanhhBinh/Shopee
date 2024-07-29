import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import Home from "./components/Home/Slider";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ProductList from "./scenes/productList/ProductList";
import ProductDetail from "./scenes/productList/ProductDetail";
import Checkout from "./scenes/checkout/checkout";
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
