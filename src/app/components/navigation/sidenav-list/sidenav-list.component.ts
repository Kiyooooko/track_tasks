import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SidenavItem, sidenavItems } from './sidenav.config';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavListComponent {
  readonly sidenavItems = sidenavItems;

  @Output() sidenavClose = new EventEmitter();

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  trackByTitle(index: number, item: SidenavItem): string {
    return item.title;
  }
}
