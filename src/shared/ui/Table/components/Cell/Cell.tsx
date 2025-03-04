import { FC } from 'react';
import cn from 'classnames';

import style from './styled.module.scss';
import { TCellType } from '../../../Textarea/types';
import { boolToText } from '../../utils';

interface IButtonProps {
  type: TCellType;
  value: string | boolean;
}

const Cell: FC<IButtonProps> = ({ type = 'string', value }) => {
  return (
    <span className={cn(style.cell, {
      [style.success]: type === 'bool' && value,
      [style.error]: type === 'bool' && !value,
    })}> {boolToText(value)}</span>
  );
};

export default Cell;
