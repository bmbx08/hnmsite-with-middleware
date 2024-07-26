function getProducts(searchQuery,categoryQuery){
    return async(dispatch,getState)=>{
        let url;
        if(searchQuery!==""){
            console.log("search");
            url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?q=${searchQuery}`; //q=~를 붙이면 자동으로 검색하는 것은 json-server에서 제공하는 기능
          } else if(categoryQuery!==""){
            console.log("category");
            url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?category_like=${categoryQuery}`;
          } else{
            url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?category_like=${categoryQuery}`;
          }
          let response = await fetch(url);
          let data = await response.json();
          dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
          console.log(data);
        //   setProductList(data);
    }
}

export const productAction={getProducts}