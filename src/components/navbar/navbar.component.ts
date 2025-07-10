import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks = [

  ];
  languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
  ];
  selectedLang = 'ar';
  langDropdownOpen = false;

  toggleLangDropdown() {
    this.langDropdownOpen = !this.langDropdownOpen;
  }

  selectLang(code: string) {
    this.selectedLang = code;
    this.langDropdownOpen = false;
    // هنا يمكن إضافة منطق تغيير اللغة لاحقاً
  }

  getSelectedLangLabel(): string {
    const lang = this.languages.find(l => l.code === this.selectedLang);
    return lang ? lang.label : '';
  }
}
