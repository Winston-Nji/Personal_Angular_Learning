import { UserModel } from '../models/user.model';

import { EventEmitter, Injectable } from "@angular/core"

@Injectable()
export class UserService {
    private users: UserModel[] = [
        new UserModel('Steve Smith', 'Male', 'Monthly', 'Active'),
        new UserModel('M Joe', 'Female', 'Yearly', 'active'),
        new UserModel('Kacob Heith', 'Male', 'Quartely', 'Active')
    ];

    getAllUsers(): UserModel[] {
        return this.users;
    }

    createNewUser(name: string, gender: string, subType: string, status: string): void {
        const newUser: UserModel = { name, gender, subType, status };
        this.users.push(newUser);
         ('User added:', newUser);
    }

    userServiceEmitter: EventEmitter<UserModel> = new EventEmitter<UserModel>()

    onUserDetailClickedEmit(user: UserModel){
        this.userServiceEmitter.emit(user)
    }


}
