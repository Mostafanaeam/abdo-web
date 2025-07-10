import { Teacher } from '../random/interfaces/teacher.interface';

export const TEACHERS: Teacher[] = [
  {
    name: 'أ. محمد',
    subjects: ['قرآن', 'تجويد'],
    price: '100 جنيه/الساعة',
    languages: ['عربي'],
    teachingMethod: 'أون لاين',
    img: 'placeholder.jpg',
    buttonText: 'عرض الملف',
    bio: 'مدرس قرآن معتمد بخبرة 10 سنوات في تدريس التجويد والقراءات.'
  },
  {
    name: 'أ. فاطمة',
    subjects: ['تجويد', 'عربي'],
    price: '120 جنيه/الساعة',
    languages: ['عربي', 'إنجليزي'],
    teachingMethod: 'وجها لوجه',
    img: 'placeholder.jpg',
    buttonText: 'عرض الملف',
    bio: 'معلمة لغة عربية وتجويد بخبرة واسعة في التعليم الفردي والجماعي.'
  },
];
