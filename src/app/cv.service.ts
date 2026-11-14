import { Injectable, signal } from '@angular/core';
import { Cv } from './cv';

@Injectable({ providedIn: 'root' })
export class CvService {
  private cvsSignal = signal<Cv[]>([
    { id: 1, name: 'Sellaouti', firstname: 'Aymen', age: 40, cin: '12345678', job: 'trainer', path: 'aymen.jpg' },
    { id: 2, name: 'Sellaouti', firstname: 'Skander', age: 20, cin: '87654321', job: 'student', path: 'skander.jpg' },
    { id: 3, name: 'Worker', firstname: 'Cherche', age: 30, cin: '11223344', job: 'developer', path: 'cv.png' },
  ]);

  readonly cvs = this.cvsSignal.asReadonly(); // Expose the signal as a readonly signal, toute modification doit se faire via les méthodes du service

  getCvs(): Cv[] {
    return this.cvsSignal();
  }

  getCvById(id: number): Cv | undefined {
    return this.cvsSignal().find((cv) => cv.id === id);
  }
}