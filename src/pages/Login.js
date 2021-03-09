import React, { useState } from 'react';
import styled from 'styled-components';
import LOGO from '../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        if(username === 'user' && password === 'user') {
            history.push("/take-image");
        } else {
            setError(true);
        }
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src={LOGO} alt="cARscan" />
            </LogoWrapper>
            <LoginWrapper>
                <TextField error={error ? true: false} onChange={handleUsernameChange} id="username" label="Username" variant="outlined" fullWidth style={{marginBottom: '10px'}} />
                <TextField error={error ? true: false} type="password" onChange={handlePasswordChange} id="password" label="Password" variant="outlined" fullWidth style={{marginBottom: '10px'}} />
                <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
            </LoginWrapper>
                
        </Wrapper> 
    )
};

const Wrapper = styled.div`
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
`

const Logo = styled.img`
    width: 200px;
`

const LogoWrapper = styled.header`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
`

const LoginWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`

export default Login;