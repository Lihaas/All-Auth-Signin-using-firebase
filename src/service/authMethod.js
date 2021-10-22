import firebase from "../config/firebase-config";
import {GoogleAuthProvider , FacebookAuthProvider ,OAuthProvider ,GithubAuthProvider} from "firebase/auth";

export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const appleProvider = new OAuthProvider('apple.com')
export const githubProvider = new GithubAuthProvider()