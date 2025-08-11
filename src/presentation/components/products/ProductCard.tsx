import { Image, Pressable } from 'react-native';
import { Product } from '../../../domain/entities/products';
import { Card, Text } from '@ui-kitten/components';
import { FadeInImage } from '../ui/FadeInImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    product: Product;
}

export const ProductCard = ({product}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Card onPress={() => navigation.navigate('Product', {productId:product.id})} style={{flex:1, backgroundColor: '#F9F9F9', margin:3, height:300}}>
            {(product.images.length === 0)
                ?   <Image 
                        source={require('../../../assets/no-product-image.png')} 
                        style={{flex:1, height:200}}
                />
                :   <FadeInImage 
                        uri={product.images[0]}
                        style={{width:'100%', height:200}}
                    />
            }
            <Text style={{textAlign:'center'}} numberOfLines={2}>
                {product.title}
            </Text>
        </Card>
    );
}
