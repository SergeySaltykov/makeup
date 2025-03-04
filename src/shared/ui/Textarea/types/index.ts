export interface IColumn<K> {
  id: keyof K,
  name: string,
  type: 'string' | 'number' | 'bool';
  fixed?: boolean;
}

export interface ITableData<T> {
  [key: string]: T;
}
