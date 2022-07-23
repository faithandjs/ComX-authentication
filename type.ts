export enum typeOption {
  IND = 'Individual',
  CORP = 'Corporate',
}

export interface BILProps {
  children: JSX.Element;
  type?: typeOption;
  nextLink: string;
  prevLink?: string;
  level: 1 | 2 | 3 | 4;
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
