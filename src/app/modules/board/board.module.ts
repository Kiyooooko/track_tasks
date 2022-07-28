import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { BoardRoutingModule } from './board.routing-module';

import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, MaterialModule, BoardRoutingModule],
  exports: [BoardComponent],
  providers: [],
})
export class BoardModule {}
