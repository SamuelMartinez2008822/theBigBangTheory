import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast.interface';

@Component({
  selector: 'app-list-cast',
  templateUrl: './list-cast.component.html',
  styleUrl: './list-cast.component.scss'
})
export class ListCastComponent {
  @Input() listMembers: Cast[];
}
