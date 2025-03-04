
export type TCellType =  'string' | 'number' | 'bool';

export interface IColumn<K> {
  id: keyof K,
  name: string,
  type: TCellType;
  fixed?: boolean;
}

export interface ITableData<T> {
  [key: string]: T;
}

