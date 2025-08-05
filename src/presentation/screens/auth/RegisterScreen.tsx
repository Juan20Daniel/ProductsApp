import { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions, StyleSheet, Alert } from 'react-native';
import { Input } from '../../components/ui/Input';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

export const RegisterScreen = ({navigation}:Props) => {
    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isInvalidForm, setIsInvalidForm ] = useState(true);
    const { register } = useAuthStore();
    const { height } = useWindowDimensions();
    useEffect(() => {
        if(fullname === '' || email === '' || password === '') {
            setIsInvalidForm(true);
        } else {
            setIsInvalidForm(false);
        }
    },[email, fullname, password]);
    const createCount = async () => {
        const wasSuccessful = await register(fullname, email, password);  
        if(wasSuccessful) return;
        Alert.alert('Error','Ocurrio un problema al crear la cuenta')
    }
    return (
        <Layout style={{flex:1}}>
            <ScrollView style={{marginHorizontal:40}}>
                <Layout style={{paddingTop: height * 0.25}}>
                    <Text category='h1'>Crear cuenta</Text>
                    <Text category='p2'>Por favor, ingrese los datos para continuar</Text>
                </Layout>
                <Input
                    state={fullname}
                    setState={setFullname}
                    placeholder='Ingresa tu nombre y apellidos'
                    placeholderFocus='Nombre y apellido'
                />
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
                <Button disabled={isInvalidForm} onPress={() => createCount()} style={{borderRadius: 20}}>
                    Crear cuenta
                </Button>
                <Layout style={{height: 30}} />
                <Layout style={{justifyContent:'center', flexDirection: 'row'}}>
                    <Text>¿Ya tienes cuenta?</Text>
                    <Text 
                        status='primary' 
                        category='s1'
                        onPress={() => navigation.goBack()}   
                    > inicia sesión</Text>
                </Layout>
            </ScrollView>
        </Layout>
       
    );
}

const styles = StyleSheet.create({
  
});