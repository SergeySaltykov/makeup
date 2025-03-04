import { FC, useRef } from 'react';
import { IColumn, ITableData } from '../Textarea/types';

import style from './styled.module.scss';

interface ITableProps<T> {
  data: ITableData<T>[];
  columns: IColumn<T>[];
}

const Table: FC<ITableProps<any>> = ({ data, columns }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const headerRef = useRef<HTMLTableRowElement>(null);
  const columnRef = useRef<HTMLTableCellElement>(null);

  //colspan

  return (
    <div className={style.container}>
        <table ref={tableRef} className={style.table}>
          <thead className={style.header}>
          <tr ref={headerRef} className={style.headerRow}>
            {columns.map(({ id, name }) => (
              <th key={id as string} className={style.headerCell}><span className={style.headerContent}>{name}</span></th>
            ))}

          </tr>
          </thead>

          <tbody>
        {data.map((row, rowIndex) => (
          <tr className={style.row}>
              {columns.map((column) => {
                const value = row[column.id as string];
                return (
                  <td key={`${rowIndex}-${column.id as string}`} ref={columnRef} className={style.cell}>
                    <span className={style.content}>{value}</span>
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

