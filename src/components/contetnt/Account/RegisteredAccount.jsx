import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap/";
import { useForm } from "react-hook-form";
import "./style.css";
import { useNavigate } from "react-router-dom";



export function RegisteredAccount(props) {
  const userEmailLocaleStore = localStorage.getItem('userEmail');
  const [userEmail, setuserEmail ] = useState(userEmailLocaleStore);
  console.log(userEmail)
  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    defaultValues: {
      email: userEmail
    }
});
const navigate = useNavigate();

const onSubmit = (data) => {
    console.log(data);
    navigate("/")
};

  return (
    <div>
      <Form className='border p-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
        <h6>I'm already a customer.</h6>
        <hr />
        <p>Log in with your email address and password</p>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Your email address*"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Your password*"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
              }
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </Form.Group>

        <p>Forgot your password?</p>
        <Button variant="info" className='bg-blue' type="submit" >Login </Button>

      </Form>
      <h6>My benefits</h6>
      <ul>
        <li>Express Shopping</li>
        <li>Save your user data and settings</li>
        <li>Overview of your orders incl. shipping informations</li>
        <li>Wishlist</li>
      </ul>
    </div>
  )
}


