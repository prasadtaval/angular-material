import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ 
     selector: '[cdDelay]' 
})
export class CDDelayDirective {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input() set cdDelay(delay: number) {
	   this.viewContainer.clear();
	   setTimeout(() =>
  	   { 
    	   this.viewContainer.createEmbeddedView(this.templateRef);
	   }, delay);
	}
}	