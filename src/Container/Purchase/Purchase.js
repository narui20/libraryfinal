import React,{Component, useEffect, useState} from "react";
import Axios from "axios";
import {Button} from "react-bootstrap";

const Purchase=props=>{
 const[purchase,updatePurchase]=useState({
     userName:"",
     bookName:"",
     quantity:0,
     price: 0,
 });

 useEffect(()=>{
     let val=null;
    async function putData(){
        if(purchase.bookName!=="" && purchase.quantity!==0){
         if(localStorage.getItem("admin")!=="yes"){
       val=await Axios.post("http://localhost:8081/api/purchase/",purchase);
         }
         else{
             val=await Axios.post("http://localhost:8081/api/book/",purchase);
         }
        }
    }
    putData();
    //console.log(val);
 },[purchase.bookName])

 const addPurchase=()=>{
  
    let val=null;
    async function putData(){
        updatePurchase((prevState)=>({
            userName:props.userName,
            bookName:props.bookName,
            quantity:prevState.quantity,
            price:props.price
        }))

    }
    putData();
    
 }

 const changeHandler=(event)=>{
     event.persist();
     updatePurchase((prevState)=>({
        userName:"",
        bookName:"",
        quantity:event.target.value,
        price:0
    }))

 }

 console.log(purchase)

 let value=(
     localStorage.getItem("admin")!=="yes"?
     <button onClick={addPurchase}>Purchase</button>:
     <button onClick={addPurchase}>Add Book</button>
)

 return(
    //  purchase.bookName!==""?<div>Purchase Successfull</div>:null
     <React.Fragment>
    {/* <button onClick={addPurchase}>Purchase</button> */}
    {value}
    <input type="text" name="quantity" placeholder="Enter quantity" onChange={(event)=>changeHandler(event)} ></input>
    </React.Fragment>
 )
}

export default Purchase;