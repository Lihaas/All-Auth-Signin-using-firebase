import React from 'react';
import './App.css';
import { appleProvider, facebookProvider, githubProvider, googleProvider } from './service/authMethod';
import { async } from '@firebase/util';
import socialLogin from './service/socialLogin';
const Home = () => {
    

    //For checking response
    const handelOnClick = async (provider) => {
    
        const res = await socialLogin(provider)
        //console.log(res);
      }
    
    
    return (
        <div className="App">
     
     <a  onClick={() => handelOnClick(googleProvider)} >
       <div className="button">
          <img src="google.png"/>
          <p>Sign In with Google</p>
       </div>
     </a>

     <a  onClick={() => handelOnClick(facebookProvider)} >
       <div className="button">
          <img src="fb.png"/>
          <p>Sign In with Facebook</p>
       </div>
     </a>

     <a  onClick={() => handelOnClick(appleProvider)} >
       <div className="buttonApple">
          <img src="apple.png"/>
          <p>Sign In with Apple</p>
       </div>
     </a>
     <a  onClick={() => handelOnClick(githubProvider)} >
       <div className="buttonApple">
          <img src="github.png"/>
          <p>Sign In with Github</p>
       </div>
     </a>

    </div>
    )
}

export default Home;