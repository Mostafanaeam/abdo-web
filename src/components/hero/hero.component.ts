import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface Teacher {
  id: string;
  name: string;
  hourlyRate: number;
  subjects: string[];
  languages: string[];
  image: string;
  teachingModes: {
join(arg0: string): unknown;
    online: boolean;
    offline: boolean;
  };
  bio?: string;
  rating?: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  searchForm: FormGroup;
  filterForm!: FormGroup;

  filters = [
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

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
      location: [''],
    });
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      gender: [''],
      subject: this.fb.group({
        arabic: [false],
        quran: [false],
        tajweed: [false],
        qiraat: [false],
        fiqh: [false],
      }),
      teachingMethod: [''],
    });
  }

  onSearch(): void {
    const { query, location } = this.searchForm.value;
    alert(`بحث عن: ${query} في: ${location}`);
  }

  applyFilters(): void {
    console.log('فلترة القيم:', this.filterForm.value);
    // هنا هتربط النتائج بالكروت لو شغال على Filtering حقيقي
  }

  resetFilters(): void {
    this.filterForm.reset();
  }
   teachers: Teacher[] = [
    {
      id: 't1',
      name: 'أ. محمد علي',
      hourlyRate: 80,
      subjects: ['قرآن', 'تجويد'],
      languages: ['العربية'],
      image: 'https://i.pravatar.cc/300?img=2',
      teachingModes: {
        online: true,
        offline: true,
        join: function (arg0: string): unknown {
          throw new Error('Function not implemented.');
        }
      },
      rating: 4.8,
    },
    {
      id: 't2',
      name: 'أ. آمنة حسين',
      hourlyRate: 100,
      subjects: ['عربي', 'قرآن', 'فقه'],
      languages: ['العربية', 'الإنجليزية'],
      image: 'https://i.pravatar.cc/300?img=2',
      teachingModes: {
        online: true,
        offline: false,
        join: function (arg0: string): unknown {
          throw new Error('Function not implemented.');
        }
      },
      rating: 4.9,
    },
    {
      id: 't3',
      name: 'أ. عمر الديب',
      hourlyRate: 90,
      subjects: ['قرآن', 'قراءات'],
      languages: ['العربية'],
      image: 'https://i.pravatar.cc/300?img=2',
      teachingModes: {
        online: false,
        offline: true,
        join: function (arg0: string): unknown {
          throw new Error('Function not implemented.');
        }
      },
      rating: 4.7,
    },
    {
      id: 't4',
      name: 'أ. ندى أحمد',
      hourlyRate: 110,
      subjects: ['عربي', 'فقه'],
      languages: ['العربية', 'الفرنسية'],
      image: 'https://i.pravatar.cc/300?img=2',
      teachingModes: {
        online: true,
        offline: true,
        join: function (arg0: string): unknown {
          throw new Error('Function not implemented.');
        }
      },
      rating: 5.0,
    }
  ];
}
