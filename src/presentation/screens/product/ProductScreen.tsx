import { RootStackParamList } from '../../navigators/StackNavigator';
import { Button, ButtonGroup, Input, Layout} from '@ui-kitten/components';
import { MainLayout } from '../../layouts/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { StackScreenProps } from '@react-navigation/stack';
import { useRef } from 'react';
import { FlatList, ScrollView, useColorScheme, useWindowDimensions } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { Gender, Size } from '../../../domain/entities/products';

const size:Size[] = [
    Size.L, Size.M, Size.S, Size.Xl, Size.Xs, Size.Xxl
];
const genrders:Gender[] = [
    Gender.Kid, Gender.Men, Gender.Women
];

interface Props extends StackScreenProps<RootStackParamList,'Product'>{}

export const ProductScreen = ({route}:Props) => {
    const productIdRef = useRef(route.params.productId);
    const width = useWindowDimensions().width;
    
    const { isLoading, data:product } = useQuery({
        queryKey: ['product', productIdRef.current],
        staleTime: 1000*60*30,
        queryFn:() => getProductById(productIdRef.current)
    });
    return (
       <MainLayout
            title={product?.title??''}
            subTitle='Producto'
        >
            <ScrollView style={{flex:1}}>
                <FlatList 
                    data={product?.images}
                    horizontal
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    renderItem={({item}) => (
                        <FadeInImage 
                            uri={item} 
                            style={{width:width-20, height: 300, marginHorizontal:10}}
                        />
                    )}
                />
                <Layout style={{marginHorizontal: 10}}>
                    <Input 
                        label='Título'
                        value={product?.title}
                        style={{marginVertical: 5}} 
                    />
                    <Input 
                        label='Slug'
                        value={product?.slug}
                        style={{marginVertical: 5}} 
                    />
                    <Input 
                        label='Descripción'
                        value={product?.description}
                        multiline
                        numberOfLines={5}
                        style={{marginVertical: 5}} 
                    />
                </Layout>
                <Layout style={{marginHorizontal:10, flexDirection: 'row', gap:10}}>
                    <Input 
                        label='Precio'
                        value={product?.price.toString()}
                        style={{marginVertical: 5, flex:1}} 
                    />
                    <Input 
                        label='Inventario'
                        value={product?.stock.toString()}
                        style={{marginVertical: 5, flex:1}} 
                    />
                </Layout>
                <ButtonGroup 
                    style={{marginHorizontal: 10, marginTop: 20}}
                    appearance='outline'
                >
                    {size.map(size => (
                        <Button 
                            key={size}
                            style={{flex: 1, backgroundColor: false ? 'blue' : undefined}}
                        >
                            {size}
                        </Button>
                    ))}
                </ButtonGroup>
            </ScrollView>
       </MainLayout>
    );
}
