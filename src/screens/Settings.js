import { StyleSheet, View, Switch } from 'react-native'
import { useDarkMode } from '../constants/DarkModeContext'
import React from 'react'
import Version from '../constants/Version'
import CustomText from "../components/CustomText"

const Settings = (props) => {
  const {isDarkModeEnabled, toggleDarkMode} = useDarkMode()
  return (
    <View style = {[styles.con,{backgroundColor: isDarkModeEnabled ? "black" : "white"}]}>
        <CustomText fontWeight="bold" fontSize = {30} position = "absolute" top = "10%" left = "8%">Settings</CustomText>
        <CustomText fontSize = {20} position = "absolute" top = "20%" left = "8%">Dark Mode</CustomText>
        <CustomText position ="absolute" top= "90%" left="8%" fontSize = {16} fontWeight="400">{Version}</CustomText>
        <Switch
        trackColor={{  true: 'lightgreen' }}  
        value={isDarkModeEnabled}
        onValueChange={toggleDarkMode}
        style={styles.switch} 
        />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    switch:{
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
        position:"absolute",
        top: "19%",
        left:"70%",
      },
      con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }
})
