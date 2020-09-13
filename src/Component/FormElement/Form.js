import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Form.css"

const FormElmt = (props) => {
    
    let requiredVal= props.req ? (
        <div >{props.label}<font color="red">*</font></div>
      ) :   <div>{props.label}</div>
   
    console.log(props.setRequired)
    switch (props.proptype) {
        
        case "textbox":
            return (
                <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Row>
                        {requiredVal}
                        <Form.Control {...props} onChange={props.changed}/>
                    </Row>
                </Form.Group>
            )
        case "radiobutton":
            return (

                <Form.Check
                    type="radio"
                    {...props}
                    id="formHorizontalRadios1"
                    onClick={props.clicked}
                    checked={props.checked}
                    disabled={props.disabled}
                />
            )
        case "dropdown":

            return (
                <Form.Group as={Col} controlId="formGridState">
                    <Row >   {requiredVal}
                        <Form.Control as="select" onClick={props.clicked} onChange={props.changed} required={props.req} value={props.propVal} disabled={props.update}>
                            {props.arr.map((option) =>
                                <option value={option.value} >{option.label}</option>)}
                        </Form.Control>

                    </Row>
                </Form.Group>)
        case "checkbox":
            return (
                <Form.Group as={Col} controlId="formHorizontalCheck">
                    <Row ><Form.Label >{props.label}</Form.Label>
                        {props.arr.map(value =>
                            <Form.Check {...props} onClick={props.clicked} />
                        )}
                    </Row>
                </Form.Group>
            )
        case "button":
            return (
                <Button type={props.type} variant={props.variant} size={props.size} onClick={props.clicked} >{props.label}</Button>
            )
        case "textarea":
            return (
                <Form.Group as={Col} >
                    <Row > {requiredVal}
                        <textarea className="form-control" value={props.value} onChange={props.changed} rows="3" />
                    </Row>
                </Form.Group>
            )
        default: return null;
    }
}


export default FormElmt