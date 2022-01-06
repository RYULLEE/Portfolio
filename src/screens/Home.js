import React from 'react';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { useState, useEffect } from 'react';

const Home = () => {

    return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.top_bar}>
            <TouchableOpacity>
            <Text style={styles.logo_text}>
                RYUL's Portfolio
            </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.box_1}>

        </View>

        <View style={styles.box_2}>
            <View style={styles.box_2_title}>
                <Text style={styles.box_2_title_text}>
                    ABOUT ME
                </Text>
            </View>
            <Image
                style={{height:wp('100%')/8 , width: wp('100%')/8/10*7.78,}}
                source={require('../image/self_image.png')}
          />


        </View>

        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  
    top_bar : {
      backgroundColor : 'gray',
      //alignItems : 'center',
      justifyContent : 'center',
      width : wp('100%'),
      height : 70,
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
      height : 500,
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

  export default Home;
