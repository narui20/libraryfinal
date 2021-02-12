import React,{Component, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Axios from "axios";
import Purchase from "../Purchase/Purchase";
import "./Book.css";

const Book=props=>{
    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const[books,updatedBooks]=useState([]);

 
    useEffect(()=>{
      async function fetchData(){
        const val=await Axios.get("http://localhost:8081/api/getAllBook");
        updatedBooks(val.data)
         return val;
      }

      fetchData();
    
    },[])

   console.log(props);

    // const getBooks=()=>{
    //    Axios.get("http://localhost:8081/api/getAllBook")
    //    .then(res=>{
    //        console.log(res.data);
    //    })
    // }
    
   const  getBooksName=()=>{
        async function fetchData(){
        let val=await Axios.get("http://localhost:8081/api/bookByName/"+name);
        updatedBooks(val.data);
        // Axios.get("http://localhost:8081/api/bookByName/"+val.name)
        //      .then(res=>{
        //          console.log(res.data);
        //      })
        }

        fetchData();

        console.log(books)
    }

   const getBooksCategory=()=>{

     async function fetchData(){
        let value=await Axios.get("http://ec2-52-201-221-249.compute-1.amazonaws.com:8081/api/bookByCategory/"+category)
        updatedBooks(value.data);
        // Axios.get("http://localhost:8081/api/bookByCategory/"+val.category)
        //      .then(res=>{
        //          console.log(res.data);
        //      })
     }

     fetchData();
    
    }

    //console.log(props.location.state)

        return(
            <React.Fragment>
            <div>
                {/* <Button onClick={getBooks}>AllBooks</Button> */}
                <input type="text" name="name" onChange={event=>setName(event.target.value)} placeholder="Enter a Book to be searched"></input>
                <Button onClick={getBooksName}>Search</Button>
                <input type="text" name="category" onChange={event=>setCategory(event.target.value)} placeholder="Enter Category"></input>
                <Button onClick={getBooksCategory}>Search</Button>
            </div>
            <div>
               {books.map(book=>{
                   return <div className="book_item">
                       <div>{book.bookName}</div>
                       <div>{book.author}</div>
                       <div>{book.price}</div>
                       <Purchase
                        key={book.bookId}
                        bookName={book.bookName}
                        quantity={book.quantity}
                        price={book.price}
                        userName={props.location.state?.userName}/> 
                         </div> })}
            </div>
            </React.Fragment>
        )
    }

export default Book;