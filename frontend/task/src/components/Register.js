import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";


export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    async function signUp(e) {
        e.preventDefault();
        let item = { name, email, password }

        let result = await fetch("http://localhost:4000/admin/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            }

        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))


    }

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Form className="container p-3 border mt-4" style={{ marginLeft: "500px" }}>
                        <h3> Registration </h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button style={{ color: "white" }} variant="light" type="submit" onClick={signUp}>
                            <Link to="/login">Submit</Link>
                        </Button>
                    </Form></Col>

            </Row>
        </div>
    )
}
