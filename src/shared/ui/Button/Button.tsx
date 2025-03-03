import { FC, ReactNode} from 'react';

import style from './styled.module.scss';

interface IButtonProps {
    type?: 'submit' | 'button';
    onClick: () => void;
    children?: ReactNode;
}

const Button: FC<IButtonProps> = ({ type = 'button', onClick, children, ...rest }) => {

    const handleClick = () => {
        onClick?.();
    };

    return (
      <div className={style.container}>
           <button onClick={handleClick} type={type} className={style.button} {...rest} >{children}</button>
      </div>
    );
};

export default Button;
