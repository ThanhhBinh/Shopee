import React, { useEffect, useState } from "react";
import Product from "../../components/ProductCard";
import { productApi } from "../../api/productApi";

const FlashSale = () => {
    const [flashSaleProducts, setFlashSaleProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlashSaleProducts = async () => {
            try {
                const response = await productApi.getAll({ flashSale: true });
                console.log(response.data);
                setFlashSaleProducts(response.data);
            } catch (error) {
                setError("Lỗi khi tải sản phẩm flash sale");
            }
        };

        fetchFlashSaleProducts();
    }, []);

    return (
        <div
            className="container"
            style={{
                backgroundColor: "white",
                marginTop: "20px",
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
                        padding: "0 15px",
                    }}
                >
                    <h1
                        style={{
                            marginLeft: "15px",
                            color: "var(--light-btn-primary-color)",
                            padding: "0 0",
                        }}
                    >
                        FLASH SALE
                    </h1>
                    <a
                        href="/flashsale"
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
                                className="fas fa-chevron-right"
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
                    {error && <p>{error}</p>}
                    {flashSaleProducts.length === 0 ? (
                        <p>Đang tải sản phẩm flash sale...</p>
                    ) : (
                        flashSaleProducts
                            .slice(0, 6)
                            .map((product) => (
                                <Product
                                    key={product.product_id}
                                    product={product}
                                />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
