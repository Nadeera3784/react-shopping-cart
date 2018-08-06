import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';  
import * as productAction from "../actions";
import HomeProducts from "../components/HomeProducts"
import { addToCart } from "../actions";
import ProductCard from "../components/ProductCard";

class Home extends React.Component {
    render() {
        return <HomeProducts>
            {this.props.products.map(product => (
              <ProductCard
                addToCart={() => this.props.addToCart(product)}
                product={product}
              />
            ))}
          </HomeProducts>;
    }
}

function mapStateToProps(state, ownProps) {
    console.log("MMMMMMMMMMMMMMMMMMMMMMMMMM");
    console.log(state.products.todoApp.products);
    if (state) {
        return { products: state.products.todoApp.products };
    }
    return { products: [] }
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, { addToCart })(Home);