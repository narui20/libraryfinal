import React, { useState } from "react";
import Axios from "axios";

const AddAdmin=props=>{

    const[userName,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[loading,setLoading]=useState(true)

    const clickHandler=()=>{

        const val={
            userName:userName,
            password:password,
            email:email,
            mobile:mobile
        }

        async function enterData(){
            if(userName!==''&&password!==''&&email!=="" && mobile!==""){
          Axios.post("http:// ec2-52-91-229-9.compute-1.amazonaws.com:8081/api/admin/",val)
          .then(res=>{
              console.log(res.data)
          })
        }
    }

        enterData();
    }

    let form=null;


       if(loading){
        form=(<div>
       Name: <input type="text" name="userName" onChange={event=>setName(event.target.value)}></input>
       Password:<input type="password" name="password" onChange={event=>setPassword(event.target.value)}></input>
       Email: <input type="email" name="Email" onChange={event=>setEmail(event.target.value)}></input>
       Mobile: <input type="text" name="Mobile" onChange={event=>setMobile(event.target.value)}></input>
       <button onClick={clickHandler}>Add</button>
       <button onClick={()=>{props.history.goBack()}}>Back</button>
        </div>)
       }

    return(
        <div>
         {form}
        </div>
    )
}

export default AddAdmin;