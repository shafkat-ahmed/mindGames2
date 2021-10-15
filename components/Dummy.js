import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Dummy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
            <Text>Dummy text to check whats the problem</Text>
            <TextInput/>
            </View>
            <Button title="Dummy"/>
        </View>
        
    )
}
export default Dummy;

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ccc",
        flex:1,
        alignItems:'center'
    },
    inputBox:{
        backgroundColor:'#fff',
        alignItems:'center',
        width:'80%'
    }
})
