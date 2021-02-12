import React,{Component} from "react";
import Axios from "axios";
import {Button} from "react-bootstrap";
import "./BookDetails.css"

class BookDetails extends Component{
    state={
        bookName:"",
        author:"",
        price:"",
        category:"",
        quantity:"",
        loading:true
    }

    onClickHandler=()=>{
        let val={
            bookName:this.state.bookName,
            author:this.state.author,
            price:this.state.price,
            category:this.state.category,
            quantity:this.state.quantity,
        }

        if(this.state.bookName!==""){

        Axios.post('http://ec2-52-201-221-249.compute-1.amazonaws.com:8081/api/book/',val)
        .then(res=>{
            console.log(res.data)
        })
    }
        //this.setState({loading:!this.state.loading})
    }

    onChangeHandler=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        let val=null;

        if(this.state.loading){
            val=(
                <div className="book_details">
                  <input type="text" name="bookName" onChange={event=>this.onChangeHandler(event)} placeholder="Enter BookName"></input>
                  <input type="text" name="author" onChange={event=>this.onChangeHandler(event)} placeholder="Enter Author"></input>
                  <input type="text" name="price" onChange={event=>this.onChangeHandler(event)} placeholder="Enter Price"></input>
                  <input type="text" name="category" onChange={event=>this.onChangeHandler(event)} placeholder="Enter Category"></input>
                  <input type="text" name="quantity" onChange={event=>this.onChangeHandler(event)} placeholder="Enter Quantity"></input>
                  <Button onClick={this.onClickHandler}>Add Book</Button>
                  <Button onClick={()=>{this.props.history.goBack()}}>Back</Button>
                </div>
            )
        }

        return(
            <div>{val}</div>
        )
    }
}

export default BookDetails;