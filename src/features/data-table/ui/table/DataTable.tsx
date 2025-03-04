import { FC } from 'react';

import { columns, response } from '../constants';
import { Table } from '../../../../shared/ui';
import style from './styled.module.scss';

const DataTable: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Таблица</h1>
      <h3 className={style.description}>
        с вертикальным и горизонтальным скролом,
      закрепленной верхней строкой и первой колонкой
      </h3>
      <Table data={response} columns={columns} />
    </div>
  );
};

export default DataTable;

