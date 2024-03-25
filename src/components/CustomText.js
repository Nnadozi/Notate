import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDarkMode } from '../constants/DarkModeContext';

const CustomText = (props) => {

  const {isDarkModeEnabled} = useDarkMode()
  const { children, fontWeight, fontSize, top, left,width,maxWidth,opacity } = props; 

  return (
    <Text numberOfLines={props.lines} style={{
      fontWeight: fontWeight,
      fontSize: fontSize,
      position: "absolute",
      color: isDarkModeEnabled ? (props.altColor || "white") : props.color,
      top: top,
      left: left,
      width:width,
      maxWidth:maxWidth,
      opacity:opacity,
    }}>
      {children} 
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
