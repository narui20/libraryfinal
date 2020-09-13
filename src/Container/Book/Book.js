import React,{Component} from "react";
import {Button} from "react-bootstrap";
import Axios from "axios";

class Book extends Component{
    state={
        name:"",
        category:""
    }

    onChangeHandler=event=>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    }
 
    getBooks=()=>{

    }
    
    getBooksName=()=>{
        let val={name:this.state.name}
        Axios.get("http://localhost:8081/api/bookByName/"+val.name)
             .then(res=>{
                 console.log(res.data);
             })
    }

    getBooksCategory=()=>{
        let val={category:this.state.category}
        Axios.get("http://localhost:8081/api/bookByCategory/"+val.category)
             .then(res=>{
                 console.log(res.data);
             })
    }

    render(){
        return(
            <div>
                <Button onClick={this.getBooks}>AllBooks</Button>
                <input type="text" name="name" onChange={event=>this.onChangeHandler(event)} placeholder="Enter a Book to be searched"></input>
                <Button onClick={this.getBooksName}>Search</Button>
                <input type="text" name="category" onChange={event=>this.onChangeHandler(event)} placeholder="Enter Category"></input>
                <Button onClick={this.getBooksCategory}>Search</Button>
            </div>
        )
    }
}

export default Book;