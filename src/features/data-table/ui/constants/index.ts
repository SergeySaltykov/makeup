import { Response } from '../types';
import { IColumn } from '../../../../shared/ui/Textarea/types';

export const response: Response[] = [
  {
    id: '37890606',
    name: 'Иван',
    lastName: 'Иванов',
    gender: 'M',
    dateOfBirth: '18.12.1999',
    email: 'tienlapspktnd@gmail.com',
    phone: '+79038403153',
    registerChannel: 'Сайт',
    participationConfirm: false,
    emailConfirm: false,
    phoneConfirm: true,
    checks: 1,
    prizes: 0,
  },
];

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
    id: 'participationConfirm',
    name: 'Участие разрешено',
    type: 'string',
  },
  {
    id: 'phoneConfirm',
    name: 'Телефон подтвержен',
    type: 'string',
  },
  {
    id: 'checks',
    name: 'Чеки',
    type: 'number',
  },
  {
    id: 'prizes',
    name: 'Призы',
    type: 'number',
  }
]
