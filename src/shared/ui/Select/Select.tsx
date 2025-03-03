import { FC, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import Arrow from '../assets/arrow.svg?react';
import style from './styled.module.scss';

interface Option {
    label: string;
    value: string;
}

interface ISelectProps {
    options: Option[];
    defaultValue?: Option['value'],
    id: string;
    onChange?: (value: string) => void;
    placeholder?: string
}

const Select: FC<ISelectProps> = ({ options, onChange, id, defaultValue, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(defaultValue || options[0]?.value || '');
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClick = () => setIsOpen(!isOpen);

    const handleSelect = ({ value }: Option) => () => {
        setValue(value);
        onChange?.(value);
        setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    const getValue = () => useMemo(() => options.find((option: Option) => option.value === value)?.label || placeholder || '', [placeholder, options, value]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div ref={selectRef} className={style.container}>
            <div id={id} onClick={handleClick} className={style.select}>
                <span className={style.value}>{getValue()}</span>

                <span className={classNames(style.arrow, {
                    [style.up]: isOpen,
                })}
                ><Arrow /></span>
            </div>
            {
                isOpen && (
                    <div className={style.options}>
                        {options.map((option) => (
                            <div
                                key={value}
                                className={classNames(style.option, {
                                    [style.selected]: option.value === value,
                                })}
                                onClick={handleSelect(option)}>{option.label}</div>
                        ))}
                    </div>
                )
            }
        </div>

    );
};

export default Select;
