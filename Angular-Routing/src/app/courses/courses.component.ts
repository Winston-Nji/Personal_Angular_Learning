import { Component, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[]

  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  searchQuery:string

  ngOnInit(){
    this.activeRoute.queryParams.subscribe(data =>  this.searchQuery =  data['search'])

    if(this.searchQuery === undefined){
      this.AllCourses = this.coursesService.courses;
    }else{
      this.AllCourses = this.coursesService.courses.filter(course => course.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }

    console.log(this.AllCourses)
  }

  returnToHome(){
    this.router.navigate(['Home'])
  }
}
