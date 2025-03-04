import { FC } from 'react';

// import style from './styled.module.scss';
import { columns, response } from '../constants';
import { Table } from '../../../../shared/ui';

const DataTable: FC = () => {
  return (
    <div>
      <Table data={response} columns={columns}/>
    </div>
  );
};

export default DataTable

