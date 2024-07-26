import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Routes, useNavigate } from 'react-router';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 먼저 나온다.
//5. 로그인이 되어있을 때는 상품 디테일 페이지 보기 가능
//6. 로그아웃 버튼을 클릭하면 로그아웃 됨.
//7. 상품 디테일 페이지에서 로그아웃하면 상품디테일 페이지 볼 수 없음. 다시 로그인 페이지로 리다이렉트.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색 할 수 있다.

//json server실행 명령어: npx json-server --watch db.json --port 5000
function App() {
  const[authenticate,setAuthenticate]=useState(false); //true면 로그인이 됨 false면 로그인이 안됨

  useEffect(()=>{
    console.log("authenticate",authenticate);
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;

//꾸미기 아이디어

//1. hnm사이트 따라 만들기
//2. 새로운 제품들 사진,정보 담긴 db.json 기반으로 사이트 만들기(시간 좀 걸릴듯)
//3. 쉬운 기능들로 사이트 조금 꾸미기

//3-1. 메뉴들을 expensive,new 등으로 바꿔 누르면 해당 항목 아이템들 출력
//* 투명 배경인 사진들로 제품 사진 넣기,hover하면 사진만 커짐

//*신제품들, Conscious choice(Trending Now) 제품들 carousel에 넣기
//*장바구니 추가해보기(선택?)

//잘 모르는 것- db.json에 있는 price, new항목들 기반으로 검색하는 방법
//->let url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?q=${searchQuery}&price=39900`
//처럼 쿼리 뒤에 &이후 원하는 쿼리 추가