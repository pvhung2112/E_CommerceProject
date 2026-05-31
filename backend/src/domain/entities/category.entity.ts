export class categoryEntity{
    private readonly _id : string;
    private  title : string;
    private parentId ?: string;
    private status : string;
    private description ?: string;

    constructor(_id: string, title: string,  parentId: string | undefined, status: string, description: string | undefined) {
        this._id = _id;
        this.title = title;
        
        this.parentId = parentId;
        this.status = status;
        this.description = description;
    }
    getId(): string {
        return this._id;
    }   
    getTitle(): string {
        return this.title;
    }   
   
    getParentId(): string |undefined {
        return this.parentId;
    }
    getStatus(): string {
        return this.status;
    }
    getDescription(): string |undefined{
        return this.description;
    }  
    setTitle(title: string): void {
        this.title = title;
    }
    
    setParentId(parentId: string): void {  
        this.parentId = parentId;
    }
    setStatus(status: string): void {
        this.status = status;
    }
    setDescription(description: string): void {
        this.description = description;
    }

}
  
