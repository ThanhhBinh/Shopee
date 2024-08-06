import React, { useEffect, useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Filter from "./Filter";
import Paginate from "../../components/Paginate";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/admin/product")
            .then((response) => {
                // Cập nhật state với dữ liệu từ server
                setProducts(response.data);
            })
            .catch((error) => {
                // Xử lý lỗi
                setError("Có lỗi xảy ra khi tải sản phẩm.");
                console.error(
                    "There was an error fetching the products!",
                    error
                );
            });
    }, []);

    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">
                        <CategoryMenu />
                    </div>
                    <div className="col l-10 m-12 c-12">
                        <Filter />
                        <div className="home-product">
                            <ProductBox />
                        </div>
                        <Paginate />
                        <div>
                            <h1>Danh Sách Sản Phẩm</h1>
                            {error && <p>{error}</p>}
                            {products.length === 0 ? (
                                <p>Đang tải sản phẩm...</p>
                            ) : (
                                <ul>
                                    {products.map((product) => (
                                        <li key={product.id}>
                                            <h2>{product.name}</h2>
                                            <p>Giá: {product.price} VNĐ</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
