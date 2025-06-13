import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})

export class setBackground{
    constructor(private element: ElementRef){ 
    }

    ngOnInit(){
        console.log(this.element)
        this.element.nativeElement.style.backgroundColor = 'red'
    }
}

// Dependency inhection