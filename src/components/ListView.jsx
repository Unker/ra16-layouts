import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListView;
