import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};
//query 두개 받는 경우로 매개변수 수정해야됨
export const fetchProducts = createAsyncThunk( //ProductAll에서 호출하기 위해 export
  "product/fetchAll",
  async ({searchQuery,categoryQuery}, thunkAPI) => {
    try {
      let url;
      if (searchQuery !== "") {
        console.log("search");
        url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?q=${searchQuery}`; //q=~를 붙이면 자동으로 검색하는 것은 json-server에서 제공하는 기능
      } 
      else if (categoryQuery !== "") {
        console.log("category");
        url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?category_like=${categoryQuery}`;
      } else {
        url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?category_like=${categoryQuery}`;
      }
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getAllProducts(state,action){
    //     state.productList=action.payload.data //toolkit에서는 return과 ...state생략 가능
    // },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        //fetchProducts함수가 api를 요청중일 때
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        //요청이 성공했을 때
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  //dispatch처럼 redux로 호출한 함수가 아닌 외부 라이브러리로 호출한(createasyncthunk) 데이터들은 extrareducers에 적는다.
  //reducers:동기적으로 자신의 state를 바꾸는 경우(동기)
  //extraReducers: 외부 라이브러리부터 state가 바뀌는 경우(비동기 케이스)
});

console.log("what does slice return", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
