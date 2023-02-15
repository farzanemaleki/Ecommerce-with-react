import React from "react";

const HeaderNav = () => {
  return (
    <nav
      className="navbar navbar-default navbar-main navbar-main-drop"
      role="navigation"
    >
      <div className="container">
        <ul className="nav nav-pills nav-top navbar-right navbar-act">
          <li className="login">
            <a href="javascript:void(0);">
              <i className="fa fa-user"></i>
            </a>
          </li>
          <li className="search">
            <a
              href="javascript:void(0);"
              data-toggle="modal"
              data-target=".bs-example-modal-lg"
            >
              <i className="fa fa-search"></i>
            </a>
          </li>

          <li className="dropdown menu-shop">
            <a
              href="index-4.html#"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-shopping-cart"></i>{" "}
              <span className="shopping-bag">9</span>
            </a>
            <div className="dropdown-menu">
              <h3>Recently added item(s)</h3>
              <ul className="list-unstyled list-thumbs-pro">
                <li className="product">
                  <div className="product-thumb-info">
                    <a href="index-4.html#" className="product-remove">
                      <i className="fa fa-trash-o"></i>
                    </a>
                    <div className="product-thumb-info-image">
                      <a href="shop-product-detail1.html">
                        <img
                          alt=""
                          width="60"
                          src="images/content/products/product-1.jpg"
                        />
                      </a>
                    </div>

                    <div className="product-thumb-info-content">
                      <h4>
                        <a href="shop-product-detail2.html">Denim shirt</a>
                      </h4>
                      <span className="item-cat">
                        <small>
                          <a href="index-4.html#">Jackets</a>
                        </small>
                      </span>
                      <span className="price">29.99 USD</span>
                    </div>
                  </div>
                </li>
                <li className="product">
                  <div className="product-thumb-info">
                    <a href="index-4.html#" className="product-remove">
                      <i className="fa fa-trash-o"></i>
                    </a>
                    <div className="product-thumb-info-image">
                      <a href="shop-product-detail1.html">
                        <img
                          alt=""
                          width="60"
                          src="images/content/products/product-2.jpg"
                        />
                      </a>
                    </div>

                    <div className="product-thumb-info-content">
                      <h4>
                        <a href="shop-product-detail2.html">
                          Poplin shirt with fine pleated bands
                        </a>
                      </h4>
                      <span className="item-cat">
                        <small>
                          <a href="index-4.html#">Jackets</a>
                        </small>
                      </span>
                      <span className="price">29.99 USD</span>
                    </div>
                  </div>
                </li>
                <li className="product">
                  <div className="product-thumb-info">
                    <a href="index-4.html#" className="product-remove">
                      <i className="fa fa-trash-o"></i>
                    </a>
                    <div className="product-thumb-info-image">
                      <a href="shop-product-detail1.html">
                        <img
                          alt=""
                          width="60"
                          src="images/content/products/product-3.jpg"
                        />
                      </a>
                    </div>

                    <div className="product-thumb-info-content">
                      <h4>
                        <a href="shop-product-detail2.html">
                          Contrasting shirt
                        </a>
                      </h4>
                      <span className="item-cat">
                        <small>
                          <a href="index-4.html#">Jackets</a>
                        </small>
                      </span>
                      <span className="price">29.99 USD</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-inline cart-subtotals text-right">
                <li className="cart-subtotal">
                  <strong>Subtotal</strong>
                </li>
                <li className="price">
                  <span className="amount">
                    <strong>$431</strong>
                  </span>
                </li>
              </ul>
              <div className="cart-buttons text-right">
                <button className="btn btn-white">View Cart</button>
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </li>
        </ul>

        <div className="navbar-collapse collapse navbar-left width">
          <ul className="nav navbar-nav pull-right">
            <li className="dropdown active">
              <a
                href="index-4.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Home
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="index-2.html">Home Version 2</a>
                </li>
                <li>
                  <a href="index-3.html">Home Version 3</a>
                </li>
                <li className="active">
                  <a href="index-4.html">Home Version 4</a>
                </li>
              </ul>
            </li>
            <li className="dropdown megamenu">
              <a
                href="index-4.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Shop
              </a>
              <div className="dropdown-menu">
                <div className="mega-menu-content">
                  <div className="row">
                    <div className="col-md-4 hidden menu-column">
                      <h3>Trends</h3>
                      <ul className="list-unstyled sub-menu list-thumbs-pro">
                        <li className="product">
                          <div className="product-thumb-info">
                            <div className="product-thumb-info-image">
                              <a href="shop-product-detail1.html">
                                <img
                                  alt=""
                                  width="60"
                                  src="images/content/products/product-1.jpg"
                                />
                              </a>
                            </div>

                            <div className="product-thumb-info-content">
                              <h4>
                                <a href="shop-product-detail2.html">
                                  Denim shirt
                                </a>
                              </h4>
                              <span className="item-cat">
                                <small>
                                  <a href="index-4.html#">Jackets</a>
                                </small>
                              </span>
                              <span className="price">29.99 USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="product">
                          <div className="product-thumb-info">
                            <div className="product-thumb-info-image">
                              <a href="shop-product-detail1.html">
                                <img
                                  alt=""
                                  width="60"
                                  src="images/content/products/product-2.jpg"
                                />
                              </a>
                            </div>

                            <div className="product-thumb-info-content">
                              <h4>
                                <a href="shop-product-detail2.html">
                                  Poplin shirt with fine pleated bands
                                </a>
                              </h4>
                              <span className="item-cat">
                                <small>
                                  <a href="index-4.html#">Jackets</a>
                                </small>
                              </span>
                              <span className="price">29.99 USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="product">
                          <div className="product-thumb-info">
                            <div className="product-thumb-info-image">
                              <a href="shop-product-detail1.html">
                                <img
                                  alt=""
                                  width="60"
                                  src="images/content/products/product-3.jpg"
                                />
                              </a>
                            </div>

                            <div className="product-thumb-info-content">
                              <h4>
                                <a href="shop-product-detail2.html">
                                  Contrasting shirt
                                </a>
                              </h4>
                              <span className="item-cat">
                                <small>
                                  <a href="index-4.html#">Jackets</a>
                                </small>
                              </span>
                              <span className="price">29.99 USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 menu-column">
                      <h3>Man</h3>
                      <ul className="list-unstyled sub-menu">
                        <li>
                          <a href="index-4.html#">Jackets</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Blazers</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Suits</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Trousers</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Jeans</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Shirts</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Sweatshirts &amp; Hoodies</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Swimwear</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Accessories</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-2 menu-column">
                      <h3>Woman</h3>
                      <ul className="list-unstyled sub-menu">
                        <li>
                          <a href="index-4.html#">Coats</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Outerwear</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Dresses</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Tops</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Trousers</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Shirts</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Jeans</a>
                        </li>
                        <li>
                          <a href="index-4.html#">T-shirts</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Shoes</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Handbags</a>
                        </li>
                        <li>
                          <a href="index-4.html#">Stock clearance</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4 hidden menu-column">
                      <h3>Explore new collection</h3>
                      <ul className="list-unstyled sub-menu list-md-pro">
                        <li className="product">
                          <div className="product-thumb-info">
                            <div className="product-thumb-info-image">
                              <a href="shop-product-detail1.html">
                                <img
                                  className="img-responsive"
                                  width="330"
                                  alt=""
                                  src="images/content/products/ad-1.png"
                                />
                              </a>
                            </div>

                            <div className="product-thumb-info-content">
                              <h4>
                                <a href="shop-product-detail2.html">
                                  Men’s Fashion and Style
                                </a>
                              </h4>
                              <p>
                                Whatever you’re looking for, be it the latest
                                fashion trends, cool outfit ideas or new ways to
                                wear your favourite pieces, we’ve got all the
                                style inspiration you need.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a
                href="index-4.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="index-4.html#">Shop</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="shop-full-width.html">Shop - Full Width</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">Shop - Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-list-sidebar.html">Shop List - Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-product-detail1.html">
                        Shop - Product Detail 1
                      </a>
                    </li>
                    <li>
                      <a href="shop-product-detail2.html">
                        Shop - Product Detail 2
                      </a>
                    </li>
                    <li>
                      <a href="shop-cart-full.html">Shop - Cart Full</a>
                    </li>
                    <li>
                      <a href="shop-cart-sidebar.html">Shop - Cart Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-checkout.html">Shop - Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="index-white.html">Mega Menu White</a>
                </li>
                <li>
                  <a href="page-404.html">404 Error Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="shortcodes.html">Shortcodes</a>
            </li>
            <li className="dropdown">
              <a
                href="index-4.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="blog-sidebar.html">Blog Sidebar</a>
                </li>
                <li>
                  <a href="blog-mini-sidebar.html">Blog Mini Sidebar</a>
                </li>
                <li>
                  <a href="blog-masonry.html">Blog Masonry</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="index-4.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Contact
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="page-contact1.html">Contact Version 1</a>
                </li>
                <li>
                  <a href="page-contact2.html">Contact Version 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!--/.nav-collapse -->  */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="logo" href="index.html">
            <img src="images/logo.png" alt="Flatize" />
          </a>{" "}
        </div>
      </div>
      {/* <!--/.container-fluid -->  */}
    </nav>
  );
};

export default HeaderNav;
