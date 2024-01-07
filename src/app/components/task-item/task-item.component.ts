import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task';
import { IconDefinition, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FaIconComponent, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input()
  task: Task = {
    text: '',
    day: '',
    reminder: false
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes: IconDefinition = faTimes;

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  toggleReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
