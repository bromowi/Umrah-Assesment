import React, {useState, useEffect} from 'react';
import { Container, 
    Form,
     Row, 
     Col,
     Card,
     Button } from 'react-bootstrap';
import './Home.css';
import axios from'axios'

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log (username, password);
        const data = {username, password};
        axios
        .post('https://api.umrah.ac.id/api/token', data)
        .then ((res ) => {
            localStorage.setItem('token', res.data.token);
            console.log(res.data.token);
            if (res.data.token ) {
                window.location.href = "/sales";
            }
        })
        .catch((err) => {
            console.log(err);
        })
       
    }

    return (
        <Container>
        <Card className='Card'>
            <div  className='All'>
            <h1 className='Welcome'> Welcome To Umrah Test Assesment.
                Please Create Your Account To Accessing
            </h1>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="5">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" 
                        placeholder="Username Anda" 
                        onChange={handleUsernameChange}
                        />
                    </Col>

                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="5">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" 
                        placeholder="Password" 
                        onChange={handlePasswordChange}
                        />
                    </Col>
                </Form.Group>
            </Form>
            <Button className='Button'
                variant="warning" 
                type='submit' 
                onClick={handleLogin} >Login</Button>
            </div>
        </Card>
        </Container>
    )
}

export default Home

