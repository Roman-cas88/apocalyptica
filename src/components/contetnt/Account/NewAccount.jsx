import React, { useRef, useContext } from "react";
import { Form, Button, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { UserContext } from "./UserContext";

export function NewAccount() {
    const navigate = useNavigate();
    const {login} = useContext(UserContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "@"
        }
    });
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        login(data);
        navigate("/")
    };
    return (
        <div>
            <Form className='border p-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <h6>I'm a new customer.</h6>
                <hr />
                <Form.Group className="mb-3">
                    <Form.Select
                        aria-label="salutation"
                        {...register("salutation", {
                            required: "Please select"
                        })}
                    >
                        <option value="">Salutation *</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                    </Form.Select>
                    {errors.salutation && (
                        <p className="errorMsg">{errors.salutation.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" id="firstName">
                    <Form.Control
                        type="text"
                        placeholder="First name*"
                        {...register("firstName", {
                            required: "Please enter your First name",
                            pattern: {
                                value: /^[^0-9]/,
                                message: "Please enter a valid name"
                            }
                        })}
                    // className={`${errors.firstName ? "input-error" : ""}`}
                    />
                    {errors.firstName && (
                        <p className="errorMsg">{errors.firstName.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" id="lastName">
                    <Form.Control
                        type="text"
                        placeholder="Last name*"
                        {...register("lastName", {
                            required: "Please enter your Last name",
                            pattern: {
                                value: /^[^0-9]/,
                                message: "Please enter a valid name"
                            }
                        })}
                    // className={`${errors.lastName ? "input-error" : ""}`}
                    />
                    {errors.lastName && (
                        <p className="errorMsg">{errors.lastName.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
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
                        placeholder="Your password"
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

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Re-enter your password*"
                        {...register("confirmPassword", {
                            validate: (value) =>
                                value === password.current || "The passwords do not match"
                        })}
                    />
                    <Form.Text className="text-muted">
                        Your password must contain at least 6 characters. <br />
                    </Form.Text>
                    {errors.confirmPassword && (
                        <p className="errorMsg">{errors.confirmPassword.message}</p>
                    )}
                </Form.Group>

                <h6 className='mt-5'>Your address</h6>
                <hr />
                <Row className="col-10 mx-auto bg-warning text-white" >
                    <Col xs={1} className="">
                        <h1>i</h1>
                    </Col>
                    <Col >
                        <Form.Text className="">
                            Please make sure that you enter the correct values into the rights fields, so that we can process your order.
                        </Form.Text>
                    </Col>
                </Row>
                <hr />
                <Form.Group className="mb-3">
                    <Form.Select aria-label="Default select">
                        <option>Country*</option>
                        <option value="1">Sweden</option>
                        <option value="2">Deutschland</option>
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col xs={4}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Zipcode" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Street or 'Packstation'" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="House/Packstat" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="DHL Packstation Postnummer" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Additional address line 2" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        label="The shipping address does not match the billing address"
                    />
                </Form.Group>
                <p>The fields marked with * are required</p>

                <h6 className='mt-5'>Privacy</h6>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        label={
                            <span>
                                I have read the <Link to="/privacy" style={{ color: 'inherit' }} target="_blank">data protection information</Link>
                            </span>
                        }
                    />
                </Form.Group>
                <Button variant="info" type="submit">Register now </Button>
            </Form>

        </div>
    )
}
