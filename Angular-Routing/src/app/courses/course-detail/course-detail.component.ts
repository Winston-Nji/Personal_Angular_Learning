import { Component, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent{

  selectedCourse:Course
  courseId:number

  courseService = inject(CourseService)
  activeRoute = inject(ActivatedRoute)

  ngOnInit(){
    
    // // this.courseId = Number(this.activeRoute.snapshot.paramMap.get('id'))

    // this.activeRoute.paramMap.subscribe(data => this.courseId = Number(data.get('id')))

    // this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)

    // console.log(this.selectedCourse)

    this.activeRoute.paramMap.subscribe(data => this.courseId = Number(data.get('id')))  

    this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)

    console.log(this.selectedCourse, 'selectedCourse')
  
  }

}
