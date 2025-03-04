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
          <thead className={style.thead}>
          <tr ref={headerRef} className={style.headRow}>
            {columns.map(({ id, name }) => (
              <th key={id as string} className={style.headCell}>{name}</th>
            ))}

          </tr>
          </thead>
        </table>

        <tbody>
        {data.map((row, rowIndex) => (
            <tr className={style.row}>
              {columns.map((column) => {
                const value = row[column.id as string];
                return (
                  <td key={`${rowIndex}-${column.id as string}`} ref={columnRef} className={style.cell}>
                    {value}
              </td>
                );
              })}
            </tr>
        ))}
        </tbody>
      </div>
  );
};

export default Table;

