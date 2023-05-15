import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        setProductsInRedux: (state, action) => {
            state.products = action.payload;
        }
    }
})


export const { setProductsInRedux } = productSlice.actions;

export default productSlice.reducer;