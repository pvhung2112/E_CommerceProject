import { priceObj } from "../object-values/Price.obj";
export class productEntity {
    private readonly id: string;
    private title: string;
    private price: priceObj;
    private images: string[];
    private description: string;
    private stock : number;
    private sellerId : string;
    private status : string;
    private discountPercentage : number

    constructor(id: string, title: string, price: priceObj, images: string[], description: string, stock : number, sellerId : string, status : string, discountPercentage : number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.images = images;
        this.description = description;
        this.stock = stock;
        this.sellerId = sellerId;
        this.status = status;
        this.discountPercentage = discountPercentage;
        
    }
    getStock(): number {
        return this.stock;
    }
    getSellerId(): string {
        return this.sellerId;
    }
    getStatus(): string {
        return this.status;
    }
    getDiscountPercentage(): number {
        return this.discountPercentage;
    }
    
    getImages(): string[] {
        return this.images;
    }
    getDescription(): string {
        return this.description;
    }
    getId(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getPrice(): priceObj {
        return this.price;
    }
    setStock(stock: number): void {
        this.stock = stock;
    }   
    setSellerId(sellerId: string): void {
        this.sellerId = sellerId;
    }
    setStatus(status: string): void {
        this.status = status;
    }
    setDiscountPercentage(discountPercentage: number): void {
        this.discountPercentage = discountPercentage;
    }
    setTitle(title: string): void {
        this.title = title  ;
    }
    setPrice(price: priceObj): void {
        this.price = price;
    }

    setDescription(description: string): void {
        this.description = description;
    }
    setImages(images: string[]): void {
        this.images = images;
    }
}