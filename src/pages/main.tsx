import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyTable from '@/widgets/CustomTable'
import CustomModal from '@/features/Modal';
import Loader from '@/shared/ui/Loader';
import { Person } from '@/entities/Person/interface';
import { URL_BIG, URL_SMALL } from '@/const';

const MainPage = () => {
  const { query } = useRouter();
  const [tableData, setData] = useState<Person[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = query.dataSize === 'small' ? URL_SMALL : URL_BIG;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  const addPerson = useCallback((personData: Person) => {
    const newData = [personData, ...tableData];
    setData(newData);
  }, [tableData]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const openModal = useCallback(() => {
    setShowModal(true)
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      <MyTable data={tableData} openModal={openModal}/>
      {showModal && (
        <CustomModal closeModal={closeModal} addPerson={addPerson} />
      )}
    </>
  )
}

export default MainPage;