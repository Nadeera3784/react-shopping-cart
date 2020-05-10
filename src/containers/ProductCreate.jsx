import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { addProduct } from "../actions";
import ProductCreateComp from "../components/ProductCreate"

class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        console.log("props");
        console.log(props);
    }

    render() {
        return <ProductCreateComp addProduct={this.props.addProduct} />;
    }
}

function mapStateToProps(state, ownProps) {
    const { productCreate } = state.products.todoApp;
    return { productCreate };
}

export default connect(mapStateToProps, { addProduct })(ProductCreate);
