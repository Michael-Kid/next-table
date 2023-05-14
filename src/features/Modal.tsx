import React, { memo, useCallback, useRef, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { validateForm } from '@/utils';

interface Props {
  closeModal: () => void;
  addPerson: (data: any) => void;
}

const CustomModal = ({closeModal, addPerson}: Props) => {
  const idRef: React.RefObject<HTMLInputElement> = useRef(null);
  const firstNameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const lastNameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const emailRef: React.RefObject<HTMLInputElement> = useRef(null);
  const phoneRef: React.RefObject<HTMLInputElement> = useRef(null);

  const [error, setError] = useState<any>(null);

  const handleSubmit = useCallback(() => {
    const person = {
      id: idRef?.current?.value,
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      email: emailRef?.current?.value,
      phone: phoneRef?.current?.value,
    }
    const error = validateForm(person);
    if (error) {
      setError(error);
    } else {
      addPerson(person);
      closeModal();
    }
  }, [])

  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Person to the Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type='number'
                placeholder='12'
                autoFocus
                ref={idRef}
                required
              />
              {error && error.field === 'id' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Andrey'
                autoFocus
                ref={firstNameRef}
                required
              />
              {error && error.field === 'firstName' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ivanov'
                autoFocus
                ref={lastNameRef}
                required
              />
              {error && error.field === 'lastName' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                autoFocus
                ref={emailRef}
                required
              />
              {error && error.field === 'email' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='number'
                placeholder='+70000000000'
                autoFocus
                ref={phoneRef}
                required
              />
              {error && error.field === 'phone' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Закрыть
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Добавить в таблицу
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default memo(CustomModal);
