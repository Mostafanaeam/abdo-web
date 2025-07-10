import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../random/interfaces/teacher.interface';

@Component({
  selector: 'app-teacher-card',
  template: `
    <div class="teacher-card">
      <img [src]="teacher.img" alt="{{ teacher.name }}">
      <h3>{{ teacher.name }}</h3>
      <p>{{ teacher.bio }}</p>
      <p>المواد: {{ teacher.subjects.join(', ') }}</p>
      <p>السعر: {{ teacher.price }}</p>
      <p>اللغات: {{ teacher.languages.join(', ') }}</p>
      <p>طريقة التدريس: {{ teacher.teachingMethod }}</p>
      <button (click)="viewProfile.emit(teacher)">
        {{ teacher.buttonText }}
      </button>
    </div>
  `,
  styleUrls: ['./teacher-card.component.css'],
})
export class TeacherCardComponent {
  @Input() teacher!: Teacher;
  @Output() viewProfile = new EventEmitter<Teacher>();
}
