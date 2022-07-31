export enum typeOption {
  IND = 'Individual',
  CORP = 'Corporate',
}
export interface BILProps {
  children: JSX.Element;
  level: 1 | 2 | 3 | 4;
  type?: typeOption;
}
export interface formWrapper {
  children: JSX.Element;
  nextLink: string;
  level: 1 | 2 | 3 | 4;
  type: typeOption;
  obj: INDV_FF | CORP_FF | INDV_SF | CORP_SF;
  evalProps: personalEvalProp[] | (confirmPasswordProp | personalEvalProp)[];
}
export interface layoutProps {
  children: JSX.Element;
}
export interface progressProps {
  children: JSX.Element;
  level: 1 | 2 | 3 | 4;
}
export interface cardProps {
  title: string;
  text: string;
  btnText: string;
  btnClass: string;
  to: string;
}
export interface INDV_FF {
  first_name: string;
  last_name: string;
  email: string;
}
export interface INDV_SF {
  password: string;
  auth_type: 'password';
  referral_code: string;
  phone: string;
  occupation: 'Farmer';
}
export interface CORP_FF {
  company_name: string;
  nature_of_business: string;
  date_of_incorporation: string;
}
export interface CORP_SF {
  email: string;
  password: string;
  auth_type: 'password';
  company_website: string;
  rc_number: 3245463454;
  company_phone: number;
  referral_code: string;
}
export interface set {
  value1: INDV_FF | CORP_FF;
  value2: INDV_SF | CORP_SF;
}
export interface signin {
  email: string;
  password: string;
}
export interface personalEvalProp {
  selector: string;
  name?: string;
  select?: boolean;
  alph?: boolean;
  num?: boolean;
  otp?: boolean
}
export interface confirmPasswordProp {
  selector: null;
  password_selector: string;
  confirm_selector: string;
}
