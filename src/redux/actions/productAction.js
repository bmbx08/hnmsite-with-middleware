import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery,categoryQuery){
    return async(dispatch,getState)=>{
        let url;
        if(searchQuery!==""){
            console.log("search");
            url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?q=${searchQuery}`; //q=~를 붙이면 자동으로 검색하는 것은 json-server에서 제공하는 기능
          } else if(categoryQuery!==""){
            console.log("category");
            url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?category_like=${categoryQuery}`;
          } else{
            url = `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products?category_like=${categoryQuery}`;
          }
          let response = await fetch(url);
          let data = await response.json();
          // dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
          dispatch(productActions.getAllProducts({data})); //매개변수 data는 자동으로 payload 값으로 전달된다.
          console.log(data);
    }
}

function getProductDetails(id){
  return async(dispatch)=>{
    let url= `https://my-json-server.typicode.com/bmbx088/hnm-with-middleware/products/${id}`;
    let response= await fetch(url);
    let data= await response.json();
    console.log("detail",data);
    // dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}});
    dispatch(productActions.getSingleProduct({data}));
  }
}

export const productAction={getProducts,getProductDetails}