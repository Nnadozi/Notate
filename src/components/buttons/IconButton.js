import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const IconButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}
    style = {[styles.con,{top:props.top,left:props.left}]}>
        <Feather name= {props.name} size={props.size} color = {props.color} />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
    con:{
        position:"absolute",
    }
})