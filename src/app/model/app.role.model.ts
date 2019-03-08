export class Role {
  constructor(
      public RoleId: string,
      public RoleName: string,
      public RoleStatus: string
  ){}
}

export const Roles: Array<Role> = new Array <Role>();
