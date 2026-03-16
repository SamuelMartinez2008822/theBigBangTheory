import { Component, Input } from '@angular/core';
import { InfoMain } from '../../interfaces/infoMain-interface';

@Component({
  selector: 'app-info-main',
  templateUrl: './info-main.component.html',
  styleUrl: './info-main.component.scss'
})
export class InfoMainComponent {
  @Input() showInfo: InfoMain;
}
