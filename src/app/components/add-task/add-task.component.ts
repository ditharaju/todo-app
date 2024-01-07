import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Task } from '../../model/task';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ButtonComponent, NgIf, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  showAddTask: boolean = false
  subscription: Subscription;
  taskForm!: FormGroup;
  alertToAddText: boolean = false;

  ngOnInit() {
    this.taskForm = new FormGroup({
      text: new FormControl('', Validators.required),
      day: new FormControl(''),
      reminder: new FormControl(false)
    });
  }
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    const { text, day, reminder } = this.taskForm.value
    if (!text) {
      alert('Please add a text');
      return;
    }
    else {
      this.onAddTask.emit(this.taskForm.value);
    }

    this.taskForm.reset();
  }

}
