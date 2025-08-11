import React, { useState } from 'react';
import { Layout, List } from '@ui-kitten/components';
import { ProductCard } from './ProductCard';
import type { Product } from '../../../domain/entities/products';
import { Spinner } from '../ui/Spinner';
import { RefreshControl } from 'react-native';
interface Props {
    products: Product[];
    fetchNextPage: () => void;
}

export const ProductList = ({products,fetchNextPage}:Props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const onPullToRefresh = async () => {
        setIsRefreshing(true);
        await new Promise(resolver => setTimeout(resolver, 1500));
        setIsRefreshing(false);

    }
    return (
        <List 
            data={products}
            numColumns={2}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({item}) => (
                <ProductCard product={item} />
            )}
            style={{backgroundColor: 'white'}}
            ListFooterComponent={() => (
                <Layout style={{height:150, width:'100%'}} >
                    <Spinner size={40} />
                </Layout>
            )}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.8}
            refreshControl={
                <RefreshControl 
                    refreshing={isRefreshing}
                    onRefresh={onPullToRefresh}
                />
            }
        />
    )
}
