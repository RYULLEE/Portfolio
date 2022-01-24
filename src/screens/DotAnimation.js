import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';
import Dot from './Dot';

const DotAnimation = () => {
    return (
      <Animated.View style={styles.wrapper}>
        <Dot marginRight={7} word={'a'}/>
        <Dot marginRight={7} delay={600} word={'b'}/>
        <Dot delay={1200} word={'c'}/>
      </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 77,
      height: 36
    }
  });
  
  export default DotAnimation;