import React, { useState } from 'react'
import axios from 'axios'

function insert() {

  const [values, setvalues] = useState({
    name:'',
    email:'',
    password:''
  })
    const [file, setfile] = useState();
    const handleFileChange = (e)=>{
        setfile(e.target.files[0]);
    }

    
    const handlesubmit = (e) =>{

      e.preventDefault();
      // console.log(formdata)
    const formdata = new FormData();
    formdata.append('image',file);
    formdata.append('name', values.name);
    formdata.append('email', values.email);
    formdata.append('password', values.password);
    
    
    axios.post('http://localhost:3000/api/auth/',formdata)

    .then(res=>{ 

      console.log('yes')
     })
    .catch(err => console.log(err))
    }
  return (
    <div> 
      <form onSubmit={handlesubmit}>
      <input type="text" name="name" placeholder='name' id="n" onChange={e=>setvalues({...values,name:e.target.value})} /> <br />
      <input type="email" name="emal" placeholder='email' id="e"  onChange={e=>setvalues({...values,email:e.target.value})}/> <br />
      <input type="password" name="password" placeholder='password' onChange={e=>setvalues({...values,password:e.target.value})} id="p" /> <br />
      <input type="file" name="image" id="i" onChange={handleFileChange}  /> <br />
      <button >submit</button>
      </form>
    </div>
  )
}

export default insert
