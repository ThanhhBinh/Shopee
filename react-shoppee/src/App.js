import "./App.css";
import React from "react";
import AppBar from "./scenes/global/AppBar";
import Banner from "./scenes/global/Banner";
import Navbar from "./scenes/global/Navbar";
import CoppyRight from "./scenes/global/CoppyRight";
import Footer from "./scenes/global/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import ProductList from "./scenes/productList/ProductList";
import OtherFooter from "./scenes/global/OtherFooter";

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <div className="app">
                    {/* header */}
                    <header className="header">
                        <div className="grid wide">
                            <AppBar />

                            <Banner />

                            <Navbar />
                        </div>
                    </header>
                    {/* container */}
                    <ProductList />
                    <Outlet />
                    {/* footer */}
                    <footer className="footer">
                        {/* main footer */}
                        <div className="main-footer">
                            <div className="grid wide">
                                {/* footer */}
                                <Footer />
                                {/*import coppy right footer */}
                                <CoppyRight />
                            </div>
                        </div>

                        {/* import other footer */}
                        <OtherFooter />
                    </footer>
                </div>
            </Provider>
        </div>
    );
}
