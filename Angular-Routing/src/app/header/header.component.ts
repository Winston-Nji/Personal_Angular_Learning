import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

activeRoute: ActivatedRoute = inject(ActivatedRoute)

  jumpTo(section:string){
      document.getElementById(section).scrollIntoView({behavior:'smooth'})
      
    }

  ngOnInit(){
    this.activeRoute.fragment.subscribe((data) => {
      this.jumpTo(data)
      console.log(data)
    })
  }

  
}
