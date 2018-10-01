import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ 
     selector: '[cdIf]' 
})
export class CDIfDirective {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input() set cdIf(condition: boolean) {
	   if (condition) {
		  this.viewContainer.createEmbeddedView(this.templateRef);
	   } else {
		  this.viewContainer.clear();
	  } 
	}
}	