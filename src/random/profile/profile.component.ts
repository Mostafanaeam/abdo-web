import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../random/interfaces/teacher.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() teacher!: Teacher;
  @Output() closeProfile = new EventEmitter<void>();
}
