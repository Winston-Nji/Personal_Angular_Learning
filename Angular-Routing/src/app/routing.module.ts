import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuard } from "./Services/authguard.service";
import { AuthGuardFunction } from "./Services/authGuard";

const routes: Routes = [
    {path:'', redirectTo: 'Home', pathMatch: 'full'},
    {path:'Home', component: HomeComponent},
    {path:'About', component: AboutComponent},
    {path:'Contact', component: ContactComponent, canDeactivate:[AuthGuard]},
    {path: 'Courses', component:CoursesComponent},
    {path: 'Courses', canActivateChild: [AuthGuardFunction] ,children:[
        {path: 'Course/:id', component:CourseDetailComponent }, 
        {path: 'Checkout', component:CheckoutComponent},
    ]},
    // {path:'Courses/Course/:id', component:CourseDetailComponent},
    // {path:'Courses/Checkout', component:CheckoutComponent, canActivate:[AuthGuard]},
    {path: 'Login', component: LoginComponent},
    {path:'**', component: NotFoundComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule{

}