import Link from 'next/link';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Index = () => {
  return (
    <Container className='vh-100 d-flex flex-column justify-content-md-center'>
      <Col lg='auto'>
        <h4 className='text-center'>Какой массив данных отобразить?</h4>
      </Col>
      <Row className='justify-content-md-center'>
        <Col xs lg='2' key='big'>
          <Link href={{ pathname: '/main', query: { dataSize: 'big' } }}>
            <Button variant='outline-primary'>Большой массив данных</Button>
          </Link>
        </Col>

        <Col xs lg='2' key='small'>
          <Link href={{ pathname: '/main', query: { dataSize: 'small' } }}>
            <Button variant='outline-danger'>Маленький массив данных</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Index;