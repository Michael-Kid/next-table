import { memo, useCallback, useMemo, useState } from 'react';
import { Table, OverlayTrigger, Popover } from 'react-bootstrap';
import CustomTh from '../entities/CustomTh';
import Navigation from '../features/Navigation';
import { MAX_USERS_PER_PAGE, colNames } from '@/const';
import { Person } from '@/entities/Person/interface';
import UserRow from '@/entities/UserRow';
import Header from './Header';

interface Props {
  data: Person[];
  openModal: () => void;
}

interface Sort {
  field: string;
  direction: string;
}

const CustomTable = ({ data, openModal }: Props) => {
  const [sorting, setSorting] = useState<Sort>({
    field: '',
    direction: ''
  });
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>('');

  const sortData = useCallback((sorting: string, colName: string) => {
    setSorting({
      field: colName,
      direction: sorting ? (sorting === 'asc' ? 'desc' : 'asc') : 'asc',
    });
  }, []);

  const handleNavigate = useCallback((direction: string) => {
    switch (direction) {
      case 'next': return setPage((prevPage) => prevPage + 1);
      case 'prev': return setPage((prevPage) => prevPage - 1);
      case 'first': return setPage(1);
      case 'last': return setPage(pageCount);
    }
  }, []);

  const handleFilter = useCallback((value: string | undefined) => {
    if (value !== undefined) {
      setFilter(value)
    }
  }, []);
  
  const filteredAndSortedData = useMemo(() => {
    let newData = [...data];
    if (filter) {
      newData = newData.filter((person) => {
        return [...Object.values(person)]
        .join('')
        .toLowerCase()
        .includes(filter.toLowerCase().trim());
      })
    }
    if (sorting.field) {
      const {field, direction} = sorting;
      newData = newData.sort((personA, personB) => {
        if (direction === 'asc') {
          return personA[field] > personB[field] ? 1 : -1;
        } else {
          return personA[field] < personB[field] ? 1 : -1;
        }
      })
    } 
    return newData;
  }, [data, sorting, filter]);
  
  const pageCount = useMemo(() => {
    return Math.ceil(filteredAndSortedData.length / MAX_USERS_PER_PAGE);
  }, [filteredAndSortedData]);

  return (
    <>
      <Header openModal={openModal} handleFilter={handleFilter} />
      <Table striped bordered hover>
        <thead>
          <tr>
            {colNames.map((name) => {
              return (
                <CustomTh key={name} handleSorting={sortData} colName={name} />
              )
            })}
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.length ? (
            filteredAndSortedData
              .filter(
                (_, index: number) =>
                  index < page * MAX_USERS_PER_PAGE &&
                  index >= (page - 1) * MAX_USERS_PER_PAGE
              )
              .map((user) => {
                return <UserRow key={user.id + user.phone} user={user} />
              })
          ) : (
            <tr>
              <td>Данные не найдены</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Navigation
        page={page}
        pageCount={pageCount}
        handleNavigate={handleNavigate}
      />
    </>
  )
}

export default memo(CustomTable);
