// import { Component, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Teacher } from '../interfaces/teacher.interface';
// import { TeacherCardComponent } from '../teacher-card/teacher-card.component';
// import { TEACHERS } from '../../data/mock-teachers';

// @Component({
//   selector: 'app-teachers-list',
//   standalone: true,
//   imports: [CommonModule, TeacherCardComponent],
//   templateUrl: './teachers-list.component.html',
//   styleUrls: ['./teachers-list.component.css'],
// })
// export class TeachersListComponent {
//   teachers: Teacher[] = TEACHERS; // ربطنا المتغير بالبيانات مباشرة
//   @Output() viewProfileClick = new EventEmitter<Teacher>();

//   onViewProfile(teacher: Teacher) {
//     this.viewProfileClick.emit(teacher);
//   }
// }
