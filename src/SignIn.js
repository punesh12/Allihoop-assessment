import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";


function SignIn() {
    return (
        
        <Form className="login-form">
        <h1 className="text-center" > <span>Sign In</span> </h1>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" placeholder="example@email.com"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password"/>
        </FormGroup>
        
        <Button className=" btn-lg bg-dark btn-block ">Sign In</Button>

        <div className="text-center pt-3">Not a member yet ?</div>
        
        <Link to="/signup">
        <Button className=" btn-lg btn-block mt-3 ">Sign Up</Button>
        </Link>

      </Form>
    )
}

export default SignIn
