import { FC, useRef } from 'react';
import cn from 'classnames';

import { IColumn, ITableData } from '../Textarea/types';
import Cell from './components/Cell/Cell.tsx';

import style from './styled.module.scss';

interface ITableProps<T> {
  data: ITableData<T>[];
  columns: IColumn<T>[];
}

const Table: FC<ITableProps<any>> = ({ data, columns }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const headerRef = useRef<HTMLTableRowElement>(null);
  const columnRef = useRef<HTMLTableCellElement>(null);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <table ref={tableRef} className={style.table}>
        <thead className={style.header}>
        <tr ref={headerRef} className={style.headerRow}>
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
              console.log(value, column.fixed);
              return (
                <td key={`${rowIndex}-${column.id as string}`} ref={columnRef} className={cn(style.cell, {
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

    </div>
  );
};

export default Table;

