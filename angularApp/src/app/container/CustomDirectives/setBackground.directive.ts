import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})

export class setBackground{
    constructor(private element: ElementRef, private renderer:Renderer2){ 
    }

    ngOnInit(){
        //  (this.element)
        // this.element.nativeElement.style.backgroundColor = 'red'

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow')
    }
}

// Dependency inhection