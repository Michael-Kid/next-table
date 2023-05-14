import { memo, useRef } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

interface Props {
  handleFilter: (value: string | undefined) => void;
} 

const Filter = ({ handleFilter }: Props) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  return (
    <>
      <Col >
        <Form.Control placeholder='Фильтрация' ref={inputRef} />
      </Col>
      <Col>
        <Button variant='outline-primary' onClick={() => handleFilter(inputRef?.current?.value)}>
          Найти
        </Button>
      </Col>
    </>
  )
}

export default memo(Filter);
