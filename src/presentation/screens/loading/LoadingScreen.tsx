import { Layout, Text } from '@ui-kitten/components';
import { Spinner } from '../../components/ui/Spinner';

export const LoadingScreen = () => {
    return (
        <Layout style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
            <Spinner size={70} />
            <Text >Cargndo...</Text>
        </Layout>
    );
}