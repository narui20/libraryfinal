import React, { useEffect } from "react";
import Navigation from "../Navigationbar/Navigation"
import img from "../../BookPage.jpg"

const Layout =(props)=>{

   let image=null;

   if(localStorage.getItem("loggedIn")!=="yes"){
      image=(
         <img src={img} alt="Books Website"  width="100%"></img>
      )
   }

   return( <div>
        <Navigation>
        </Navigation>
        {image}
        {props.children}
    </div>
   )
}

export default Layout