import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import {productAction} from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList=useSelector((state)=>state.product.productList); //combineReducer을 썼다면 어떤 reducer 안에서 state을 가져올건지 명시해야됨.->product.productList
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery=query.get('q')||query.get('category')||""; // 쿼리값이 있으면 q쿼리의 값을, 없으면 빈 스트링을 반환
    console.log("쿼리값",searchQuery);
    let categoryQuery=query.get('category')||"";
    console.log("항목쿼리",categoryQuery);
    dispatch(productAction.getProducts(searchQuery,categoryQuery)) //액션객체를 던지면 store로 요청을 하는거므로 다음과 같이 요청해야됨.
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col className="column" lg={3} md={6} sm={12}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
