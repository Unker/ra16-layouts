
import { Component } from "react";
import products from '../assets/products.json'

// import Toolbar from './Toolbar';
// import ProjectList from './ProjectList';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">
      <span className="material-icons" onClick={() => onSwitch()}>
        {icon}
      </span>
    </div>
  );
}

class CardsView extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="cards-view">
        {cards.map((product, index) => (
          <ShopCard key={index} product={product} />
        ))}
      </div>
    );
  }
}

class ListView extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="list-view">
        {items.map((product, index) => (
          <ShopItem key={index} product={product} />
        ))}
      </div>
    );
  }
}

class ShopCard extends Component {
  render() {
    const { product } = this.props;
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
}

class ShopItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="shop-item">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Color: {product.color}</p>
      </div>
    );
  }
}

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'cards', // Изначально установим вид на карточки
    };
    this.products = products;
  }

  handleSwitchView = () => {
    this.setState((prevState) => ({
      viewType: prevState.viewType === 'cards' ? 'list' : 'cards',
    }));
  }

  render() {
    const { viewType } = this.state;
    const icon = viewType === 'cards' ? 'view_list' : 'view_module';

    return (
      <div className="store">
        <IconSwitch icon={icon} onSwitch={this.handleSwitchView} />
        {viewType === 'cards' ? (
          <CardsView cards={this.products} />
        ) : (
          <ListView items={this.products} />
        )}
      </div>
    );
  }
}

export default Store;
