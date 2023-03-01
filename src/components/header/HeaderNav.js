import React from "react";

const HeaderNav = () => {
  return (
    <nav class="navbar navbar-default navbar-main navbar-main-slide" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
						<a class="logo" href="index.html"><img src="images/logo.png" alt="Flatize"/></a> </div>
					<ul class="nav navbar-nav navbar-act pull-right">
						<li class="login"><a href="javascript:void(0);"><i class="fa fa-user"></i></a></li>
						<li class="search"><a href="javascript:void(0);" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="fa fa-search"></i></a></li>
					</ul>
					<div class="navbar-collapse collapse">
						<ul class="nav navbar-nav pull-right">
							<li class="dropdown active"><a href="index-2.html#" class="dropdown-toggle" data-toggle="dropdown">Home</a>
								<ul class="dropdown-menu">
									<li class="active"><a href="index-2.html">Home Version 2</a></li>
									<li><a href="index-3.html">Home Version 3</a></li>
									<li><a href="index-4.html">Home Version 4</a></li>
								</ul>
							</li>
							<li class="dropdown megamenu"><a href="index-2.html#" class="dropdown-toggle" data-toggle="dropdown">Shop</a>
								<div class="dropdown-menu">
									<div class="mega-menu-content">
										<div class="row">
											<div class="col-md-4 hidden-sm hidden-xs menu-column">
												<h3>Trends</h3>
												<ul class="list-unstyled sub-menu list-thumbs-pro">
													<li class="product">
														<div class="product-thumb-info">
															<div class="product-thumb-info-image">
																<a href="shop-product-detail1.html"><img alt="" width="60" src="images/content/products/product-1.jpg"/></a>
															</div>
															
															<div class="product-thumb-info-content">
																<h4><a href="shop-product-detail2.html">Denim shirt</a></h4>
																<span class="item-cat"><small><a href="index-2.html#">Jackets</a></small></span>
																<span class="price">29.99 USD</span>
															</div>
														</div>
													</li>
													<li class="product">
														<div class="product-thumb-info">
															<div class="product-thumb-info-image">
																<a href="shop-product-detail1.html"><img alt="" width="60" src="images/content/products/product-2.jpg"/></a>
															</div>
															
															<div class="product-thumb-info-content">
																<h4><a href="shop-product-detail2.html">Poplin shirt with fine pleated bands</a></h4>
																<span class="item-cat"><small><a href="index-2.html#">Jackets</a></small></span>
																<span class="price">29.99 USD</span>
															</div>
														</div>
													</li>
													<li class="product">
														<div class="product-thumb-info">
															<div class="product-thumb-info-image">
																<a href="shop-product-detail1.html"><img alt="" width="60" src="images/content/products/product-3.jpg"/></a>
															</div>
															
															<div class="product-thumb-info-content">
																<h4><a href="shop-product-detail2.html">Contrasting shirt</a></h4>
																<span class="item-cat"><small><a href="index-2.html#">Jackets</a></small></span>
																<span class="price">29.99 USD</span>
															</div>
														</div>
													</li>
												</ul>
											</div>
											<div class="col-md-2 menu-column">
												<h3>Man</h3>
												<ul class="list-unstyled sub-menu">
													<li><a href="index-2.html#">Jackets</a></li>
													<li><a href="index-2.html#">Blazers</a></li>
													<li><a href="index-2.html#">Suits</a></li>
													<li><a href="index-2.html#">Trousers</a></li>
													<li><a href="index-2.html#">Jeans</a></li>
													<li><a href="index-2.html#">Shirts</a></li>
													<li><a href="index-2.html#">Sweatshirts &amp; Hoodies</a></li>
													<li><a href="index-2.html#">Swimwear</a></li>
													<li><a href="index-2.html#">Accessories</a></li>
												</ul>
											</div>
											
											<div class="col-md-2 menu-column">
												<h3>Woman</h3>
												<ul class="list-unstyled sub-menu">
													<li><a href="index-2.html#">Coats</a></li>
													<li><a href="index-2.html#">Outerwear</a></li>
													<li><a href="index-2.html#">Dresses</a></li>
													<li><a href="index-2.html#">Tops</a></li>
													<li><a href="index-2.html#">Trousers</a></li>
													<li><a href="index-2.html#">Shirts</a></li>
													<li><a href="index-2.html#">Jeans</a></li>
													<li><a href="index-2.html#">T-shirts</a></li>
													<li><a href="index-2.html#">Shoes</a></li>
													<li><a href="index-2.html#">Handbags</a></li>
													<li><a href="index-2.html#">Stock clearance</a></li>
												</ul>
											</div>
											<div class="col-md-4 hidden-sm hidden-xs menu-column">
												<h3>Explore new collection</h3>
												<ul class="list-unstyled sub-menu list-md-pro">
													<li class="product">
														<div class="product-thumb-info">
															<div class="product-thumb-info-image">
																<a href="shop-product-detail1.html"><img class="img-responsive" width="330" alt="" src="images/content/products/ad-1.png"/></a>
															</div>
															
															<div class="product-thumb-info-content">
																<h4><a href="shop-product-detail2.html">Men’s Fashion and Style</a></h4>
																<p>Whatever you’re looking for, be it the latest fashion trends, cool outfit ideas or new ways to wear your favourite pieces, we’ve got all the style inspiration you need.</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="dropdown"><a href="index-2.html#" class="dropdown-toggle" data-toggle="dropdown">Pages</a>
								<ul class="dropdown-menu">
									<li class="dropdown-submenu">
										<a href="index-2.html#">Shop</a>
										<ul class="dropdown-menu">
											<li><a href="shop-full-width.html">Shop - Full Width</a></li>
											<li><a href="shop-sidebar.html">Shop - Sidebar</a></li>
											<li><a href="shop-list-sidebar.html">Shop List - Sidebar</a></li>
											<li><a href="shop-product-detail1.html">Shop - Product Detail 1</a></li>
											<li><a href="shop-product-detail2.html">Shop - Product Detail 2</a></li>
											<li><a href="shop-cart-full.html">Shop - Cart Full</a></li>
											<li><a href="shop-cart-sidebar.html">Shop - Cart Sidebar</a></li>
											<li><a href="shop-checkout.html">Shop - Checkout</a></li>
										</ul>
									</li>
									<li><a href="index-white.html">Mega Menu White</a></li>
									<li><a href="page-404.html">404 Error Page</a></li>									
								</ul>
							</li>
							<li><a href="shortcodes.html">Shortcodes</a></li>
							<li class="dropdown"><a href="index-2.html#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
								<ul class="dropdown-menu">
									<li><a href="blog-sidebar.html">Blog Sidebar</a></li>
									<li><a href="blog-mini-sidebar.html">Blog Mini Sidebar</a></li>
									<li><a href="blog-masonry.html">Blog Masonry</a></li>
									<li><a href="blog-single.html">Blog Single</a></li>
								</ul>
							</li>
							<li class="dropdown"><a href="index-2.html#" class="dropdown-toggle" data-toggle="dropdown">Contact</a>
								<ul class="dropdown-menu">
									<li><a href="page-contact1.html">Contact Version 1</a></li>
									<li><a href="page-contact2.html">Contact Version 2</a></li>
								</ul>
							</li>
						</ul>
					</div>
          {/* <!--/.nav-collapse -->  */}
				</div>
        {/* <!--/.container-fluid -->  */}
			</nav>
  );
};

export default HeaderNav;
