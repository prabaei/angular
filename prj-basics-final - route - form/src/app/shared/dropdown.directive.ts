import { Directive, HostBinding, HostListener, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector:"[appDropdown]"
})
export class dropdownDirective implements OnInit{
    constructor(private elRef: ElementRef) {}
    @HostBinding("class.open") isOpen:boolean=false;

    @HostListener("document:click",["$event"])onclick(event:Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
ngOnInit(){
    this.isOpen=false;
}
}