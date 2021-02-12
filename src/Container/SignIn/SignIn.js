import React,{Component} from "react";
import axios from "axios";
import "./SignIn.css";
import {Button,Form} from "react-bootstrap";
import FormElmt from "../../Component/FormElement/Form"

class SignIn extends Component{

    state={
        userId:"",
        userName:"",
        password:"",
        email:"",
        mobile:"",
        loading:true,
        statement:"Please enter all the values"
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
       axios.post('http:// ec2-52-91-229-9.compute-1.amazonaws.com:8081/api/user/',val)
            .then(res=>{
                if(res.data.userName==null){
                    //console.log("User already exists");
                    this.setState({statement:"User already exists"})
                }
                else{
                    //console.log("Hello ",res.data.userName)
                    //this.setState({statement:"Enjoy the user libraray "+res.data.userName})
                    this.props.history.push("/")
                }
                
            })

        this.setState((prevState,props)=>{
            return {loading:!prevState.loading}
        })
       // console.log(this.state)
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
                   
                    <FormElmt id="butstyle" proptype="textbox"
                        label="Email" type="email" req="true"
                         name="email" changed={event=>this.onChangeHandler(event)}/>
                    
                    <FormElmt id="butstyle" proptype="textbox"
                        label="Mobile" type="number" req="true"
                         name="mobile" changed={event=>this.onChangeHandler(event)}/>

                   <Button  variant="warning"  size="lg" type="submit" onClick={this.onButtonClick}>SignUp</Button>
                  </Form>
                   </div>
                   </center>
                   </div></div>
           );
           }
        return(
        <div>
            {userDetails}
        </div>
        );
    }
}

export default SignIn;