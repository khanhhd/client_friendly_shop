import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {
  render() {
    if (!this.props.product) {
      return(<div>Plz select pro</div>)
    }

    return(
      <div>
        {this.props.product.name}
      </div>
    );
  };
}

function mapStateToProps(state) {
 return {product: state.activeProduct}
}

export default connect(mapStateToProps)(ProductDetail);
