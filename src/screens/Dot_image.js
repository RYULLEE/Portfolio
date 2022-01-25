import React, { useState, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, FlatList, Touchable } from 'react-native';

const Dot_image = ({ _marginRight = 0,_marginLeft=0, delay = 0, _width=0, _height=0,url='',_color='',_marginTop=0, }) => {
  const [dotColor, setDotColor] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.timing(dotColor, {
          toValue: 1,
          duration: 4000
        })
      )
    ]).start();
  }, []);

  const dotInterpolate = dotColor.interpolate({
    inputRange: [0, .2, .4, .6,.8, 1],
    outputRange: [0, .5, 1, 1,.5, 0]
  });

  return (
    
    <Animated.Image style={{opacity: dotInterpolate,
      tintColor : _color,
      marginRight: _marginRight,
      marginTop : _marginTop,
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