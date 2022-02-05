import React, {useState, useEffect} from 'react';
import {
  Container,
  Card,
  Col,
  Button,
  Row,
  Form,

} from 'react-bootstrap'
import './LSP.css'
import axios from 'axios'

const ListSalesPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get(
          'https://api.umrah.ac.id/api/item/list/10/1', {
          headers: {
              Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjo4LCJ1c2VybmFtZSI6IkJyb21vIiwibmFtYSI6bnVsbCwiZXhwIjoxNjQ0NjcyNjM5fQ.E36vHbrfr8RDEhZPgW7G91ZfUAGTXRb1xmVeP6Labsw'
          }
      }
      ).then(response => { setData(response.data.data.data) })
          .catch(err => { })
  }, []);
  console.log(data, 'rawr')

  return (
    <>
      <Container>
        <h1 className='Judul'>List Sales</h1>
        <Card>
          <Col className='Atas'>
        <Button variant="primary" className='Baru'>New</Button>
        <Button variant="info">Refresh</Button>
        </Col>
        <Col> 
        <Form.Control type="text" placeholder="Search" className='Cari' />
          
        <Button variant="primary" className='Tengah'>Search</Button> </Col>
        </Card>

        <Card className='Kartu'>
          <Row className='Posisi'>
          <Col sm>
            <p>No</p>
            <p>1</p>
          </Col>

          <Col sm>
            <p>Action</p>
            <Button variant='primary' size="sm" className='Bawah'> Detail</Button>
            <Button variant='danger' size='sm'> Delete</Button>
          </Col>
          <Col sm> <p>Transaction Code</p></Col>
          <Col sm> <p>Customer</p></Col>
          <Col sm> <p>Transaction Date</p></Col>
          <Col sm> <p>Grand Total</p></Col>
          </Row>
        </Card>

      </Container>
    </>
  )
};

export default ListSalesPage