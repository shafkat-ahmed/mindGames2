import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameScreen from './components/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber,setUserNumber]=useState();

  const startGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber);
  };
  let content=<StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber){
    content=<GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.container}>
      <Header title="Mind Games"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
});