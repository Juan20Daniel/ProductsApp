import { tesloApi } from "../../config/api/tesloApi";
import { ProductMapper } from "../../infrastructure/mappers/product.mapper";
import type { Product } from "../../domain/entities/products";
import type { TesloProduct } from "../../infrastructure/interfaces/teslo-product.response";
export const getProductsByPage = async (page:number, limit:number=20):Promise<Product[]> => {
    try {
        const { data } = await tesloApi.get<TesloProduct[]>('/products',{
            params: {
                offset:page*10,
                limit:limit
            }
        });
        const products = data.map(product => {
            return ProductMapper.tesloProductToEntitie(product);
        });
        return products;
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los productos.");
    }
}






