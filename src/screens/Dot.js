import React, { useState, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, FlatList, Touchable } from 'react-native';

const Dot = ({ marginRight = 0, delay = 0, word = '', size=0, }) => {
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
    outputRange: ['rgb(0, 0, 0)', 'rgb(230, 230, 230)', 'rgb(230, 230, 230)', 'rgb(0, 0, 0)']
  });

  return (
    
    <Animated.Text style={{color: dotInterpolate,
                            marginRight: marginRight,
                            fontSize : size,
                            fontFamily: 'NotoSansKR_500Medium',
                            includeFontPadding: false,

                            }}>{word}</Animated.Text>
  );
};

const styles = StyleSheet.create({
  
});

export default Dot;