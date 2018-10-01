import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ 
     selector: '[cdColor]' 
})
export class CDColorDirective implements AfterViewInit {
    @Input() cdColor: string;
    constructor(private elRef: ElementRef) { 
	}
	ngAfterViewInit(): void {
	   this.elRef.nativeElement.style.color = this.cdColor;
	}
}