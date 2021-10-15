import React, { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from './Card';


const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random()*(max-min))+min; 
    if(rndNum===exclude)
    {
        return generateRandomBetween(min,max,exclude);
    } else{
        return rndNum;
    }
}


const GameScreen = (props) => {
    const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userChoice));
    const currentLow=useRef(1);
    const currentHigh=useRef(100);


     const nextGuessHandler=(direction)=>{

        if((direction==='lower' && currentGuess<props.userChoice)||(direction==='higher' && currentGuess>props.userChoice))
        {
            Alert.alert('Don\'t lie!','Wrong Answer',[{text:'Sorry',style:'cancel'}]);
            return;
        }

        if(direction==='lower'){
            currentHigh.current=currentGuess;
        }
        else{
            currentLow.current=currentGuess;
        }
        const nextNum=generateRandomBetween(currentLow,currentHigh,currentGuess);
        setCurrentGuess(nextNum);
     };
    return (
  
            <View>
                <Card>
                <Text>Opponent's guess: {currentGuess}</Text>
                <View style={styles.buttonContainer}>
                <Button title="Greater" onPress={nextGuessHandler.bind(this,'higher')} />
                <Button title="Lower" onPress={nextGuessHandler.bind(this,'lower')} />
                </View>
                </Card>
            </View>

    )
}

export default GameScreen;

const styles=StyleSheet.create({

    buttonContainer:{
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    }

})
