import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider} from '../firebase'


function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => 
        alert(error.message));
    }
    return (
        <LoginConatiner>

            <LoginInnerContainer>
                <img
                src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Mark-Logo.wine.svg"
                alt=""
                />
                <h1>Login In</h1>
                <p>
                    Slack clone and its components habitual practice.  
                </p>
                <Button type='submit' onClick={signIn}
                >Sign in with Google</Button>

            </LoginInnerContainer>
        </LoginConatiner>
    )
}

export default Login


const LoginConatiner = styled.div`
    background-color: var(--slack-color);
    height: 100vh;
    display: grid;
    place-items:center;

`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;