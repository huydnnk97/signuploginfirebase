import React,{useRef} from 'react'
import bcrypt from 'bcryptjs'
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false

function Bc() {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    bcrypt.compare()
    function handleLoginForm() {
    //   const email = emailInputRef.current.value
    //   const password = passwordInputRef.current.value
    //   const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
      console.log(salt)
    }
  
    return (
      <div className='App'>
            <button onClick={()=>{handleLoginForm()}}>casdaadsas</button>
      </div>
    )
  }
  
  export default Bc