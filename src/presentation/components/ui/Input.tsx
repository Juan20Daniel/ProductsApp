import React, { useRef, useState, Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    state: string;
    placeholder: string;
    placeholderFocus: string;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    secureTextEntry?: boolean;
    setState: Dispatch<SetStateAction<string>>;
}

export const Input = ({
    state, 
    placeholder, 
    placeholderFocus, 
    keyboardType='default', 
    autoCapitalize='none',
    secureTextEntry=false,
    setState, 
}:Props) => {
    const [ isFocus, setIsFocus ] = useState(false);
    const inputRef = useRef<TextInput>(null);
    
    return (
         <View style={{...styles.inputContainer, borderColor: isFocus ? 'red': '#000'}}>
            <Text
                style={[styles.placeholder, isFocus && styles.focusPlaceholder]}>
                {isFocus 
                    ? placeholderFocus
                    : placeholder
                }
            </Text>
            <TextInput
                style={[styles.input, isFocus && styles.inputFocus]} 
                onChangeText={setState}
                onFocus={() => setIsFocus(true)}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                onBlur={() => {
                    state === '' && setIsFocus(false);
                }}
                value={state}
                ref={inputRef}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        marginTop: 20,
        height: 70, 
        borderRadius: 20, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderWidth:1,
    },
    placeholder: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
    },
    focusPlaceholder: {
        fontSize: 14,
        color: 'gray',
        transform: [{translateY:-20}]
    },
    input: {
        position: 'absolute', 
        zIndex: 1,
        height: 70, 
        width: '100%',
        color:'white', 
        borderRadius: 20,
        paddingLeft: 20,
    },
    inputFocus: {
        height: 45,
        paddingRight: 70,
        fontSize: 20,
        transform: [{translateY:10}]
    }
});