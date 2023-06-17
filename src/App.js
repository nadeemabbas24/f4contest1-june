import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [succes, setSucces] = useState(false)
  const [message, setMessage ] =useState();
  const [color, setColor] = useState("red");

  const submitHandler = (e)=>{
    e.preventDefault();
    if(e.target.name.value == '' 
    || e.target.email.value =='' 
    || e.target.password.value == '' )
     {        
      
         setMessage('Error : All the fields are mandatory')
         setError(true); 
         setColor("red")
         setSucces(false)
         
    }
    else 
       if(e.target.password.value !== e.target.cnfPassword.value)
           { setMessage('Error : confirm password mismatch') 
             setError(true); 
             setSucces(false) 
             setColor('red')  
             console.log(e.target.password.value,e.target.cnfPassword.value)
          }             
    else 
     {        
        setSucces(true);
        setColor("green")
        setMessage('Successfully Signed Up!')
        e.target.reset()
        setError(false) 
        setName(e.target.name.value);       
        setEmail(e.target.email.value);       
        setPassword(e.target.password.value); 
        console.log(name, email, password)      
      }
    
  }

  return (
    <div className="App">
      <div className='App-header'>
      <h1>Signup</h1>
      <form className='my-form' onSubmit={submitHandler}>
        <input type="text" name="name" placeholder='Full Name'/>
        <input type="email" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="password" name="cnfPassword" placeholder='Confirm Password'/>
        {(error || succes) && <p style={{color:color}}>{message}</p>}        
        <button type="submit">Signup</button>
      </form>
      </div>
    </div>
  );
}

export default App;
