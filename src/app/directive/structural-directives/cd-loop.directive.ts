import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ 
     selector: '[cdLoop]' 
})
export class CDLoopDecorator {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input('cdLoop') set loop(num: number) {
		for(var i=0; i < num; i++) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}
}	