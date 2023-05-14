import { memo } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface Props {
  page: number;
  pageCount: number;
  handleNavigate: (direction: string) => void;
}

const Navigation = ({ page, pageCount, handleNavigate }: Props) => {
  return (
    <Pagination>
      <Pagination.First
        disabled={page === 1}
        onClick={() => handleNavigate('first')}
      />
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => handleNavigate('prev')}
      />
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next
        disabled={page === pageCount}
        onClick={() => handleNavigate('next')}
      />
      <Pagination.Last
        disabled={page === pageCount}
        onClick={() => handleNavigate('last')}
      />
    </Pagination>
  )
}

export default memo(Navigation);
