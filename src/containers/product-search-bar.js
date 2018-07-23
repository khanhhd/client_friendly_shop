import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProductSearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render(){
    return(
      <div>
        <form>
          <input value={this.state.term}
            onChange={this.onInputChange.bind(this)}
          />
          <span>
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProduct: fetchProduct}, dispatch);
}

function mapStateToProps(state) {
  return {products: state.products}
}

export default connect(mapStateToProps, bindActionCreators)(ProductSearchBar);
