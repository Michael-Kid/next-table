import React, { memo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Filter from '../features/Filter';;

interface Props {
  openModal: () => void;
  handleFilter: (value: string | undefined) => void;
}

const Header = ({ openModal, handleFilter }: Props) => {
  return (
    <Row>
      <Col md={{ span: 3, offset: 1 }}>
        <Button onClick={openModal} variant='outline-primary'>
          Добавить
        </Button>
      </Col>
      <Filter handleFilter={handleFilter} />
    </Row>
  )
}

export default memo(Header);