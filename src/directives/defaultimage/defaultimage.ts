import { LazyLoadImageDirective } from 'ng-lazyload-image';
import { Directive, ElementRef, NgZone, AfterContentInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
/**
 * 图片懒加载 设置默认图片和错误图片
 */
@Directive({
  selector: '[defaultimage]' // Attribute selector
})
export class DefaultimageDirective extends LazyLoadImageDirective {

  constructor(el: ElementRef, ngZone: NgZone) {
    super(el, ngZone);
    this.defaultImage = '../../assets/imgs/defaultImage.gif'; 
    this.onLoad.subscribe(() => {
      console.log('图片加载了');
    })
    this.ngOnChanges();
    this.ngAfterContentInit();
    this.ngOnDestroy();
  }  
}
