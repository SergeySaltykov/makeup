import { Response } from '../types';
import { IColumn } from '../../../../shared/ui/Textarea/types';

// можно еще в конфиг прописать шириру колонок
export const columns: IColumn<Response>[] = [
  {
    id: 'id',
    name: 'ID',
    type: 'string',
    fixed: true,
  },
  {
    id: 'name',
    name: 'Имя',
    type: 'string',
  },
  {
    id: 'lastName',
    name: 'Фамилия',
    type: 'string',
  },
  {
    id: 'gender',
    name: 'Пол',
    type: 'string',
  },
  {
    id: 'dateOfBirth',
    name: 'День рождения',
    type: 'string',
  },
  {
    id: 'email',
    name: 'Email',
    type: 'string',
  },
  {
    id: 'phone',
    name: 'Телефон',
    type: 'string',
  },
  {
    id: 'registerChannel',
    name: 'Канал регистрации',
    type: 'string',
  },
  {
    id: 'participationConfirm',
    name: 'Участие разрешено',
    type: 'bool',
  },
  {
    id: 'emailConfirm',
    name: 'Email подтвержден',
    type: 'bool',
  },
  {
    id: 'phoneConfirm',
    name: 'Телефон подтвержден',
    type: 'bool',
  },
  {
    id: 'checks',
    name: 'Чеки',
    type: 'string',
  },
  {
    id: 'prizes',
    name: 'Призы',
    type: 'string',
  },
];
