export type CalendarRangeProps = {
  setDate: (date: any) => void;
};

export type CalendarPickerProps = {
  id: string;
  title: string;
  getDate: (date: Date) => void;
  active: string;
  setActive: (active: string) => void;
};

export type CurrencyTableProps = {
  data: any;
  setData: any;
};
