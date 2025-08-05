import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { Text } from '@ui-kitten/components';

export const HomeScreen = () => {
    const { isLoading, data:products=[], error } = useQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000*60*60,
        queryFn: () => getProductsByPage(0)
    });
    return (
        <MainLayout
            title='TesloShop - productos'
            subTitle='Aplicación administrativa'
        >
            <Text>HomeScreen</Text>
       </MainLayout>
    );
}
