import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDarkMode } from '../constants/DarkModeContext'
import IconButton from '../components/buttons/IconButton'
import CustomText from '../components/CustomText'

const NoteView = () => {

  const {isDarkModeEnabled} = useDarkMode()

  const nav = useNavigation()
  const route = useRoute()
  const [note,setNote] = useState({title:null,desc:null})

  useEffect(() => {
    if (route.params != null) {
      const { title, desc } = route.params
      setNote({title,desc})
    }
  }, [route.params])

  return (
    <>
      <SafeAreaView backgroundColor = {isDarkModeEnabled ? "black" : "white"}/>
      <View style = {[styles.con,{backgroundColor:isDarkModeEnabled ? "black" : "white"}]}>
        <IconButton onPress = {() => nav.goBack()} size = {30} name = "arrow-left" top = "3%" left = "5%"/>
        <CustomText fontSize = {30} fontWeight = "bold" top = "10%" left = "5%">{note.title}</CustomText>
        <CustomText fontSize = {20} top = "18%" left = "5%" maxWidth = "90%">
          {note.desc}
          </CustomText>
      </View>
    </>
  )
}

export default NoteView

const styles = StyleSheet.create({
  con:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})