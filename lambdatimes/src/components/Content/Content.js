import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData})
    this.setState({cards: cardData})
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };

  filterCards = () => {
    console.log("clicked")
    if (this.state.selected === "all") {
      return this.state.cards
    }
      return this.state.cards.filter((card) => card.tab === this.state.selected)
  };

  render() {
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} tabs={this.state.tabs} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
