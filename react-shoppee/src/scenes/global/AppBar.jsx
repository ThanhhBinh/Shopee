import React from "react";
export default function AppBar() {
    return (
        <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__nav-list">
                <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
                    Kênh Người Bán
                </li>
                <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
                    Trở thành Người bán Shopee
                </li>
                <li className="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
                    Tải ứng dụng
                </li>
                {/* qr code */}
                <div className="header__qrcode">
                    <img
                        alt=""
                        src="./assets/img/qr/qr-code.png"
                        className="header__qr"
                    />
                    <div className="header__apps">
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt=""
                                src="./assets/img/qr/app-store.png"
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt=""
                                src="./assets/img/qr/gg-play.png"
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt=""
                                src="./assets/img/qr/app-gallery.png"
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt=""
                                src="./assets/img/qr/ltp-img.png"
                                className="header__app-img"
                            />
                        </a>
                    </div>
                </div>
                <li className="header__nav-item">
                    Kết nối
                    <a
                        href="https://example.com"
                        className="header__nav-icon-link"
                    >
                        <i className="header__nav-icon fab fa-facebook" />
                    </a>
                    <a
                        href="https://example.com"
                        className="header__nav-icon-link"
                    >
                        <i className="header__nav-icon fab fa-instagram" />
                    </a>
                </li>
            </ul>
            <ul className="header__nav-list">
                <li className="header__nav-item header__show-note">
                    <a
                        href="/notificationOrder"
                        className="header__nav-item-link"
                    >
                        <i className="header__nav-icon far fa-bell" />
                        Thông báo
                    </a>
                    {/* thông báo */}
                    <div className="header__notifi">
                        <header className="header__notifi-header">
                            <h3>Thông Báo Mới Nhận</h3>
                        </header>
                        <ul className="header__notifi-list">
                            <li className="header__notifi-item">
                                <a
                                    href="https://example.com"
                                    className="header__notifi-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/sp/casio.png"
                                        className="header__notifi-img"
                                    />
                                    <div className="header__notifi-info">
                                        <div className="header__notifi-name">
                                            Casio fx 580 VN Plus
                                        </div>
                                        <div className="header__notifi-desc">
                                            Mua Casio 580 của LTP bao xịn, bao
                                            mượt, bao đẹp
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="header__notifi-item">
                                <a
                                    href="https://example.com"
                                    className="header__notifi-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/sp/iphone.png"
                                        className="header__notifi-img"
                                    />
                                    <div className="header__notifi-info">
                                        <div className="header__notifi-name">
                                            Điện Thoại iPhone 13 Pro 128GB -
                                            Hàng Nhập Khẩu
                                        </div>
                                        <div className="header__notifi-desc">
                                            3 Camera: Ống kính góc rộng f/1.5 -
                                            Tele f/2.8 - Siêu rộng f/1.8
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="header__notifi-item">
                                <a
                                    href="https://example.com"
                                    className="header__notifi-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/sp/iphone2.png"
                                        className="header__notifi-img"
                                    />
                                    <div className="header__notifi-info">
                                        <div className="header__notifi-name">
                                            Apple iPhone 12 Pro Max 128GB
                                        </div>
                                        <div className="header__notifi-desc">
                                            iPhone 12 Pro Max. Màn hình Super
                                            Retina XDR 6.7 inch
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="header__notifi-item">
                                <a
                                    href="https://example.com"
                                    className="header__notifi-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/sp/laptop.png"
                                        className="header__notifi-img"
                                    />
                                    <div className="header__notifi-info">
                                        <div className="header__notifi-name">
                                            Laptop HP 650 g1 siêu khỏe bền
                                        </div>
                                        <div className="header__notifi-desc">
                                            Laptop siêu bền, HP 650 g1 siêu khỏe
                                            bền ssd 120gb 15,6inh FULL HD
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="header__notifi-item">
                                <a
                                    href="https://example.com"
                                    className="header__notifi-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/sp/laptop2.png"
                                        className="header__notifi-img"
                                    />
                                    <div className="header__notifi-info">
                                        <div className="header__notifi-name">
                                            Laptop thinkpad x240 chất mỏng nhẹ
                                            i5 4300u Ram 4gb Ssd 128gb
                                        </div>
                                        <div className="header__notifi-desc">
                                            HP 650 g1 chip M đời 4, cpu i5 4200M
                                            ram 4gb -8gb
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer className="header__notifi-footer">
                            <a
                                href="https://example.com"
                                className="header__notifi-footer-btn"
                            >
                                Xem tất cả
                            </a>
                        </footer>
                    </div>
                </li>
                <li className="header__nav-item">
                    <a
                        href="https://example.com"
                        className="header__nav-item-link"
                    >
                        <i className="header__nav-icon far fa-question-circle" />
                        Hỗ trợ
                    </a>
                </li>
                <li className="header__nav-item header__nav-item--bold header__nav-item--separate">
                    <a href="/register" className="header__nav-item-link">
                        Đăng ký
                    </a>
                </li>
                <li className="header__nav-item header__nav-item--bold">
                    <a href="/login" className="header__nav-item-link">
                        Đăng nhập
                    </a>
                </li>
                <li className="header__nav-item header__nav-user">
                    <img
                        alt=""
                        src="./assets/img/user.png"
                        className="header__nav-user-avt"
                    />
                    <a
                        href="/profile"
                        className="header__nav-item-link header__nav-item--bold"
                    >
                        Phan Thanh Bình
                    </a>
                    <ul className="header__nav-user-menu">
                        <li className="header__nav-user-item">
                            <a href="/profile">Tài khoản của tôi</a>
                        </li>
                        <li className="header__nav-user-item">
                            <a href="/purchase">Đơn mua</a>
                        </li>
                        <li className="header__nav-user-item">
                            <a href="/login">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
