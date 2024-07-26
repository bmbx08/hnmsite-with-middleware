import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {

    const navigate=useNavigate();

    // const goToDetailPage=()=>{
    //     if(authenticate === true){
    //         navigate(`/product/${item?.id}`);
    //     } else if(authenticate===false){
    //         navigate('/login');
    //     }
    // }

    const showDetail=()=>{
      navigate(`/product/${item.id}`)
    }

  return (
    <div className="product-card" onClick={showDetail}>
      <div className='img-container'>
        <img className='card-image' width="300px" src={item?.img}/>
      </div>
      {item?.choice==true?(<div className='conscious-card-text'>Conscious choice</div>):(<div className='no-conscious'></div>)}
      <div className='card-title'>{item?.title}</div>
      <div className='card-price'>₩{item?.price}</div>
      <div className='card-new'>{item?.new==true?"New!":""}</div>
    </div>
  )
}

export default ProductCard
