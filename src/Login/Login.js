import React,{Component} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

class Login extends Component{

    state={
        userName:"",
        password:"",
        loading:true,
    }

    onChangeHandler=event=>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    }

    onClickHandler=event=>{
        event.preventDefault();
       let val={
           userName:this.state.userName,
           password:this.state.password,
       }

       

       axios.post("http://localhost:8081/api/getUser/"+val.userName+"/"+val.password)
            .then(res=>{
                if(res.data.userName==null)
                 console.log("Please Enter the correct credentials");

                 else{
                     console.log("Hello",res.data.userName);
                 }
             })
    }

    render(){
        let login=null;
        if(this.state.loading){
            login=(
                <div>
                    <form>
                        Name:<input type="text" name="userName" onChange={event=>this.onChangeHandler(event)}></input>
                        Password:<input type="password" name="password" onChange={event=>this.onChangeHandler(event)}></input>
                        <Button type="submit" onClick={this.onClickHandler}>LogIn</Button>
                    </form>
                </div>
            );
        }
        return(
            <div>{login}</div>
        );
    }
}

export default Login;