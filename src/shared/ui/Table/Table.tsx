import { FC } from 'react';
import cn from 'classnames';

import { IColumn, ITableData } from '../Textarea/types';
import Cell from './components/Cell/Cell.tsx';

import style from './styled.module.scss';

interface ITableProps<T> {
  data: ITableData<T>[];
  columns: IColumn<T>[];
}

// можно конечно повыносить в отдельные компоненты row, header, cell(обертку), в рамка текущих задач не вижу пока смысла.
const Table: FC<ITableProps<any>> = ({ data, columns }) => {
  return (
    <div className={style.container}>
        <table className={style.table}>
        <thead className={style.header}>
        <tr className={style.headerRow}>
          {columns.map(({ id, name, fixed }) => {
            return (
              <th key={id as string} className={cn(style.headerCell, { [style.fixed]: fixed })}>
                <span className={style.headerContent}>{name}</span>
              </th>
            );
          })}

        </tr>
        </thead>

        <tbody>
      {data.map((row, rowIndex) => (
        <tr className={style.row}>
            {columns.map((column) => {
              const columnId = column.id as string;
              const value = row[columnId];
              const cellClass = cn(style.cell, { [style.fixed]: column.fixed });

              return (
                <td key={`${rowIndex}-${columnId}`} className={cellClass}>
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

