import React from 'react';
import {Container, Button, Form,Card

}from 'react-bootstrap'
const ItemPage = () => {
  return (
      <Container>
          <h1>Item</h1>
          <Card>
            <Button variant='primary' type='submit'>gass</Button>
            <Form.Control type="text" placeholder="Enter email" />
          </Card>


      </Container>
  )
};

export default ItemPage;
