import PropTypes from 'prop-types';

const ShopCard = ({ product }) => {
  return (
    <div className="shop-card">
      <div className="shop-card-image">
        <img src={product.img} alt={product.name} />
        <h2 className="shop-card-title">{product.name}</h2>
        <p className="shop-card-color">{product.color}</p>
        <p className="shop-card-price">${product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShopCard;
