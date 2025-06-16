import { Injectable } from "@angular/core"

@Injectable()
export class ConfirmationMsgService{

    confirmationMsg(name:string){
        alert(`User ${name} created successfully`)
    }

}