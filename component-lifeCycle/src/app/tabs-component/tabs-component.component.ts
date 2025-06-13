import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrl: './tabs-component.component.scss'
})
export class TabsComponentComponent {

  tab:string = ''

    navigateToInformation(){
      this.tab = 'information'
    }

    navigateToService(){
    this.tab = "service"
  }

  navigateToPolicy(){
    this.tab = 'policy'
  }
}
