const ProductGroupsButton = ({ name, isActive, onClickHandler }) => {
    return (
      <li key={name} className={isActive ? "active" : ""}>
        <button onClick={() => onClickHandler(name)}>{name}</button>
      </li>
    );
  };
  export default ProductGroupsButton;