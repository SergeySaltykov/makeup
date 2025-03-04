export interface Response {
  id: string;
  name: string;
  lastName: string;
  gender: 'M' | 'Ж';
  dateOfBirth: string,
  email: string,
  phone: string,
  registerChannel: string,
  participationConfirm: boolean,
  emailConfirm: boolean,
  phoneConfirm: boolean,
  checks: 1 | 0,
  prizes: 1 | 0,
}
