import React from "react";
import Product from "../../components/ProductCard";

export default function homeProductNew() {
    return (
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
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0",
                        padding: "0 15px",
                        borderBottom: "1px solid #DDD",
                    }}
                >
                    <h1
                        style={{
                            marginLeft: "15px",
                            color: "var(--light-btn-primary-color)",
                            padding: "0",
                            fontWeight: 500,
                        }}
                    >
                        TÌM KIẾM HÀNG ĐẦU
                    </h1>
                    <a
                        href="a"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <h3
                            style={{
                                fontWeight: 400,
                            }}
                            className="spanall"
                        >
                            Xem tất cả
                            <i
                                style={{
                                    marginLeft: "5px",
                                }}
                                class="fas fa-chevron-right"
                            ></i>
                        </h3>
                    </a>
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
    );
}
