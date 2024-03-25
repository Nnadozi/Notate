import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomText = (props) => {
  const { children, fontWeight, fontSize, top, left,color,width,maxWidth } = props; 

  return (
    <Text numberOfLines={props.lines} style={{
      fontWeight: fontWeight,
      fontSize: fontSize,
      position: "absolute",
      color:color,
      top: top,
      left: left,
      width:width,
      maxWidth:maxWidth
    }}>
      {children} 
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
