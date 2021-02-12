import React from "react";
import { Redirect } from "react-router";
import {connect} from "react-redux";


const logout=(props)=>{
    localStorage.removeItem("loggedIn")
     
    localStorage.removeItem("admin")

    // props.log();
    // props.admin();
     
    return(
        <Redirect to="/"/>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        log:()=>dispatch({type:"LOG",val:"no"}),
        admin:()=>dispatch({type:"ADMIN",val:"no"})
    }
}



export default connect(mapDispatchToProps)(logout);