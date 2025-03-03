import { ChangeEvent, FC, TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';

import style from './styled.module.scss';

const min = 36;
const max = 116;

interface ITextareaProps {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  minHeight?: number;
  maxHeight?: number;
  maxLength?: TextareaHTMLAttributes<HTMLTextAreaElement>['maxLength'];
  placeholder?: TextareaHTMLAttributes<HTMLTextAreaElement>['placeholder'];
}

const Textarea: FC<ITextareaProps> = (
  {
    label,
    onChange,
    value: propValue = '',
    id,
    minHeight = min,
    maxHeight = max,
    maxLength = 500,
    placeholder,
  }) => {
  const [value, setValue] = useState(propValue);
  const [textareaHeight, setHeight] = useState(minHeight);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      setHeight(newHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [value]);

  return (
    <div className={style.container}>
          {label && <label htmlFor={id} className={style.label}>{label}</label>}
      <textarea
        ref={textareaRef}
        id={id} name={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={style.textarea}
        style={{ height: `${textareaHeight}px` }}
        rows={1}
      />
        </div>
  )
    ;
};

export default Textarea;
