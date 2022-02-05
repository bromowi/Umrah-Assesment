import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Form,
  Button,
  Col,
  Row,
  FormControl,
} from 'react-bootstrap';
import './SalesComp.css';
import axios from 'axios'
const SalesComp = () => {
  const [data, setData] = useState([]);
  const [customer, setDataCustomer] = useState([]);

  useEffect(() => {
    axios.get(
      'https://api.umrah.ac.id/api/item/list/10/1', {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjo4LCJ1c2VybmFtZSI6IkJyb21vIiwibmFtYSI6bnVsbCwiZXhwIjoxNjQ0NjcyNjM5fQ.E36vHbrfr8RDEhZPgW7G91ZfUAGTXRb1xmVeP6Labsw'
      }
    }
    ).then(response => { setData(response.data.data.data) })
      .catch(err => { })

      axios.get(
        'https://api.umrah.ac.id/api/customer/list/100/1', {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjo4LCJ1c2VybmFtZSI6IkJyb21vIiwibmFtYSI6bnVsbCwiZXhwIjoxNjQ0NjcyNjM5fQ.E36vHbrfr8RDEhZPgW7G91ZfUAGTXRb1xmVeP6Labsw'
        }
      }
      ).then(response => { setDataCustomer(response.data.data.data) })
        .catch(err => { })

  }, []);
  
  

  console.log(customer, 'beliii')
  console.log(data, 'rawr')
  return (
    <>
      <Container>
        <h1 className='H1'>New Sales Transaction</h1>
        <br />
        <Card className='Kartu1'>

          <h2 className='H2'>Customer</h2>
          <br />
          <Col className='Kolom'>
            <Form.Select aria-label="Default select example">
              <option>Choose Customer</option>
              {customer.map((item) =>(
                <option> {item.nama}</option>
              ))}

            </Form.Select>
          </Col>
          <br />
          <Form.Control type="text" placeholder="Search Here" className='Kolom' />
          <br />
          <Row>
            <Col className='Tombol1'>
              <Button variant="primary" className='Cari1'>Search</Button>
              <Button variant="success">Add Item</Button>

              <br />
            </Col>
          </Row>
        </Card>
        <Card className='Kartu2'>
          <Row className='Ktg'>
            <Col sm>
              <p>No</p>
              <p>1</p>
              <p>2</p>
            </Col>
            <Col sm>
              <p>Action</p>
              <Button variant="danger" size='sm'>Delete</Button>
            </Col>
            <Col sm> <p>Item ID </p>
              <p>14521451</p></Col>

            <Col sm> <p>Item Name</p>
              <p>Teh Obeng</p></Col>
            <Col> <p> Quantity </p>
              <FormControl type='number' className='Kualiti' />
            </Col>
            <Col sm> <p>Grand Total </p></Col>

          </Row>
        </Card>
        <Col>
          <Button variant="warning" className='Tombol2'>Pay Now</Button>
        </Col>
      </Container>
    </>
  )
};

export default SalesComp;
