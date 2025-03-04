import { FC } from 'react';
import cn from 'classnames';

import { IColumn, ITableData } from '../Textarea/types';
import Cell from './components/Cell/Cell.tsx';

import style from './styled.module.scss';

interface ITableProps<T> {
  data: ITableData<T>[];
  columns: IColumn<T>[];
}

const Table: FC<ITableProps<any>> = ({ data, columns }) => {
  return (
    <div className={style.container}>
        <table className={style.table}>
        <thead className={style.header}>
        <tr className={style.headerRow}>
          {columns.map(({ id, name, fixed }) => (
            <th key={id as string} className={cn(style.headerCell, { [style.fixed]: fixed })}><span className={style.headerContent}>{name}</span></th>
          ))}

        </tr>
        </thead>

        <tbody>
      {data.map((row, rowIndex) => (
        <tr className={style.row}>
            {columns.map((column) => {
              const value = row[column.id as string];
              return (
                <td key={`${rowIndex}-${column.id as string}`} className={cn(style.cell, {
                  [style.fixed]: column.fixed
                })}>
               <Cell type={column.type} value={value} />
            </td>
              );
            })}
          </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
};

export default Table;

