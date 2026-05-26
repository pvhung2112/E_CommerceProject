import {productEntity} from "../../../domain/entities/product.entity"
export type productWithstats = {
    data : productEntity;
    rating: number;
    ratingCount: number;
    sold: number;
}