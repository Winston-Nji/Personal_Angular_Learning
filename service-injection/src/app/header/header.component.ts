
import { Component } from '@angular/core';
import { SubscriptionService } from './Services/Subscription.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl : './header.component.scss'
})
export class HeaderComponent {
  selectedTab: string = 'home';

  constructor(private subscriptionService: SubscriptionService){

  }

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  subscribeBtn(){
    this.subscriptionService.subscriptionClicked()
  }


}