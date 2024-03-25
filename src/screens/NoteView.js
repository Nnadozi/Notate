import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconButton from '../components/buttons/IconButton'
import CustomText from '../components/CustomText'

const NoteView = () => {
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
      <SafeAreaView backgroundColor = "white"/>
      <View className = "flex-1 justify-center items-center bg-white">
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

const styles = StyleSheet.create({})