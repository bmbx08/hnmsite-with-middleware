import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useParams } from 'react-router'

const ProductDetail = () => {

  let {id}=useParams();
  const[product,setProduct]=useState(null);

  const getProductDetail=async()=>{
    let url= `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products/${id}`;
    let response= await fetch(url);
    let data= await response.json();
    console.log(data);
    setProduct(data);
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
