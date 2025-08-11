import { tesloApi } from "../../config/api/tesloApi"
import type { TesloProduct } from "../../infrastructure/interfaces/teslo-product.response";
import { ProductMapper } from "../../infrastructure/mappers/product.mapper";

export const getProductById = async (id:string) => {
    try {
        const { data } = await tesloApi.get<TesloProduct>(`/products/${id}`);
        return ProductMapper.tesloProductToEntitie(data);
    } catch (error) {
        console.log(error);
        throw new Error("Error al optener el producto.");   
    }
}