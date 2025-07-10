export interface FilterOption {
  label: string;
  value: string;
}

export interface Filter {
  label: string;
  type: 'radio' | 'checkbox';
  name: string;
  options: FilterOption[];
}
