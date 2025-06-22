import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useDarkMode } from '../../constants/DarkModeContext';

const IconButton = (props) => {
  
  const {isDarkModeEnabled} = useDarkMode()
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}
    style = {[styles.con,{top:props.top,left:props.left}]}>
        <Feather name= {props.name} size={props.size} 
        color = {isDarkModeEnabled ? "white": props.color} 
        />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
    con:{
        position:"absolute",
        zIndex: 1,
    }
})