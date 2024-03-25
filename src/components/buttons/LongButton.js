import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'

const LongButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.9} style = {styles.con}>
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