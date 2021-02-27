import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <Form className="login-form">
        <h1 className="text-center" > <span>Sign Up</span> </h1>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" placeholder="example@email.com"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password"/>
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password" placeholder="password"/>
        </FormGroup>
        <Button className=" btn-lg bg-dark btn-block">Sign Up</Button>

        <div className="text-center pt-3">Already a member ?</div>

        <Link to="/signin">
        <Button className=" btn-lg btn-block mt-3 ">Sign In</Button>
        </Link>

      </Form>
    )
}

export default SignUp
