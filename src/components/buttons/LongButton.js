import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'
import { useDarkMode } from '../../constants/DarkModeContext'

const LongButton = (props) => {
  const {isDarkModeEnabled} = useDarkMode()
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style = {[styles.con,{backgroundColor:isDarkModeEnabled ? "white" : "black" }]}>
      <CustomText color = "white" fontWeight="500" fontSize = {20}>Create Note</CustomText>
    </TouchableOpacity>
  )
}

export default LongButton

const styles = StyleSheet.create({
    con:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        width:"90%",
        height:"8%",
        borderRadius:30,
        position:"absolute",
        top:"88%"
    },
})