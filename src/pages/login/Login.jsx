import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from 'styled-components';
import { login } from "../../redux/apiCalls";

const Container = styled.div`
height: 100vh;
width: 90vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    login(dispatch, {email,password});
  }

  return (
    <Container>
        <input
        style={{ padding: 10, marginBottom:20 }}
        type="text"
        placeholder="admin@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="1234567"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </Container>
  )
}

export default Login
