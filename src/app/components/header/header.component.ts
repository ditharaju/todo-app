import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faStickyNote } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgClass, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = 'Task tracker';
  showAddTask: boolean = false
  subscription!: Subscription;
  faStickyNote: IconDefinition = faStickyNote;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddTask = value));
  }

  addButton() {
    this.uiService.toggleAddTask();
  }
}
