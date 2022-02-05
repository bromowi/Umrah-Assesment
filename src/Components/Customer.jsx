import React, { useState, useEffect } from 'react';
import {
    Container,
    Card,
    Button,
    Form,
    Row,
    Col

} from 'react-bootstrap';
import axios from 'axios'
const Customer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(
            'https://api.umrah.ac.id/api/customer/list/100/1', {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjo4LCJ1c2VybmFtZSI6IkJyb21vIiwibmFtYSI6bnVsbCwiZXhwIjoxNjQ0NjcyNjM5fQ.E36vHbrfr8RDEhZPgW7G91ZfUAGTXRb1xmVeP6Labsw'
            }
        }
        ).then(response => { setData(response.data.data.data) })
            .catch(err => { })
    }, []);
    console.log(data, 'rawr')
    return (
        <Container>
            <h1>Customer</h1>
            <Card>
                <Button variant="primary">Refresh</Button>
                <Form.Control type="type" placeholder="Search" />
                <Button variant="primary">Search</Button>
            </Card>

            <Card>

                <Row>
                    <Col>
                        <p>No</p>
                    </Col>
                        

                    <Col>
                        <p>Customer ID</p></Col>

                    <Col>
                        <p>Customer Name</p>
                        </Col>
                    <Col>
                        <p>Contact</p>
                    </Col>

                    <Col>
                        <p>Adress</p>
                    </Col>
                </Row>
            </Card>
            {data.map((item, index )=> (

                <Card>

                    <Row>
                        <Col>
                            <p>{index+1}</p></Col> 

                        <Col>
                            <p>{item.id_customer}</p></Col>

                        <Col>
                        
                            <p>{item.nama}</p></Col>

                        <Col>
                            
                            <p>{item.contact}</p></Col>

                        <Col>
                            
                            <p>{item.alamat}</p></Col>
                    </Row>
                </Card>
            ))}

        </Container>


    )
}

export default Customer;
