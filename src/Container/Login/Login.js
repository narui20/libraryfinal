import React,{Component} from "react";
import {Button,Form} from "react-bootstrap";
import FormElmt from "../../Component/FormElement/Form"
import axios from "axios";
import "./Login.css"
import { Redirect } from "react-router";
import Axios from "axios";
import {connect} from "react-redux"

class Login extends Component{

    state={
        userName:null,
        password:"",
        statement:"Please enter username and password",
        loading:true,
        user:["admin","user"],
        value:"admin"
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
             if(this.state.value==="user"){

            axios.post("http://ec2-52-201-221-249.compute-1.amazonaws.com:8081/api/getUser/"+val.userName+"/"+val.password)
            .then(res=>{
                if(res.data.userName==null){
                 console.log("Please Enter the correct credentials");
                 this.props.history.push("/")
                 //this.setState({statement:"Please Enter the correct credentials"})
                }

                 else{
                     console.log("Hello",res.data.userName);
                     //this.setState({statement:"Hello "+res.data.userName});
                      localStorage.setItem("loggedIn","yes");
                      //this.props.logChange();
                      this.props.history.replace( {
                        state:{userName:this.state.userName},
                        pathname:"/book"
                        })
                      //return <Redirect to="/book"/>
                 }
             })
            }

            else if(this.state.value==="admin"){
                Axios.post("http://localhost:8081/api/getAdmin/"+val.userName+"/"+val.password)
                .then(res=>{
                           if(res.data===""){
                               this.props.history.push("/")
                               console.log(res.data+"from login")
                           }

                           else{
                               //console.log(res.data+"from login")
                              localStorage.setItem("loggedIn","yes");
                              localStorage.setItem("admin","yes");
                               this.props.history.replace({
                                state:{userName:this.state.userName},
                                pathname:"/book"
                                });
                           }
                }

                )
            }
            //  this.setState((prevState,state)=>{
            //      return{loading:!prevState.loading}
            //  })
           console.log(this.state)
    }

    render(){
        let login=null;
        if(this.state.loading){
            login=(
                <div className="container">
                
                <div className="col">
                    <center style={{marginTop:"5%"}} >
                         <div className="col-8 col-lg-5 col-md-6 col-xs-12 col-sm-8 m-1" id="newStyle">
                        <Form>
                        <FormElmt id="butstyle" proptype="textbox" type="text" 
                                    name="userName" label="Name" req="true"
                                    changed={event=>this.onChangeHandler(event)}/>
                        <FormElmt id="butstyle" proptype="textbox"
                        label="Password" type="password" req="true"
                         name="password" changed={event=>this.onChangeHandler(event)}/>
                          <select onChange={event=>this.setState({value:event.target.value})}>{this.state.user.map(a=>{
                             return <option key={a}
                                            value={a}
                                             >{a}</option>
                                             })}</select>
                           
                        <Button  variant="warning"  size="lg" type="submit" onClick={this.onClickHandler} >LogIn</Button>
                    </Form>
                </div>
                </center>
                </div>
                </div>
            );
            console.log(this.props.log)
        }
        return(
            <React.Fragment>
                {login}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        adminChange:()=>dispatch({type:"ADMIN",val:this.state.value==="admin"?"yes":"no"}),
        logChange:()=>dispatch({type:"LOG",val:"yes"})
    }
}

const mapStateToProps=state=>{
    return{
        log:state.loggedIn
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);