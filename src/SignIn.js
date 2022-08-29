import { useState, useEffect } from "react";
import "./SignIn.css";
import { db } from "./firebase-config";
import {
    
    getDocs,
    collection,
    query,
    where
    
  } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignIn() {
  const navigate =  useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  async function checkUser() {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    if(querySnapshot.size==0){
      console.log("Your email are incorrect, please try again")
    }else{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      
      if (password === doc.data().password) {

        console.log("ok")
        navigate('/')
      }
      else console.log("fail")
    });
    }
  }
  return (
    <div className="SignIn">
      
    <div className="huy">
      <Link className="SignUpBtn" to ="../signUp">
    <button >SignUp</button>
    </Link>
      <label>Your email</label>
      <input onChange={(event)=>{setEmail(event.target.value)}}></input>
      <label>Your password</label>
      <input onChange={(event)=>{setPassword(event.target.value)}}></input>
      <button className="Login" onClick={ () => {
        
checkUser()

      }}>Login</button>
      
    </div>
    </div>
  );
}

export default SignIn;