export interface Teacher {
  id: number;
  name: string;
  avatarUrl: string;
  hourlyRate: number;
  subjects: string[];
  languages: string[];
  onlineOffline: string;
  bio?: string;
  teachingMethod?: string;
  calendar?: string;
}
