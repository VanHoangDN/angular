import { Directive, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective {
  @Input('appHighlight') mauchu: string='';

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    // Nếu mauchu không có giá trị, gán giá trị mặc định là 'blue'
    this.highlight(this.mauchu || 'blue');
    // console.log('ngOnInit appHighlight by me '+this.mauchu);
    // this.el.nativeElement.style.color = this.mauchu;
  }
   private highlight(color: string): void {
    if (this.el && this.el.nativeElement) {
      console.log('ngOnInit appHighlight by me '+color);
      this.el.nativeElement.style.color = color;
    }
  }
}