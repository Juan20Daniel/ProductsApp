import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../navigators/StackNavigator"
import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "../store/auth/useAuthStore";

export const AuthProvider = ({children}:PropsWithChildren) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { checkStatus, status } = useAuthStore();
    useEffect(() => {
        checkStatus();
    },[]);

    useEffect(() => {
        if(status !== 'checking') {
            if(status === 'authenticated') {
                navigation.reset({
                    index:0,
                    routes:[{name:'Home'}]
                });
            } else {
                 navigation.reset({
                    index:0,
                    routes:[{name:'Home'}]
                });
                // navigation.reset({
                //     index:0,
                //     routes:[{name:'Login'}]
                // });
            }
        }
    },[status]);

    return (
        <>
            {children}
        </>
    )
}
