
export class UserModel {
  name: string;
  gender: string;
  subType: string;
  status: string;

  constructor(name: string, gender: string, subType: string, status: string) {
    this.name = name;
    this.gender = gender;
    this.subType = subType;
    this.status = status;
  }
} 
