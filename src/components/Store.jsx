
import { Component } from "react";
import products from '../assets/products.json'

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

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
