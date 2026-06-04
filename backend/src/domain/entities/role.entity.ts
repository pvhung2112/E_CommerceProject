export class roleEntity{
    private readonly id : string;
    private name : string;
    private permissionIds : string[];
    constructor(id : string, name : string, permissionIds : string[]){
        this.id = id;
        this.name = name;
        this.permissionIds = permissionIds;
    }
    getId() : string{
        return this.id;
    }
    getName() : string{
        return this.name;
    }
    getPermissionIds() : string[]{
        return this.permissionIds;
    }
    setName(name : string){
        this.name = name;
    }
    setPermissionIds(permissionIds : string[]){
        this.permissionIds = permissionIds;
    }

}