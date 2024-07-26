import React, { useState } from "react";
import {Container, Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({setAuthenticate}) => {

  const [id,setId]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const loginUser =(event)=>{ 
    event.preventDefault();{/*Form은 submit시 자동 새로고침이 되기 때문에 이 명령어로 방지*/}
    console.log("login user function issue");
    dispatch(authenticateAction.login(id,password));
    // setAuthenticate(true);
    navigate("/");
  }

  return (
    <Container>
      <Form onSubmit={(event)=>loginUser(event)}> {/*Form에서는 onSubmit을 onclick 대신 사용*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(event)=>setId(event.target.value)}>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 유지" />
        </Form.Group>
        <Button variant="danger" type="submit">{/*type="submit"인 버튼이 있는 form에서는 onClick을 쓰면 안된다.*/}
          로그인
        </Button>
      </Form>  {/* Form은 정보를 입력 받고 백엔드로 보내고 싶을 때 주로 쓴다*/}
    </Container>
  );
};

export default Login;
