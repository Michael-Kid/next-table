import React, { memo, useState } from 'react';

interface Props {
  handleSorting: (sorting: string, colName: string) => void;
  colName: string;
}

const CustomTh = ({handleSorting, colName}: Props) => {
  const [sorting, setSorting] = useState('');
  const symbol = sorting ? (sorting === 'asc' ? '↑' : '↓') : '';

  const onClick = () => {
    setSorting((sorting) => {
      return sorting ? (sorting === 'asc' ? 'desc' : 'asc') : 'asc';
    });
    handleSorting(sorting, colName);
  }

  return (
    <td onClick={onClick}>{colName} {symbol}</td>
  )
}

export default memo(CustomTh);