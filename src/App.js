import logo from './logo.svg';
import './App.css';
import {getAuth} from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home';
import SignIN from './signin';
import { useState } from 'react';
function App() {
  const auth = getAuth();

  //We are changing the state after Signin
  const [isUserSignedIn,setSignInState] = useState(false);

  auth.onAuthStateChanged((user) =>{
    if(user){
      return setSignInState(true)
    }
    setSignInState(false)

  })
 
  if(isUserSignedIn){

    return (
      <>
      <Router>
          <Route exact path="/">
              <SignIN />
          </Route>
      </Router>
      </>
            
    );


  }
  else{

    return (
      <>
      <Router>
          <Route exact path="/">
              <Home />
          </Route>
      </Router>
      </>
            
    );

  }

  
}

export default App;
