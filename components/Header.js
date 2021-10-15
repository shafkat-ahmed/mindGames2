import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Header = (props) => {
    return (
        <View style={styles.bar}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
};

export default Header;

const styles=StyleSheet.create(
    {
        bar:{
            width:'100%',
            height:90,
            paddingTop:36,
            backgroundColor:'#f7287b',
            alignItems:'center',
            justifyContent:'center'

        },
        title:{
            color:'white',
            fontSize:18,
        }

    }
)
