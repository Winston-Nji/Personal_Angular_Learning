import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText:string = ``
  
  // updateSearch(event:any){
  //   this.searchText = event.target.value
  // }

  @Output()
  searchEmmiter: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChange(){
    this.searchEmmiter.emit(this.searchText)
  }

  setSearchText(value: string){
    this.searchEmmiter.emit(value)
    this.searchText = value
  }
}
