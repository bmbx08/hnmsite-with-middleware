import React from "react";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = ({authenticate,setAuthenticate}) => {
  const menuList = [
    "Women",
    "Men",
    "Unisex",
    "Baby",
    "Kids",
    "H&M Home",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate=useNavigate();

  const goToLogin=()=>{
    navigate('/login');
  }

  const logoutUser=()=>{
    console.log("logout user");
    setAuthenticate(false);
  }

  const goToMain=()=>{
    navigate('/');
  }

  const getCategoryItems=(event)=>{
    let keyword=event.target.textContent;
    console.log(keyword.toLowerCase());
    navigate(`/?category=${keyword.toLowerCase()}`)
  }

  const search=(event)=>{
    if(event.key ==="Enter"){
      console.log("Enter key",event.key);
      //입력한 검색어를 읽어와서
      let keyword=event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="top-navbar">
        <div className="top-left">
          <div>고객 서비스</div>
          <div>뉴스레터</div>
          <div>매장 찾기</div>
          <div><FontAwesomeIcon size="2xl" icon={faEllipsis} /></div>
        </div>

        <Button variant="dark" className="d-sm-none" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <Offcanvas className="offcanvas-style" show={show} onHide={handleClose} responsive="sm">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                width={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s"
                onClick={goToMain}
                className="offcanvas-title"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="menu-list d-block d-sm-none">
              {menuList.map((menu) => (
                <li><a onClick={(event)=>getCategoryItems(event)}>{menu}</a></li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        
        <div className="top-right">
          {authenticate?(
            <div className="top-right-button" onClick={logoutUser}>
              <FontAwesomeIcon className="user-icon" size="lg" icon={faUser} />
              <div className="user-text">로그아웃</div>
            </div>
          ):(
            <div className="top-right-button" onClick={goToLogin}>
              <FontAwesomeIcon className="user-icon" size="lg" icon={faUser} />
              <div className="user-text">로그인</div>
            </div>
          )}
          <div className="top-right-button" onClick={goToLogin}>
            <FontAwesomeIcon className="user-icon" size="lg" icon={faHeart} />
            <div className="user-text">즐겨찾기</div>
          </div>
          <div className="top-right-button" onClick={goToLogin}>
            <FontAwesomeIcon className="user-icon" size="lg" icon={faBasketShopping} />
            <div className="user-text">장바구니</div>
          </div>
        </div>
        
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s"
          onClick={goToMain}
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list d-none d-sm-flex">
          {menuList.map((menu) => (
            <li><a onClick={(event)=>getCategoryItems(event)} href="#">{menu}</a></li>
          ))}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon className="search-icon" icon={faSearch}/>
          <input type="text" placeholder="제품 검색.." onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
