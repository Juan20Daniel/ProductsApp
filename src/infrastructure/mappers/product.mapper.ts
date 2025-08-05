import { API_URL } from '@env';
import { Product } from '../../domain/entities/products';
import { TesloProduct } from '../interfaces/teslo-product.response';
export class ProductMapper {
    static tesloProductToEntitie(tesloProduct:TesloProduct):Product {
        const images = tesloProduct.images.map(img => `${API_URL}/files/product/${img}`);
        return {
            id: tesloProduct.id,
            title: tesloProduct.title,
            price: tesloProduct.price,
            description: tesloProduct.description,
            slug: tesloProduct.slug,
            stock: tesloProduct.stock,
            sizes: tesloProduct.sizes,
            gender: tesloProduct.gender,
            tags: tesloProduct.tags,
            images: images,
        }
    }
}