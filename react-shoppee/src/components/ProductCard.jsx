import React from "react";
export default function Product() {
    return (
        // <div className="col l-2 m-3 c-6 home-product-item">
        //     <a className="home-product-item-link" href="https://example.com">

        <div className="col l-2-4 m-3 c-6 home-product-item">
            <a className="home-product-item-link" href="product/2">
                <div
                    className="home-product-item__img"
                    style={{
                        backgroundImage: "url(./assets/img/home/1.PNG)",
                    }}
                />
                <div className="home-product-item__info">
                    <h4 className="home-product-item__name">
                        Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước
                    </h4>
                    <div className="home-product-item__price">
                        <p className="home-product-item__price-old">180.000đ</p>
                        <p className="home-product-item__price-new">200.000đ</p>
                        <i className="home-product-item__ship fas fa-shipping-fast" />
                    </div>
                    <div className="home-product-item__footer">
                        <div className="home-product-item__save">
                            <input
                                type="checkbox"
                                name="save-check"
                                id="heart-save"
                            />
                            <label
                                htmlFor="heart-save"
                                className="far fa-heart"
                            />
                        </div>
                        <div className="home-product-item__rating-star">
                            <i className="star-checked far fa-star" />
                            <i className="star-checked far fa-star" />
                            <i className="star-checked far fa-star" />
                            <i className="star-checked far fa-star" />
                            <i className="star-checked far fa-star" />
                        </div>
                        <div className="home-product-item__saled">
                            Đã bán 3,8k
                        </div>
                    </div>
                    <div className="home-product-item__origin">Hà Nội</div>
                    <div className="home-product-item__favourite">
                        Yêu thích
                    </div>
                    <div className="home-product-item__sale-off">
                        <div className="home-product-item__sale-off-value">
                            40%
                        </div>
                        <div className="home-product-item__sale-off-label">
                            GIẢM
                        </div>
                    </div>
                </div>
                <div className="home-product-item-footer">
                    Tìm sản phẩm tương tự
                </div>
            </a>
        </div>
    );
}
