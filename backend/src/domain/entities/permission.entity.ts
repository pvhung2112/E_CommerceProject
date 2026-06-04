export class permissionEntity{
    private id : string;
    private name : string;
    private group : string;
    private slug : string;
    constructor(id : string,name : string,group : string,slug : string){
        this.id = id;
        this.name = name;
        this.group = group;
        this.slug = slug;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getGroup(){
        return this.group;
    }
    getSlug(){
        return this.slug;
    }
    setName(name : string){
        this.name = name;
    }   
    setGroup(group : string){
        this.group = group;
    }
    setId(id : string){
        this.id = id;
    }
    setSlug(slug : string){
        this.slug = slug;
    }
}