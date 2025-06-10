import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText:string = `Women's Watch`
  
  updateSearch(event:any){
    this.searchText = event.target.value
  }
}
