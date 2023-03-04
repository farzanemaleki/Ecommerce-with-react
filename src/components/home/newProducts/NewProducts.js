import React, { useEffect, useState, useCallback, useMemo } from "react";
import NewProductsData from "../../../data/NewProductsData";
import ProductGroupsButton from "./ProductButton";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const productGroups = useMemo(() => ["man", "woman", "accessories"], []);

  const [newProState, setNewProState] = useState([]);
  const [activeGroup, setActiveGroup] = useState("man");

  const allProducts = useMemo(() => {
    return NewProductsData.filter(({ group }) => productGroups.includes(group));
  }, [productGroups]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(({ group }) => group === activeGroup);
  }, [allProducts, activeGroup]);

  useEffect(() => {
    setNewProState(filteredProducts);
  }, [filteredProducts]);

  const onClickHandler = useCallback((selectedGroup) => {
    setActiveGroup(selectedGroup);
  }, []);

  return (
    <section className="product-tab">
      <div className="container">
        {/* <!-- Nav tabs --> */}
        <ul
          className="nav nav-tabs pro-tabs text-center animate__animated animate__fadeInUp"
          role="tablist"
        >
          {productGroups.map((selectedGroup) => (
            <ProductGroupsButton
              key={selectedGroup}
              name={selectedGroup}
              isActive={activeGroup === selectedGroup}
              onClickHandler={() => onClickHandler(selectedGroup)}
            />
          ))}
        </ul>

        <div className="tab-content">
          <div className="row">
            {newProState.map((data) => (
              <ProductCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
