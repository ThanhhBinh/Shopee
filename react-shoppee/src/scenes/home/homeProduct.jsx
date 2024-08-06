import React from "react";
import Product from "../../components/ProductCard";

export default function HomeProduct() {
    return (
        <div>
            <div
                className="container"
                style={{
                    backgroundColor: "white",
                    marginTop: "25px",
                    paddingTop: "15px",
                }}
            >
                <div className="grid wide">
                    <div
                        className="row sm-gutter"
                        style={{
                            margin: "0",
                            padding: "0 15px",
                            borderBottom:
                                "3px solid var(--light-btn-primary-color)",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <h1
                            style={{
                                color: "var(--light-btn-primary-color)",
                                padding: "0",
                                fontWeight: 500,
                            }}
                        >
                            GỢI Ý HÔM NAY
                        </h1>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                        }}
                        id="list-product"
                        className="row sm-gutter"
                    >
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
            <div
                className="fppaNP"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                }}
            >
                <div
                    className="fppaNP"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                    }}
                >
                    <a
                        href="/daily_discover?pageNumber=2"
                        className="custom-button"
                    >
                        Xem thêm
                    </a>
                </div>
            </div>
        </div>
    );
}
