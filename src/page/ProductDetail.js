import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useParams } from 'react-router'
import { productAction } from '../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/reducers/productSlice';

const ProductDetail = () => {

  const dispatch = useDispatch();
  const product=useSelector((state)=>state.product.selectedItem);
  let {id}=useParams();

  const getProductDetail=async()=>{
    dispatch(fetchProductDetails(id));
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col className='detail-section'>
          <div className='product-title'>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className='conscious-text'>{product?.choice==true?"Conscious Choice":""}</div>
          <DropdownButton id="dropdown-basic-button" variant='outline-dark' title="사이즈 선택">
            {product?.size.map((size)=>(
              <Dropdown.Item href="#/action-1">{size}</Dropdown.Item>
            ))} 
            {/* .map에서 소괄호()를 쓰던가(암시적 반환), 중괄호{}와 return을 사용해야됨(명시적 변환) */}
          </DropdownButton>
          <Button variant="dark" className='detail-button-style'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
