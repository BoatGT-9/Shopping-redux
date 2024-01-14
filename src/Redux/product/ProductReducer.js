import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionType";

import { initialState } from "./initialState";

const nextId = (items) => {
    return items.reduce((id, item) => Math.max(id,item.id), -1) + 1;
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextId(state),
                    ...action.payload,
                    price: parseFloat(action.payload.price),
                    Quantity: parseInt(action.payload.Quantity)
                }
            ];
        case ADD_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        Quantity: product.Quantity + action.payload.Quantity
                    }
                } else {
                    return product;
                }
            })
        case REMOVE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        Quantity: product.Quantity - 1
                    }
                } else {
                    return product
                }
            })
        default:
            return state;
    }
}
export default productReducer;