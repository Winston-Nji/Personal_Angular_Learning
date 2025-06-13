import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-lifeCycle';

  searchText:string = ''

  setSearch(value:string){
    this.searchText=value
  }
}
