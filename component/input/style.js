import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    addTask : {
        marginVertical : 20,
        marginHorizontal : 10,
        width : '100%',
        flexDirection : 'row'
    },
    input : {
        height : 44,
        width : '80%',
        backgroundColor : '#fff',
        borderRadius : 20,
        paddingHorizontal : 10,
        borderWidth : 1,
        borderColor : '#2c8eb1',
        color : '#000'
    },
    iconWraper : {
        backgroundColor : '#2c8eb1',
        height : 44,
        width : 44,
        marginLeft : 10,
        borderRadius : 44,
        justifyContent : 'center',
        alignItems : 'center'
    },
    icon : {
        fontSize : 30,
        color : '#fff'
    }
})
export default styles;