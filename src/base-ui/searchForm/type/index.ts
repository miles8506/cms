type Type = 'password' | 'input' | 'datepicker' | 'select';

interface IformType {
  field: string;
  type: Type;
  label: string;
  placeholder?: string;
  options?: any[];
  otherOptions?: any;
}

export { IformType };
