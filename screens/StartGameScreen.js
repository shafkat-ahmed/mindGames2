import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Color from '../constants/Color';

const StartGameScreen = (props) => {
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();

    const numberInputHandler=(inputText)=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));

    }
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredValue);
        if(isNaN(chosenNumber)|| chosenNumber<=0|| chosenNumber>99){
            Alert.alert('Invalid Number!','Number has to be between 1 and 99.',[{text:'Okay',style:'Destructive',onPress:resetInputHandler}]);
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        

    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput=(
        <View>
            <Text>Chosen Number : {selectedNumber} </Text> 
            <Button title="Start Game" onPress={()=> props.onStartGame(selectedNumber)} /> 
        </View>
            );
    }


    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a newgame</Text>
            <Card style={styles.inputContainer}>          
                <Text>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCorrect={false} keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}><Button title="Reset" color={Color.accent} onPress={resetInputHandler} /></View>
                    <View style={styles.buttons}><Button title="Confirm" color={Color.primary} onPress={confirmInputHandler} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};

export default StartGameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
      
    },
    title:{
        marginVertical:10,
        padding:10
    },
    inputContainer:{

        width:300,
        maxWidth:'80%',
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:15
    },
    buttons:{
        width:110,
    },
    input:{
        width:50
    }

});
