import { ChangeEvent, FC, useState } from 'react';
import { message } from '../../constants';

import style from './styled.module.scss';

interface IInputProps {
    id: string;
    type?: 'text';
    label?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    required?: boolean;
}

const Input: FC<IInputProps> = ({ type, label, placeholder, onChange, id, required, value: propValue }) => {
    const [value, setValue] = useState(propValue || '');
    const [error, setError] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setError('');
        onChange?.(e);
    };
    const handleBlur = (_: ChangeEvent<HTMLInputElement>) => {
        if (required && !value.trim()) {
            setError(message.error.required)
        }
    };

    return (
        <div className={style.container}>
          {label && <label htmlFor={id} className={style.label}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
                className={style.input}
            />
            {error && <span className={style.errorMessage}>{error}</span>}
        </div>

    );
};

export default Input;
