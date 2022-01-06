import React from 'react';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { useState, useEffect } from 'react';
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
//import { NavigationContainer } from '@react-navigation/native';
//import MainStack from './navigations/MainStack';
//import { ClassicHeader } from "@freakycoder/react-native-header-view";
//import { AppleHeader } from "@freakycoder/react-native-header-view";

import ModernHeader from "react-native-modern-header";
import ElegantHeader from "react-native-elegant-header";

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={{  backgroundColor: '#ff4081', height : 1000, width : wp('100%') }} />
  );
  
  const SecondRoute = () => (
    <View style={{  backgroundColor: '#673ab7',height : 1000 , width : wp('100%') }} />
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
  
    return(
        <SafeAreaView>
            <View style={styles.top_bar} >
            <TouchableOpacity>
            <Text style={styles.logo_text}>
                RYUL's Portfolio
            </Text>
            </TouchableOpacity>
        </View>
        <ScrollView>

        
        
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />

        <View style={{width : wp('100%'), height : 400,}}>
        <SwiperFlatList  showPagination>
            <View style={ { backgroundColor: 'red', width : wp('100%') }}>
                <Text >1</Text>
            </View>
            <View style={ { backgroundColor: 'blue',width : wp('100%') }}>
                <Text >1</Text>
            </View>
            <View style={ { backgroundColor: 'green',width : wp('100%') }}>
                <Text >1</Text>
            </View>
        </SwiperFlatList>
        </View>
        
        <View style={styles.box_2}>
            <View style={styles.box_2_title}>
                <Text style={styles.box_2_title_text}>
                    ABOUT ME
                </Text>
            </View>
            <Image
                style={{height:wp('100%')/8 , width: wp('100%')/8/10*7.78,}}
                source={require('./image/self_image.png')}
          />


        </View>

        <TouchableOpacity  >
            <Text>맨 위로 이동</Text>
        </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
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
      position: 'absolute',
      
      zIndex: 1,
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
