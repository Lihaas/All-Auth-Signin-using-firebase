import React from 'react';
import './App.css';
import {getAuth} from "firebase/auth";

import { async } from '@firebase/util';
import socialLogin from './service/socialLogin';
const SignIN = () => {
    const auth = getAuth();


    //For signout
    const handelOnClick = async () => {  
        auth.signOut()
      }

    
    return (
        <div className="App">
     
       <p>Email - {auth.currentUser.email}</p>
       <p>Name - {auth.currentUser.displayName}</p>
     <a  onClick={() => handelOnClick()} >
       <div className="signout_btn">
          <p>SignOut</p>
       </div>
     </a>
    </div>
    )
}

export default SignIN;