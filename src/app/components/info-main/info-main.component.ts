import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoMain } from '../../interfaces/infoMain-interface';
import { Cast } from '../../interfaces/cast.interface';

@Component({
  selector: 'app-info-main',
  templateUrl: './info-main.component.html',
  styleUrl: './info-main.component.scss'
})
export class InfoMainComponent {
  @Input() showInfo: InfoMain;
  @Output() toggleCastEvent = new EventEmitter<boolean>();

  showCast: boolean = false;

  toggleCast() {
    this.showCast = !this.showCast;
    this.toggleCastEvent.emit(this.showCast);
  }
} 
