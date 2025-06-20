import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  router = inject(Router)

  searchCourse(value:string){
    // 
    this.router.navigate(['Courses'], {queryParams : {search : value}})

  }

}
