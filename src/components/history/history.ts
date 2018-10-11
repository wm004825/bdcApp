import { Component, Input } from '@angular/core';

/**
 * 暂无历史记录
 */
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  @Input() txt:string; 

  constructor() {
     
  }

}
