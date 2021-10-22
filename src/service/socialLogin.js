
import firebase from "../config/firebase-config"
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider,OAuthProvider,GithubAuthProvider } from "firebase/auth";
const socialLogin = (provider) =>{

    

    var AuthProvider ;
    //Add provider which you want to use
    if(provider.providerId == "google.com"){
        AuthProvider = GoogleAuthProvider
    }
    else if (provider.providerId == "facebook.com"){
        AuthProvider = FacebookAuthProvider
    }
    else if (provider.providerId == "github.com"){
        AuthProvider = GithubAuthProvider
    }
    else if (provider.providerId == "apple.com"){
        AuthProvider = OAuthProvider
    }else{
        return
    }


    const auth = getAuth();
  return  signInWithPopup(auth, provider)
          .then((result) =>{
            const credential = AuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return user
          })
          .catch((error) =>{
              return error
          })


}

export default socialLogin