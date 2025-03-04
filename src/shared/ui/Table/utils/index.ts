type TValue = boolean | string | number;

export function boolToText(value: TValue): TValue {
  if (typeof value === 'boolean') {
    return value ? 'Да' : 'Нет';
  } else {
    return value;
  }
}
