import React,{Component} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

class SignIn extends Component{

    state={
        userId:"",
        userName:"",
        password:"",
        email:"",
        mobile:"",
        loading:true,
    }

    onButtonClick=event=>{
        event.preventDefault();
        const val={
            userId:this.state.userId,
            userName:this.state.userName,
            password:this.state.password,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log("axios",val)
       axios.post('http://localhost:8081/api/user/',val)
            .then(res=>{
                if(res.data.userName==null){
                    console.log("User already exists");
                }
                else{
                    console.log("Hello ",res.data.userName)
                }
                
            })

        let load=this.state.loading;
        this.setState({loading:!load});
        console.log(this.state)
    }

    onChangeHandler=event=>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
       console.log(event.target.value);
    }
    render(){
       let userDetails=null;

           if(this.state.loading){
           userDetails=(
               <div>
                   <form >
                   Name:<input type="text" name="userName" onChange={event=>this.onChangeHandler(event)}></input>
                   Password:<input type="password" name="password" onChange={event=>this.onChangeHandler(event)}></input>
                   Email:<input type="text" name="email" onChange={event=>this.onChangeHandler(event)}></input>
                   Mobile:<input type="text" name="mobile" onChange={event=>this.onChangeHandler(event)}></input>
                   <Button type="submit" onClick={this.onButtonClick}>SignIn</Button>
                   </form>
               </div>
           );
           }
        return(
        <div>{userDetails}</div>
        );
    }
}

export default SignIn;