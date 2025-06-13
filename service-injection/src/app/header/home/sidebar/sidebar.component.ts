import { Component } from '@angular/core';
import { SubscriptionService } from '../../Services/Subscription.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private subscriptionService:SubscriptionService){

  }

  subscribeBtn(){
    this.subscriptionService.subscriptionClicked()
  }

}