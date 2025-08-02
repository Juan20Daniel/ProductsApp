import { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions, StyleSheet } from 'react-native';
import { Input } from '../../components/ui/Input';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
// import { API_URL } from '@env';

interface Props extends StackScreenProps<RootStackParamList, 'Login'>{}

export const LoginScreen = ({navigation}:Props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { height } = useWindowDimensions();
    // console.log(API_URL)
    return (
        <Layout style={{flex:1}}>
            <ScrollView style={{marginHorizontal:40}}>
                <Layout style={{paddingTop: height * 0.35}}>
                    <Text category='h1'>Ingresar</Text>
                    <Text category='p2'>Por favor, ingrese para continuar</Text>
                </Layout>
                <Input
                    state={email}
                    setState={setEmail}
                    placeholder='Ingresa tu correo electrónico'
                    placeholderFocus='Correo electrónico'
                />
                 <Input
                    state={password}
                    setState={setPassword}
                    placeholder='Ingresa tu contraseña'
                    placeholderFocus='Contraseña'
                    keyboardType='default'
                    secureTextEntry
                />
                <Layout style={{height: 30}} />
                <Button onPress={() => {}} style={{borderRadius: 20}}>
                    Ingresar
                </Button>
                <Layout style={{height: 30}} />
                <Layout style={{justifyContent:'center', flexDirection: 'row'}}>
                    <Text>¿No tienes cuenta?</Text>
                    <Text 
                        status='primary' 
                        category='s1'
                        onPress={() => navigation.navigate('Register')}   
                    > crea una</Text>
                </Layout>
            </ScrollView>
        </Layout>
       
    );
}
