import { FC, useState, useEffect } from 'react';

import { columns } from '../constants';
import { Table } from '../../../../shared/ui';
import style from './styled.module.scss';
import { Response } from '../types';


const DataTable: FC = () => {
  const [data, setData] = useState<Response[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => fetch('/data.json')
      .then(r => r.json())
      .then(r => setData(r))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={style.container}>
      <h1 className={style.header}>Таблица</h1>
      <h3 className={style.description}>
        с вертикальным и горизонтальным скролом,
      закрепленной верхней строкой и первой колонкой
      </h3>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default DataTable;

