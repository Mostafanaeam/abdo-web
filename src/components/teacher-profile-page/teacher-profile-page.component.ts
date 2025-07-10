import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/locales/ar'; // Import Arabic locale
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher-profile-page',
  standalone: true,
  imports: [FullCalendarModule, RouterModule],
  templateUrl: './teacher-profile-page.component.html',
  styleUrl: './teacher-profile-page.component.css',
})
export class TeacherProfilePageComponent {
  calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    slotMinTime: "12:00:00",
    slotMaxTime: "22:00:00",
    locale: 'ar',
    timeZone: 'Africa/Cairo',
    events: [
      { title: 'متاح', start: '2025-07-12T17:00:00', end: '2025-07-12T18:00:00' },
      { title: 'محجوز', start: '2025-07-13T19:00:00', end: '2025-07-13T20:30:00' }
    ]
  };
}
