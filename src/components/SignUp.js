import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const inputBox = {
    outline: 'none',
}


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    const collectData = () => {
        console.warn(email, password, name, address, city, zip);
    }

    return (
        <>
            <div className='mt-4 d-flex'>
                <img src="image-1.jpg" alt="Logo" style={{ width: '49%' }} />;
                <Card style={{ width: '33rem', marginLeft: '79px' }} className='pr-3'>
                    <Card.Header>SignUp Form</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={inputBox}
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Enter name"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St"
                                        value={address} onChange={(e) => setAddress(e.target.value)} />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control placeholder='city'
                                            value={city} onChange={(e) => setCity(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control placeholder='Pin Code'
                                            value={zip} onChange={(e) => setZip(e.target.value)} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" onClick={collectData} >
                                        Sign Up
                                    </Button>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>


    );
}

export default SignUp;