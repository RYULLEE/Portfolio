import React, { useState, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, FlatList, Touchable } from 'react-native';

const Dot_image = ({ _marginRight = 0,_marginLeft=0, delay = 0, _width=0, _height=0,url='',_color='', }) => {
  const [dotColor, setDotColor] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.timing(dotColor, {
          toValue: 1,
          duration: 2000
        })
      )
    ]).start();
  }, []);

  const dotInterpolate = dotColor.interpolate({
    inputRange: [0, .1, .9, 1],
    outputRange: [0, .1, .9, 1]
  });

  return (
    
    <Animated.Image style={{opacity: dotInterpolate,
      tintColor : _color,
      marginRight: _marginRight,
      width : _width,
      height : _height,
      
      }}
      source={url}
      >
        </Animated.Image>
        
          
      
  );
};
/*
<Image
style={{ width : 1000, height : 1000, marginRight : 100, tintColor: dotInterpolate}}
source={url}
/>
*/
const styles = StyleSheet.create({
  
});

export default Dot_image;