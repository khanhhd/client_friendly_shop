import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProductList extends Component {
  renderList(){
      return this.props.products.map((prod) => {
        return(
          <li key={prod.name} className="list-group-item" onClick={ () => this.props.selectProduct(prod)}>
            {prod.name}
          </li>
        );
      });
  }

  render(){
    return(
      <ul className="list-group cols-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProduct: selectProduct}, dispatch);
}

function mapStateToProps(state) {
 return {products: state.products}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
