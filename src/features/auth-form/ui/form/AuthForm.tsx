import { FC } from 'react';
import {
  Input,
  Select,
  Textarea,
  Button,
} from '../../../../shared/ui';
import { country } from '../../../../shared/constants';

import style from './styled.module.scss';

const AuthForm: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.header}>Регистрация</h2>
        <Input required id="name" placeholder="Имя" />
        <Select options={country} defaultValue={country[0].value} id="country" />
        <Textarea id="description" placeholder="Коротко о себе" />
        <Button onClick={() => {
          }}>Continue</Button>
      </div>
    </div>
  );
};

export default AuthForm;

