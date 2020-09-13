import React,{Component} from "react";
import {Button,Form} from "react-bootstrap";
import FormElmt from "../../Component/FormElement/Form"
import axios from "axios";
import "./Login.css"

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
                <div className="container">
                
                <div className="col">
                    <center style={{marginTop:"10%"}} >
                         <div className="col-8 col-lg-5 col-md-6 col-xs-12 col-sm-8 m-1" id="newStyle">
                        <Form>
                        <FormElmt id="butstyle" proptype="textbox" type="text" 
                                    name="userName" label="Name" req="true"
                                    changed={event=>this.onChangeHandler(event)}/>
                        <FormElmt id="butstyle" proptype="textbox"
                        label="Password" type="password" req="true"
                         name="password" changed={event=>this.onChangeHandler(event)}/>
                        <Button  variant="warning"  size="lg" type="submit" onClick={this.onClickHandler}>LogIn</Button>
                    </Form>
                </div>
                </center>
                </div>
                </div>
            );
        }
        return(
            <React.Fragment>{login}</React.Fragment>
        );
    }
}

export default Login;