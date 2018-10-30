import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WalmartSearch from './searchApi';
import SearchBar from './components/search_bar';
import ItemList from './components/item_list';
import ItemDetail from './components/item_detail';


// create a new commponent. this
// component should produce some HTML
// const App = function() {
class App  extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      selectedItem: null
    };

    this.walmartSearch('backpack');
  }

  walmartSearch(term) {
    WalmartSearch({ term: term }, (items) => {
      // similar to this.setState({ videos: videos });
      // can be rewritten when the variable names are same
      if(items.length === 0){
        items[0] = {
          "itemId": null,
          "name": 'No Results Found',
          "shortDescription": 'No Results Found',
          "longDescription": 'No Results Found',
          "thumbnailImage": null,
          "productUrl": null
        }
      }
      this.setState({
        items: items,
        selectedItem: items[0]
      });
    });
  }

  // html down here is called JSX
  // it's transpiled by bable and webpack
  render() {
    const walmartSearch = _.debounce((term) => { this.walmartSearch(term) }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={walmartSearch} />
        <ItemDetail item={this.state.selectedItem}/>
        <ItemList
         onItemSelect={selectedItem => this.setState({selectedItem}) }
         items={this.state.items} />
      </div>
    );
  }
}

// take this component's html and put it on
// the page (in the DOM) : render
// wrapping it with JSX tags creates an instance
// of the class
ReactDOM.render(<App />, document.querySelector('#app'));
