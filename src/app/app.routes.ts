import { Routes } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import {TeacherProfilePageComponent} from '../components/teacher-profile-page/teacher-profile-page.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'teacher', component: TeacherProfilePageComponent}
];
