import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';

interface Props { 
    size?: number;
    color?: string;
}

export const Spinner = ({ size=20, color }:Props) => {
    const colorScheme = useColorScheme();

    const spinerColor = 
        !color 
            ? colorScheme === 'dark'
                ? 'white'
                : 'black'
            : color
    return (
        <ActivityIndicator 
            size={size}
            color={spinerColor}
        />
    );
}