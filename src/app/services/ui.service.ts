import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  ontoggle(): Observable<any> {
    return this.subject.asObservable();
  }


}
