'use client';

import { useEffect } from 'react';
import { useGlobalContext } from './Context/store';
import styles from './page.module.css';

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    setUserId('2');
    setData([
      { firstName: 'Tim' }, 
      { firstName: 'Kyle' }, 
      { firstName: 'Michael' }
    ]);
  }, [])

  return (
    <div className={styles.container}>
      <p>{userId}</p>
      <p>List:</p>
      {data.map((e, i) => <p key={i}>{e.firstName}</p>)}
    </div>
  )
}
