import React,{Component, useLayoutEffect} from 'react';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { useState, useEffect } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { 
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black 
  } from '@expo-google-fonts/noto-sans-kr';

import {useFonts} from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/Home';
import Home2 from './screens/Home2';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { TabView, SceneMap } from 'react-native-tab-view';
import Stack1 from './navigations/MainStack';
import TestStack from './navigations/TestStack';
import Profile from './screens/Profile';
import Feed from './screens/Feed';

const FirstRoute = () => (
    <ScrollView style={{  backgroundColor: '#ff4081', height : 1000, width : wp('100%') }} >
        <Text>1111</Text>
    </ScrollView>
  );
  
  const SecondRoute = () => (
    <ScrollView style={{  backgroundColor: '#673ab7',height : 1000 , width : wp('100%') }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });



const App=() => {

    const [includeFontPadding, setIncludeFontPadding] = useState(false);
    const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
    let [fontsLoaded, error]= useFonts({
      NotoSansKR_100Thin,
      NotoSansKR_300Light,
      NotoSansKR_400Regular,
      NotoSansKR_500Medium,
      NotoSansKR_700Bold,
      NotoSansKR_900Black,
      
    });

    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const Container = createAppContainer(TestStack);
  
    return(
      <View style={{flex:1, backgroundColor : '#fff'}}>
        
        
        <Container/>
        
        
        
      </View>
      
    );
}

const styles = StyleSheet.create({
  
    scroll : {
        backgroundColor : 'red',
        
        width : wp('100%'),
        height : 2000,
        
      },
    
    top_bar : {
      backgroundColor : 'gray',
      //alignItems : 'center',
      justifyContent : 'center',
      width : wp('100%'),
      height : 70,
      //position: 'absolute',
      
      //zIndex: 1,
    },
    logo_text : {
      fontFamily: 'NotoSansKR_700Bold',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 20,
      marginLeft: 100,
      //marginTop: 20,
    },
    box_1 : {
      backgroundColor : '#FFBF00',
      alignItems : 'center',
      justifyContent : 'center',
      width : wp('100%'),
      height : 300,
    },
    box_2 : {
      backgroundColor : '#fff',
      alignItems : 'center',
      //justifyContent : 'center',
      width : wp('100%'),
      height : 600,
    },
    box_2_title:{
      backgroundColor : '#fff',
      alignItems : 'center',
      justifyContent : 'center',
      width : wp('100%'),
      height : 100,
    },
  
    box_2_title_text : {
      fontFamily: 'NotoSansKR_700Bold',
      //backgroundColor : 'red',
      includeFontPadding: false,
      //lineHeight: 20,
      fontSize: 40,
      //marginLeft: 100,
      //marginTop: 20,
    },
  
  });

export default App;
