import "./App.css";
import "./assets/css/base.css";
import "./assets/css/style.css";
import "./assets/css/grid.css";
import "./assets/css/responsive.css";

function App() {
    return (
        <div>
            <div className="app">
                {/* header */}
                <header className="header">
                    <div className="grid wide">
                        {/* navbar */}
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
                                        href="https://example.com"
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
                                                            Mua Casio 580 của
                                                            LTP bao xịn, bao
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
                                                            Điện Thoại iPhone 13
                                                            Pro 128GB - Hàng
                                                            Nhập Khẩu
                                                        </div>
                                                        <div className="header__notifi-desc">
                                                            3 Camera: Ống kính
                                                            góc rộng f/1.5 -
                                                            Tele f/2.8 - Siêu
                                                            rộng f/1.8
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
                                                            Apple iPhone 12 Pro
                                                            Max 128GB
                                                        </div>
                                                        <div className="header__notifi-desc">
                                                            iPhone 12 Pro Max.
                                                            Màn hình Super
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
                                                            Laptop HP 650 g1
                                                            siêu khỏe bền
                                                        </div>
                                                        <div className="header__notifi-desc">
                                                            Laptop siêu bền, HP
                                                            650 g1 siêu khỏe bền
                                                            ssd 120gb 15,6inh
                                                            FULL HD
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
                                                            Laptop thinkpad x240
                                                            chất mỏng nhẹ i5
                                                            4300u Ram 4gb Ssd
                                                            128gb
                                                        </div>
                                                        <div className="header__notifi-desc">
                                                            HP 650 g1 chip M đời
                                                            4, cpu i5 4200M ram
                                                            4gb -8gb
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
                                    <a
                                        href="https://example.com"
                                        className="header__nav-item-link"
                                    >
                                        Đăng ký
                                    </a>
                                </li>
                                <li className="header__nav-item header__nav-item--bold">
                                    <a
                                        href="https://example.com"
                                        className="header__nav-item-link"
                                    >
                                        Đăng nhập
                                    </a>
                                </li>
                                {/* <li class="header__nav-item header__nav-user">
                      <img alt="" alt="" src="./assets/img/user.png" class="header__nav-user-avt">
                      <a href="https://example.com" class="header__nav-item-link header__nav-item--bold">Lục Thiên Phong</a>
                      <ul class="header__nav-user-menu">
                          <li class="header__nav-user-item">
                              <a href="https://example.com">Tài khoản của tôi</a>
                          </li>
                          <li class="header__nav-user-item">
                              <a href="https://example.com">Đơn mua</a>
                          </li>
                          <li class="header__nav-user-item">
                              <a href="https://example.com">Đăng xuất</a>
                          </li>
                      </ul>
                  </li> */}
                            </ul>
                        </nav>
                        {/* search */}
                        <div className="header__contain">
                            <label
                                htmlFor="mobile-search"
                                className="header__mobile-search"
                            >
                                <i className="header__mobile-search-icon fas fa-search" />
                            </label>
                            <div className="header__logo">
                                <a
                                    href="https://example.com"
                                    className="header__logo-link"
                                >
                                    <img
                                        alt=""
                                        src="./assets/img/logo/logo-full-white.png"
                                        className="header__logo-img"
                                    />
                                </a>
                            </div>
                            <input
                                type="checkbox"
                                id="mobile-search"
                                className="header__search-check"
                                hidden
                            />
                            <div className="header__search">
                                <div className="header__search-input-wrap">
                                    <input
                                        type="text"
                                        className="header__search-input"
                                        placeholder="Tìm kiếm trên Shoppee"
                                    />
                                    <div className="header__search-history">
                                        <ul className="header__search-history-list">
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Combo 30 điểm đại học khối A
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Combo 30 điểm đại học khối D
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Mỹ phẩm cho người yêu
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Bí kíp tán crush auto đổ
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Iphone 13 Pro Max giá rẻ
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="https://example.com">
                                                    Người yêu đẹp trai như LTP
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn header__search-btn">
                                    <i className="header__search-btn-icon fas fa-search" />
                                </button>
                            </div>
                            {/* header__cart--no-cart */}
                            {/* header__cart--has-cart */}
                            <div className="header__cart header__cart--has-cart">
                                <i className="header__cart-icon fas fa-shopping-cart" />
                                <div className="header__cart-count">4</div>
                                <div className="header__cart-list no-cart">
                                    <img
                                        alt=""
                                        src="./assets/img/sp/no-cart.png"
                                        className="header__no-cart-img"
                                    />
                                    <p className="header__no-cart-text">
                                        Chưa có sản phẩm
                                    </p>
                                </div>
                                <div className="header__cart-list has-cart">
                                    <h4 className="header__cart-heading">
                                        Sản phẩm đã chọn
                                    </h4>
                                    <ul className="header__cart-list-item">
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/1.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Thanh Thanh 2000 1m57
                                                        46kg 88-62-89
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.000.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 2
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/2.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Hồng Ánh 1998 1m62 48kg
                                                        89-64-91
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.500.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 1
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/3.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Quỳnh Như 1999 1m65 49kg
                                                        90-62-89
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.800.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 1
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/4.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Kim Ngân 2001 1m55 45kg
                                                        86-60-87
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        3.200.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 3
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/5.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Thanh Thanh 2000 1m57
                                                        46kg 88-62-89
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.000.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 2
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/6.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Hồng Ánh 1998 1m62 48kg
                                                        89-64-91
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.500.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 1
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/7.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Quỳnh Như 1999 1m65 49kg
                                                        90-62-89
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        2.800.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 1
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header__cart-item">
                                            <img
                                                alt=""
                                                src="./assets/img/buy/8.PNG"
                                                className="header__cart-item-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-heading">
                                                    <h3 className="header__cart-item-name">
                                                        Kim Ngân 2001 1m55 45kg
                                                        86-60-87
                                                    </h3>
                                                    <p className="header__cart-item-price">
                                                        3.200.000đ
                                                    </p>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <p className="header__cart-item-number">
                                                        x 3
                                                    </p>
                                                    <div className="header__cart-item-close">
                                                        Xoá
                                                        <i className="fas fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="header__cart-footer">
                                        <a
                                            href="https://example.com"
                                            className="btn btn--primary header__cart-see-cart"
                                        >
                                            Xem giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="header__sort-bar">
                        <li className="header__sort-item">
                            <a
                                href="https://example.com"
                                className="header__sort-link"
                            >
                                Liên quan
                            </a>
                        </li>
                        <li className="header__sort-item header__sort-item--active">
                            <a
                                href="https://example.com"
                                className="header__sort-link"
                            >
                                Mới nhất
                            </a>
                        </li>
                        <li className="header__sort-item">
                            <a
                                href="https://example.com"
                                className="header__sort-link"
                            >
                                Bán chạy
                            </a>
                        </li>
                        <li className="header__sort-item">
                            <a
                                href="https://example.com"
                                className="header__sort-link"
                            >
                                Giá
                            </a>
                        </li>
                    </ul>
                </header>
                {/* container */}
                <div className="container">
                    <div className="grid wide">
                        <div className="row sm-gutter">
                            <div className="col l-2 m-0 c-0">
                                {/* category */}
                                <nav className="category">
                                    <h3 className="category-heading">
                                        <i className="category-heading-icon fas fa-list-ul" />
                                        Bộ lọc tìm kiếm
                                    </h3>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Theo Danh Mục
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Thiết bị mạng
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Chuột và bàn phím
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                USB
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Link kiện máy tính
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Wifi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Nơi Bán
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Hà Nội
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Hồ Chí Minh
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Đà Nẵng
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Đơn Vị Vận Chuyển
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Hoả tốc
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Nhanh
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Tiết kiệm
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Thương Hiệu
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Kingston
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Sandisk
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Seagate
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Khoảng Giá
                                        </div>
                                        <div className="category-group-filter">
                                            <input
                                                type="number"
                                                placeholder="đ TỪ"
                                                className="category-group-filter-input"
                                            />
                                            <i className="fas fa-arrow-right" />
                                            <input
                                                type="number"
                                                placeholder="đ ĐẾN"
                                                className="category-group-filter-input"
                                            />
                                        </div>
                                        <button className="btn btn--primary category-group-filter-btn">
                                            Áp dụng
                                        </button>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Loại Shop
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Shoppee
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Shoppee Mail
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Shop yêu thích
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Tình Trạng
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Mới
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Đã sử dụng
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Lựa Chọn Thanh Toán
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Thanh toán khi nhận hàng
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Chuyển khoản
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Trả góp 0%
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Đánh Giá
                                        </div>
                                        <div className="rating-star">
                                            <input
                                                type="checkbox"
                                                className="category-group-item-check"
                                            />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                        </div>
                                        <div className="rating-star">
                                            <input
                                                type="checkbox"
                                                className="category-group-item-check"
                                            />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                        </div>
                                        <div className="rating-star">
                                            <input
                                                type="checkbox"
                                                className="category-group-item-check"
                                            />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                        </div>
                                        <div className="rating-star">
                                            <input
                                                type="checkbox"
                                                className="category-group-item-check"
                                            />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                        </div>
                                        <div className="rating-star">
                                            <input
                                                type="checkbox"
                                                className="category-group-item-check"
                                            />
                                            <i className="star-checked far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                            <i className="star-uncheck far fa-star" />
                                        </div>
                                    </div>
                                    <div className="category-group">
                                        <div className="category-group-title">
                                            Dịch Vụ &amp; Khuyến Mãi
                                        </div>
                                        <ul className="category-group-list">
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Freeship Xtra
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Hoàn xu Xtra
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Đang giảm giá
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Miễn phí vận chuyển
                                            </li>
                                            <li className="category-group-item">
                                                <input
                                                    type="checkbox"
                                                    className="category-group-item-check"
                                                />
                                                Gì cũng rẻ
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn btn--primary category-group-filter-btn category-group--margin">
                                        LÀM MỚI
                                    </button>
                                </nav>
                            </div>
                            <div className="col l-10 m-12 c-12">
                                {/* home filter */}
                                <div className="home-filter hide-on-mobile-tablet">
                                    <div className="home-filter-control">
                                        <p className="home-filter-title">
                                            Sắp xếp theo
                                        </p>
                                        <button className="btn btn--primary home-filter-btn">
                                            Phổ biến
                                        </button>
                                        <button className="btn home-filter-btn">
                                            Mới nhất
                                        </button>
                                        <button className="btn home-filter-btn">
                                            Bán chạy
                                        </button>
                                        <div className="btn home-filter-sort">
                                            <p className="home-filter-sort-btn">
                                                Giá
                                            </p>
                                            <i className="fas fa-sort-amount-down-alt" />
                                            <ul className="home-filter-sort-list">
                                                <li>
                                                    <a
                                                        href="https://example.com"
                                                        className="home-filter-sort-item-link"
                                                    >
                                                        Giảm dần
                                                        <i className="fas fa-sort-amount-down-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://example.com"
                                                        className="home-filter-sort-item-link"
                                                    >
                                                        Tăng dần
                                                        <i className="fas fa-sort-amount-up-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="home-filter-page">
                                        <div className="home-filter-page-number">
                                            <p className="home-filter-page-now">
                                                1
                                            </p>
                                            /14
                                        </div>
                                        <div className="home-filter-page-control">
                                            <a
                                                href="https://example.com"
                                                className="home-filter-page-btn home-filter-page-btn--disable"
                                            >
                                                <i className="fas fa-angle-left" />
                                            </a>
                                            <a
                                                href="https://example.com"
                                                className="home-filter-page-btn"
                                            >
                                                <i className="fas fa-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* home product */}
                                <div className="home-product">
                                    <nav className="mobile-category">
                                        <ul className="mobile-category-list">
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Thiết bị mạng
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Chuột và bàn phím
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    USB
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Link kiện máy tính
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Wifi
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Ổ cứng
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    CD/DVD
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Tai nghe
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Lót chuột
                                                </a>
                                            </li>
                                            <li className="mobile-category-item">
                                                <a
                                                    href="https://example.com"
                                                    className="mobile-category-item-link"
                                                >
                                                    Micro
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div
                                        id="list-product"
                                        className="row sm-gutter"
                                    />
                                    {/* <div id="list-product" class="row sm-gutter">
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/1.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/2.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">300.000đ</p>
                                          <p class="home-product-item__price-new">250.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,2k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/3.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">150.000đ</p>
                                          <p class="home-product-item__price-new">180.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,7k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">30%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/4.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">350.000đ</p>
                                          <p class="home-product-item__price-new">400.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 2,7k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                                      <div class="home-product-item__sale-off-value">20%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/5.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">270.000đ</p>
                                          <p class="home-product-item__price-new">300.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,2k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">20%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/6.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">160.000đ</p>
                                          <p class="home-product-item__price-new">220.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 2,3k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">25%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/7.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">195.000đ</p>
                                          <p class="home-product-item__price-new">250.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">15%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/8.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">360.000đ</p>
                                          <p class="home-product-item__price-new">420.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,9k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">20%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/9.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">130.000đ</p>
                                          <p class="home-product-item__price-new">170.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">50%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/10.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/11.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/12.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/13.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/14.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/15.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/16.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">180.000đ</p>
                                          <p class="home-product-item__price-new">200.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,8k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">40%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/17.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Jack BNC lò xo cho dây tín hiệu đồng trục camera</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">170.000đ</p>
                                          <p class="home-product-item__price-new">210.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">30%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/18.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Pin TCbest AA và AAA cho chuột không dây và điều khiển giao ngẫu nhiên</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">50.000đ</p>
                                          <p class="home-product-item__price-new">70.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 5,6k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">10%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/19.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Màn Hình Máy Tính 24 inch/19inch AOC,Màn Hình 75HZ Full HD 1920*1080</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">2.100.000đ</p>
                                          <p class="home-product-item__price-new">3.000.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">36%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/20.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Webcam Máy Tính-Latop-Có Mic Full HD-Camera</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">350.000đ</p>
                                          <p class="home-product-item__price-new">400.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 2,7k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">20%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/21.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Loa máy tính để bàn,loa vi tính MC D - 221 SUPER BASS</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">270.000đ</p>
                                          <p class="home-product-item__price-new">300.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,2k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">25%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/22.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Loa SIÊU TRẦM (SUB BASS): 8W, cường độ âm thanh >80dB</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">160.000đ</p>
                                          <p class="home-product-item__price-new">185.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 2,3k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">23%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/23.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Bàn Phím Gaming Có Led 7 Màu-Bàn Phím G21 Kèm Chuột-Lót Chuột</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">195.000đ</p>
                                          <p class="home-product-item__price-new">230.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">15%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/24.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">Bàn phím Gaming, Keyboard T-WOLF TF20 Led 7 màu USB</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">360.000đ</p>
                                          <p class="home-product-item__price-new">420.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 1,9k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">20%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                          <div class="col l-2-4 m-3 c-6 home-product-item">
                              <a class="home-product-item-link" href="https://example.com">
                                  <div class="home-product-item__img" style="background-image: url(./assets/img/home/25.PNG);"></div>
                                  <div class="home-product-item__info">
                                      <h4 class="home-product-item__name">CHUỘT KHÔNG DÂY T- WOLF Q13 CHUỘT GAMING</h4>
                                      <div class="home-product-item__price">
                                          <p class="home-product-item__price-old">135.000đ</p>
                                          <p class="home-product-item__price-new">170.000đ</p>
                                          <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                      </div>
                                      <div class="home-product-item__footer">
                                          <div class="home-product-item__save">
                                              <input type="checkbox" name="save-check" id="heart-save">
                                              <label for="heart-save" class="far fa-heart"></label>
                                          </div>
                                          <div class="home-product-item__rating-star">
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                              <i class="star-checked far fa-star"></i>
                                          </div>
                                          <div class="home-product-item__saled">Đã bán 3,1k</div>
                                      </div>
                                      <div class="home-product-item__origin">Hà Nội</div>
                                      <div class="home-product-item__favourite">
                                          Yêu thích
                                      </div>
                                      <div class="home-product-item__sale-off">
                                          <div class="home-product-item__sale-off-value">50%</div>
                                          <div class="home-product-item__sale-off-label">GIẢM</div>
                                      </div>
                                  </div>
                                  <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
                              </a>
                          </div>
                      </div> */}
                                </div>
                                {/* pagination */}
                                <ul className="pagination home-product-pagination">
                                    <li className="pagination-item">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link pagination-item-link--disable"
                                        >
                                            <i className="fas fa-chevron-left" />
                                        </a>
                                    </li>
                                    <li className="pagination-item pagination-item--active">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link"
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a
                                            className="pagination-item-link pagination-item-link--disable"
                                            href="https://example.com"
                                            aria-label="Example Link"
                                        ></a>
                                    </li>
                                    <li className="pagination-item">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link"
                                        >
                                            8
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a
                                            href="https://example.com"
                                            className="pagination-item-link"
                                        >
                                            <i className="fas fa-chevron-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <footer className="footer">
                    {/* main footer */}
                    <div className="main-footer">
                        <div className="grid wide">
                            <div className="row sm-gutter main-footer-info">
                                <div className="col l-2-4 m-4 c-6">
                                    <h3 className="footer__heading">
                                        CHĂM SÓC KHÁCH HÀNG
                                    </h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Trung Tâm Trợ Giúp
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Shopee Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Shopee Mall
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Hướng Dẫn Mua Hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Hướng Dẫn Bán Hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Thanh Toán
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Shopee Xu
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Vận Chuyển
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Trả Hàng &amp; Hoàn Tiền
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Chăm Sóc Khách Hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Chính Sách Bảo Hành
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col l-2-4 m-4 c-6">
                                    <h3 className="footer__heading">
                                        VỀ SHOPEE
                                    </h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Giới Thiệu Về Shopee Việt Nam
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Tuyển Dụng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Điều Khoản Shopee
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Chính Sách Bảo Mật
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Chính Hãng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Kênh Người Bán
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Flash Sales
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Chương Trình Tiếp Thị Liên Kết
                                                Shopee
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link"
                                            >
                                                Liên Hệ Với Truyền Thông
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col l-2-4 m-4 c-12 pay-and-ship">
                                    <div>
                                        <h3 className="footer__heading">
                                            THANH TOÁN
                                        </h3>
                                        <div className="footer-sale-ship">
                                            <img
                                                alt=""
                                                src="./assets/img/pay/1.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/pay/2.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/pay/3.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/pay/4.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/pay/5.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="footer__heading">
                                            ĐƠN VỊ VẬN CHUYỂN
                                        </h3>
                                        <div className="footer-sale-ship">
                                            <img
                                                alt=""
                                                src="./assets/img/ship/1.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/2.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/3.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/4.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/5.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/6.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/7.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/8.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                            <img
                                                alt=""
                                                src="./assets/img/ship/9.PNG"
                                                className="footer-item-sale-ship"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4 m-4 c-6">
                                    <h3 className="footer__heading">
                                        THEO DÕI CHÚNG TÔI
                                    </h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link footer-item-link-fb"
                                            >
                                                <i className="footer-item-icon fab fa-facebook-square" />
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link footer-item-link-is"
                                            >
                                                <i className="footer-item-icon fab fa-instagram-square" />
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://example.com"
                                                className="footer-item-link footer-item-link-li"
                                            >
                                                <i className="footer-item-icon fab fa-linkedin" />
                                                LinkedIn
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col l-2-4 m-8 c-6">
                                    <h3 className="footer__heading">
                                        TẢI ỨNG DỤNG SHOPEE
                                    </h3>
                                    <div className="footer-download">
                                        <a
                                            href="https://example.com"
                                            className="footer-download-link"
                                        >
                                            <img
                                                alt=""
                                                src="./assets/img/qr/qr-code.png"
                                                className="footer-download-qr"
                                            />
                                        </a>
                                        <div className="footer-download-app">
                                            <a
                                                href="https://example.com"
                                                className="footer-download-link"
                                            >
                                                <img
                                                    alt=""
                                                    src="./assets/img/qr/gg-play.png"
                                                    className="footer-download-app-img"
                                                />
                                            </a>
                                            <a
                                                href="https://example.com"
                                                className="footer-download-link"
                                            >
                                                <img
                                                    alt=""
                                                    src="./assets/img/qr/app-store.png"
                                                    className="footer-download-app-img"
                                                />
                                            </a>
                                            <a
                                                href="https://example.com"
                                                className="footer-download-link"
                                            >
                                                <img
                                                    alt=""
                                                    src="./assets/img/qr/app-gallery.png"
                                                    className="footer-download-app-img"
                                                />
                                            </a>
                                            <a
                                                href="https://example.com"
                                                className="footer-download-link"
                                            >
                                                <img
                                                    alt=""
                                                    src="./assets/img/qr/ltp-img.png"
                                                    className="footer-download-app-img"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* copyright */}
                            <div className="row">
                                <div className="grid">
                                    <p className="copyright-title">
                                        © 2021 Shopee copyright - Công ty TNHH
                                        CRF - Product by LTP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* other footer */}
                    <div className="other-footer">
                        <div className="grid wide">
                            <div className="row other-footer-heading">
                                <div className="col l-2">
                                    <a
                                        href="https://example.com"
                                        className="other-footer-link"
                                    >
                                        CHÍNH SÁCH BẢO MẬT
                                    </a>
                                </div>
                                <div className="col l-2">
                                    <a
                                        href="https://example.com"
                                        className="other-footer-link"
                                    >
                                        QUY CHẾ HOẠT ĐỘNG
                                    </a>
                                </div>
                                <div className="col l-2">
                                    <a
                                        href="https://example.com"
                                        className="other-footer-link"
                                    >
                                        CHÍNH SÁCH VẬN CHUYỂN
                                    </a>
                                </div>
                                <div className="col l-2">
                                    <a
                                        href="https://example.com"
                                        className="other-footer-link"
                                    >
                                        TRẢ HÀNG VÀ HOÀN TIỀN
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="grid other-footer-info">
                                    <p className="other-footer-title">
                                        Thông tin về Shoppee
                                    </p>
                                    <p className="other-footer-more">
                                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital
                                        Place, số 29 đường Liễu Giai, Phường
                                        Ngọc Khánh, Quận Ba Đình, Thành phố Hà
                                        Nội, Việt Nam. Tổng đài hỗ trợ: 19001221
                                        - Email: cskh@hotro.shopee.vn
                                    </p>
                                    <p className="other-footer-more">
                                        Chịu Trách Nhiệm Quản Lý Nội Dung:
                                        Nguyễn Đức Trí - Điện thoại liên hệ: 024
                                        73081221 (ext 4678)
                                    </p>
                                    <p className="other-footer-more">
                                        Mã số doanh nghiệp: 0106773786 do Sở Kế
                                        hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu
                                        ngày 10/02/2015
                                    </p>
                                    <p className="other-footer-more">
                                        Ngày sản xuất 2015 - Bản quyền gốc thuộc
                                        về Công ty TNHH Shopee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* modal */}
            <div className="modal">
                <div className="modal__body">
                    {/* authen signin*/}
                    <div className="auth-form">
                        <div className="auth-form__container">
                            <div className="auth-form__header">
                                <h3 className="auth-form__heading">Đăng Ký</h3>
                                <div className="auth-form__switch-btn">
                                    Đăng nhập
                                </div>
                            </div>
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="auth-form__input"
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className="auth-form__input"
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <input
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        className="auth-form__input"
                                    />
                                </div>
                            </div>
                            <div className="auth-form__policy">
                                <p className="auth-form__policy-text">
                                    Bằng việc đăng ký, bạn đồng ý với Shoppee về
                                    <a
                                        href="https://example.com"
                                        className="auth-form__text-link"
                                    >
                                        Điều khoản dịch vụ
                                    </a>{" "}
                                    &amp;
                                    <a
                                        href="https://example.com"
                                        className="auth-form__text-link"
                                    >
                                        Chính sách bảo mật
                                    </a>
                                </p>
                            </div>
                            <div className="auth-form__control">
                                <button className="btn auth-form__back">
                                    TRỞ LẠI
                                </button>
                                <button className="btn btn--primary">
                                    ĐĂNG KÝ
                                </button>
                            </div>
                        </div>
                        <div className="auth-form__signin">
                            <a
                                href="https://example.com"
                                className="btn btn-signin auth-form__signin-fb"
                            >
                                <i className="auth-form__signin-icon fab fa-facebook-square" />
                                <p className="auth-form__signin-text">
                                    Kết nối với Facebook
                                </p>
                            </a>
                            <a
                                href="https://example.com"
                                className="btn btn-signin auth-form__signin-gg"
                            >
                                <i className="auth-form__signin-icon fab fa-google" />
                                <p className="auth-form__signin-text">
                                    Kết nối với Google
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* authen login*/}
                    <div className="auth-form">
                        <div className="auth-form__container">
                            <div className="auth-form__header">
                                <h3 className="auth-form__heading">
                                    Đăng Nhập
                                </h3>
                                <div className="auth-form__switch-btn">
                                    Đăng ký
                                </div>
                            </div>
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="auth-form__input"
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className="auth-form__input"
                                    />
                                </div>
                            </div>
                            <div className="auth-form__help">
                                <a
                                    href="https://example.com"
                                    className="auth-form__help-link auth-form__help-forgot"
                                >
                                    Quên Mật Khẩu
                                </a>
                                <div className="auth-form__help--separate" />
                                <a
                                    href="https://example.com"
                                    className="auth-form__help-link"
                                >
                                    Cần trợ giúp?
                                </a>
                            </div>
                            <div className="auth-form__control">
                                <button className="btn auth-form__back">
                                    TRỞ LẠI
                                </button>
                                <button className="btn btn--primary">
                                    ĐĂNG NHẬP
                                </button>
                            </div>
                        </div>
                        <div className="auth-form__signin">
                            <a
                                href="https://example.com"
                                className="btn btn-signin auth-form__signin-sms"
                            >
                                <i className="auth-form__signin-icon fas fa-sms" />
                                <p className="auth-form__signin-text">SMS</p>
                            </a>
                            <a
                                href="https://example.com"
                                className="btn btn-signin auth-form__signin-fb"
                            >
                                <i className="auth-form__signin-icon fab fa-facebook-square" />
                                <p className="auth-form__signin-text">
                                    Facebook
                                </p>
                            </a>
                            <a
                                href="https://example.com"
                                className="btn btn-signin auth-form__signin-gg"
                            >
                                <i className="auth-form__signin-icon fab fa-google" />
                                <p className="auth-form__signin-text">Google</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
