import { Filter } from '../interfaces/filter.interface';

export const FILTERS: Filter[] = [
  {
    label: 'الجنس',
    type: 'radio',
    name: 'gender',
    options: [
      { label: 'معلم', value: 'male' },
      { label: 'معلمة', value: 'female' },
    ],
  },
  {
    label: 'المادة',
    type: 'checkbox',
    name: 'subject',
    options: [
      { label: 'عربي', value: 'arabic' },
      { label: 'قرآن', value: 'quran' },
      { label: 'تجويد', value: 'tajweed' },
      { label: 'قراءات', value: 'qiraat' },
      { label: 'فقه', value: 'fiqh' },
    ],
  },
  {
    label: 'طريقة التدريس',
    type: 'radio',
    name: 'teachingMethod',
    options: [
      { label: 'وجها لوجه', value: 'offline' },
      { label: 'أون لاين', value: 'online' },
    ],
  },
];
