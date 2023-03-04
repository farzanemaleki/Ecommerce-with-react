import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ data }) => {
    return (
      <div className="col-xs-6 col-sm-3 animate__animated animate__fadeInUp ">
        <div className="product">
          <div className="product-thumb-info">
            <div className="product-thumb-info-image">
              <span className="product-thumb-info-act">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target=".quickview-wrapper"
                  className="view-product"
                >
                  <span>
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                </a>
                <a href="shop-cart-full.html" className="add-to-cart-product">
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                </a>
              </span>
              <img alt="" className="img-responsive" src={data.img} />
            </div>
            <div className="product-thumb-info-content">
              <span className="price pull-right">{data.price}</span>
              <h4>
                <a href="shop-product-detail2.html">{data.title}</a>
              </h4>
              <span className="item-cat">
                <small>
                  <a href="index-4.html#">{data.category}</a>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default ProductCard;
