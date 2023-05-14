import React, { memo } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Person } from './Person/interface';

interface Props {
  user: Person
}

const getPopOver = (user: Person) => {
  return (
    <Popover>
      {/* <Popover.Header as='h3'>Popover right</Popover.Header> */}
      <Popover.Body>
        <h6>
          Выбран пользователь{' '}
          <b>
            {user.firstName} {user.lastName}
          </b>
        </h6>
        <h6>
          Описание:
          <textarea
            value={user.description ? user.description : 'lorem'}
            readOnly={true}
          />
        </h6>
        <h6>
          Адрес проживания:{' '}
          <b>{user.address ? user.address.streetAddress : 'China'}</b>
        </h6>
        <h6>
          Город: <b>{user.address ? user.address.city : 'Beijing'}</b>
        </h6>
        <h6>
          Провинция/штат:{' '}
          <b>{user.address ? user.address.state : 'North China'}</b>
        </h6>
        <h6>
          Индекс: <b>{user.address ? user.address.zip : '1245678'}</b>
        </h6>
      </Popover.Body>
    </Popover>
  )
}

const UserRow = ({user}: Props) => {
  return (
    <OverlayTrigger
      trigger='click'
      rootClose
      placement='bottom'
      overlay={getPopOver(user)}
      key={user.id + user.phone}
    >
      <tr>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    </OverlayTrigger>
  )
}

export default memo(UserRow);