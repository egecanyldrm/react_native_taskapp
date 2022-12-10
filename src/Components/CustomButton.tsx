import * as React from 'react';
import { Pressable, StyleSheet, Text, } from 'react-native';

export interface IAppProps {
    onPress(): void
    title: string
}

const CustomButton: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <Pressable style={style.button} onPress={props.onPress}>
            <Text style={style.text}> {props.title} </Text>
        </Pressable>

    )
}

export default CustomButton


const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 9,
        elevation: 3,
        backgroundColor: '#0C6DFD',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
