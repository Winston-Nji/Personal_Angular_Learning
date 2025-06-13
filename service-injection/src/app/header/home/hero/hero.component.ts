import { Component, inject } from '@angular/core';
import { SubscriptionService } from '../../Services/Subscription.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  constructor(private subscriptionService:SubscriptionService){

  }

  subscribeBtn(){
    this.subscriptionService.subscriptionClicked()
  }

}