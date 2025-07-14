import {  AbstractControl, FormControl } from "@angular/forms";

export const noSpaceAllowed = (control:FormControl) => {
    if(control.value != null && control.value.indexOf(' ') != -1){
        return {noSpaceAllowed:true}
    }

    return null
}

export const checkUserName = (control: AbstractControl): Promise<any> => {
    return doesUserNameExist(control.value)
}

const doesUserNameExist = (userName:string) => {
    
    const userNames = ['johnSmith', 'Steve', 'Margot', 'Alex']

    return new Promise((resolve,_) => {
         (userNames)
         (userName)
        
        setTimeout(() => {
            if(userNames.includes(userName)){
                return resolve({userAlreadyExists: true})
            }else{
                return resolve(null)
            }
        }, (3000))
    })
}