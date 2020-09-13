import React from "react";
import Navigation from "../Navigationbar/Navigation"

const Layout =(props)=>{
   return( <div>
        <Navigation/>
        {props.children}
    </div>
   )
}

export default Layout