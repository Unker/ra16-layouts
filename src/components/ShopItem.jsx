import PropTypes from 'prop-types';

const ShopItem = ({ product }) => {
  return (
    <div className="list-view-item">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.color}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShopItem;
