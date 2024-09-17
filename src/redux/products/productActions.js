import { SET_PRODUCTS } from "./productTypes";

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});