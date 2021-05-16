import React from 'react';
import './index.css'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from "styled-components";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar"
import Chat from './Components/Chat';
import { auth } from './firebase';
import Spinner from 'react-spinkit';



function App() {
  const [user, loading]= useAuthState(auth);
  
  if (loading) {
    return (
      <AppLoading>
          <AppLoadingContents>
          <img
                src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Mark-Logo.wine.svg"
                alt=""
                />
                <Spinner
                  name ='ball-spin-fade-loader'
                  color="purpule"
                  fadeIn="none"
                />

          </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
           <Login/>
        ) : (
          <> 
          <Header/>
          <AppBody>
            <Sidebar/>
              <Switch>
                <Route exact path="/">
                  <Chat/>
                </Route>
             </Switch>
          </AppBody> 
          </>
        )
      }
    </Router>
    </div>
  );
}

export default App;



const AppBody = styled.div`
  display: flex;
  height: 100vh;
  
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;


const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
    
  }

`;