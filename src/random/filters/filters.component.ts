import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FILTERS } from '../data/filters-options';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  filters = FILTERS;
  filterForm: FormGroup;

  @Output() filtersChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    const group: any = {};
    this.filters.forEach(f => {
      if (f.type === 'checkbox') {
        group[f.name] = this.fb.group({});
        f.options.forEach(opt => {
          group[f.name].addControl(opt.value, this.fb.control(false));
        });
      } else {
        group[f.name] = [''];
      }
    });
    this.filterForm = this.fb.group(group);
  }

  applyFilters() {
    this.filtersChanged.emit(this.filterForm.value);
  }

  resetFilters() {
    this.filterForm.reset();
    this.applyFilters();
  }
}
