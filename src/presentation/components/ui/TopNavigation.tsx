import { Layout, Text } from '@ui-kitten/components';
import { Icon } from './Icon';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    title:string; 
    subTitle?:string;
    leftAction?:() => void, 
    leftActionIcon?:string,
    rightAction?:() => void, 
    rightActionIcon?:string,
}

export const TopNavigation = ({
    title, 
    subTitle, 
    leftAction,
    leftActionIcon,
    rightAction, 
    rightActionIcon
}:Props) => {
    const navigate = useNavigation<NavigationProp<RootStackParamList>>();
    const colorScheme = useColorScheme();
    return (
        <Layout style={styles.container}>
            <Layout style={styles.boxBtnLeft}>
                {navigate.canGoBack() &&
                      <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1}
                            ]}
                            onPress={() => navigate.goBack()}
                        >
                            <Icon 
                                name={leftActionIcon??'arrow-back-outline'} 
                                color={colorScheme === 'dark' ? 'white' : 'black'}
                                size={40}
                            />
                        </Pressable>
                    
                }
               
            </Layout>
            <Layout style={styles.boxTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </Layout>
            <Layout style={[styles.boxBtnLeft, {alignItems:'flex-end'}]}>
                {(rightActionIcon && rightAction) && 
                        <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1}
                            ]}
                        >
                            <Icon
                                name={rightActionIcon??''} 
                                color='white' 
                                size={40}
                            />
                        </Pressable>
                }
            </Layout>

        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    boxBtnLeft:{
        width: 50,
        height: 78,
        justifyContent:'center'
    },
    boxTitle: {
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        marginBottom: 2
    },
    subTitle: {
        fontSize: 14
    }
})