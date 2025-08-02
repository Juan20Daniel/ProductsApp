import { Button, Layout, Text } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <Layout style={{marginTop: top+20, flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>HomeScreen</Text>
            <Button>
                Cerrar sesión
            </Button>
        </Layout>
    );
}
