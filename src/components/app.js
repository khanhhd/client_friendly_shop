import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import ProductDetail from '../containers/product-detail';
import ProductSearchBar from '../containers/product-search-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <ProductSearchBar />
        <ProductList />
        <ProductDetail />
      </div>
    );
  }
}
