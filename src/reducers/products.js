import { combineReducers } from "redux";

const initialState = {
    products: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8"],
    product: "THis is the product",
    productShow: "THis is product displayed",
    cartInfo: { products: ["product2", "product3"], total: 2 }
};

function addToCart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, action.product);
    case "PRODUCT_TO_CART":
      return Object.assign({}, ...state, action.product);
    default:
      return state;
  }
}

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      return { products: state.products, product: state.product, productShow: state.productShow, cartInfo: { products: [...state.cartInfo.products.filter(data => data != action.product)], total: state.cartInfo.total - 1 } };
    case "PRODUCT_TO_CART":
      return { products: state.products, product: state.product, productShow: state.productShow, cartInfo: { products: [...state.cartInfo.products, action.product], total: state.cartInfo.total + 1 } };
    default:
      return state;
  }
}

export default combineReducers({
  todoApp
});
