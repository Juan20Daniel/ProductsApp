import { Layout, Text } from '@ui-kitten/components';
import { ActivityIndicator, useColorScheme } from 'react-native';

export const LoadingScreen = () => {
    const colorSchema = useColorScheme();
    return (
        <Layout style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
            <ActivityIndicator 
                size={60} 
                color={colorSchema === 'dark' ? 'white' : 'black'}
            />
            <Text >Cargndo...</Text>
        </Layout>
    );
}