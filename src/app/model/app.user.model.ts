export class User{
  constructor(
      public _id: string,
      public Username: string,
      public Password: string,
      public EmailAddr: string,
      public RoleId: string
  ){}
}

export const Users: Array<User> = new Array <User>();
