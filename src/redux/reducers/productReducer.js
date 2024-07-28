import { createSlice } from "@reduxjs/toolkit";

let initialState={
    productList:[],
    selectedItem: null,
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        getAllProducts(state,action){
            state.productList=action.payload.data //toolkit에서는 return과 ...state생략 가능
        },
        getSingleProduct(state,action){
            state.selectedItem=action.payload.data
        },
    }
})

console.log("what does slice return",productSlice); 

export const productActions = productSlice.actions;
export default productSlice.reducer;


// function productReducer(state=initialState,action){
//     let {type, payload}=action;
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state,productList:payload.data};
//         case "GET_PRODUCT_DETAIL":
//             return{...state,selectedItem:payload.data}
//         default:
//             return{...state};
//     }
// }

// export default productReducer;