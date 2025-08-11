import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';
import { data } from '../../../actions/products/data';
import { Product } from '../../../domain/entities/products';

const dataRes = data as Product[]

export const HomeScreen = () => {
    // const { isLoading, data:products=[], error } = useQuery({
    //     queryKey: ['products', 'infinite'],
    //     staleTime: 1000*60*60,
    //     queryFn: () => getProductsByPage(0)
    // });

    const { isLoading, data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000*60*60,
        initialPageParam: 0,


        queryFn: async (params) => {
            console.log(params);
            return await getProductsByPage(params.pageParam);
        },
        getNextPageParam: (lastPage, allPage) => allPage.length
    });
    return (
        <MainLayout
            title='TesloShop - productos'
            subTitle='Aplicación administrativa'
        >   
            {isLoading
                ?   <FullScreenLoader />
                :   <ProductList  
                        products={data?.pages.flat()??[]} 
                        fetchNextPage={fetchNextPage}
                    />
            }
       </MainLayout>
    );
}
