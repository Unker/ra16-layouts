
import { Component } from "react";
import products from '../assets/products.json'

// import Toolbar from './Toolbar';
// import ProjectList from './ProjectList';

class IconSwitch extends Component {
  render() {
    return (
      <div className="icon-switch">
        <i className="material-icons" onClick={this.props.onSwitch}>
          {this.props.icon}
        </i>
      </div>
    );
  }
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
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Color: {product.color}</p>
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
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    );
  }
}

export default Store;
