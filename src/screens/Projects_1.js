import React from "react";

import Swiper from "react-native-web-swiper";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const Projects_1 = ({navigation}) => {
    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

  return (

    <View style={styles.large_container} onLayout={onLayout}>
        
            <View style={{width : parentWidth/3}}>
                <View style={{width : parentWidth/3, height : 500, marginTop : 20}}>
                
                    <Swiper
                    
                    >
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_0.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_1.png')}
                                />
                                
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ width : wp('20%'),  flex:1,}}
                                    resizeMode="contain"
                                    source={require('../image/ward_2.png')}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ width : wp('20%'),  flex:1,}}
                                    resizeMode="contain"
                                    source={require('../image/ward_3.png')}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ width : wp('20%'),  flex:1,}}
                                    resizeMode="contain"
                                    source={require('../image/ward_4.png')}
                                />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_5.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_6.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_7.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_9.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_10.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_11.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_12.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/ward_13.png')}
                                />
                                
                        </TouchableOpacity>

                    </Swiper>

                                
                
                </View>

                <View style={{borderWidth : 2, marginTop : 20, borderRadius : 10, borderColor : '#3B240B'}}>
                <View style={{width : parentWidth/3,  flexDirection : 'row', marginTop : 20}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>??? ?????? ??????</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>1. ?????? Tier System ( ????????? ????????? ??????????????? ?????? ??????"???" ??? ??????
                              {'\n'}2. ????????? ?????? ????????? ( ????????? ?????? ????????? 100??? ?????? ????????? ?????? )
                              {'\n'}3. ???????????? ????????? ?????? ????????? ?????? ( ????????? ??????, ??????????????? ??????, ????????? ????????? ?????? )
                        </Text>
                    </View>
                </View>

                <View style={{width : parentWidth/3, flexDirection : 'row'}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>??? GitHub</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        https://github.com/RYULLEE/WARD_react-native_frontend
                        </Text> 
                    </View>
                </View>

                <View style={{width : parentWidth/3, flexDirection : 'row'}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>??? App File</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        https://drive.google.com/file/d/1OlQv89etIYWWkmWWknG5O1kmQdbU_-6N/view?usp=sharing
                        </Text> 
                    </View>
                </View>

                <View style={{width : parentWidth/3,  flexDirection : 'row'}}>
                    <View style={{flex:1,}}>
                        <Text style={styles.text_left}>??? Front-end</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        React-native
                        </Text> 
                    </View>
                </View>
                
                <View style={{width : parentWidth/3,  flexDirection : 'row'}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>??? Back-end</Text>                        
                    </View>
                    <View style={{flex:2,}}>
                        <Text style={styles.text_left_2}>
                        Google Firebase
                        </Text> 
                    </View>
                </View>
                </View>


            </View>

            <View style={{alignItems : 'center',
                        //backgroundColor : 'blue',
                        width : parentWidth/3*2
                        }}>
                <Text style={styles.title}>
                    ????????? ?????? ???????????? ?????????, WARD
                </Text>

                <Text style={styles.subtitle}>
                    2020.03 ??? 2021.11 ( ???????????? ?????? ????????? ??? ????????? )
                </Text>
                
                <View style={styles.text_box}>
                <Text style={styles.subtitle}>
                    <Text style={styles.head_text}>[ ?????? ????????? - Startup Co-founder]</Text>
                    
                    {'\n'}
                    {'\n'}
                    19?????? ??????, KAIST ??? ?????????????????? ????????? ???????????? 20?????? ??? E5 KAIST ???????????? ?????? 2?????? ?????? ?????????????????? ?????????????????????. 
                    ????????? ????????? ????????? ????????? ????????? ????????? ???????????? ???????????? ???????????? ?????? ?????? 3?????? ???????????? ??? ????????? ?????? ?????????????????????. 
                    {'\n'}
                    {'\n'}
                    ?????? ???????????? ????????? ????????? ??????????????? ?????? ????????? ????????? ?????? ?????? ?????????????????????. Lean Canvas?????? ???????????? target ????????? needs??? feedback??? ?????? ????????? ???????????? ?????? Customer Discovery, ?????? ???????????? ????????? ???????????? Pitch Deck ????????? ?????????????????????.  
                    Bluepoint Partners??? ???????????? kakao ventures, the ventures??? ????????? ?????? ????????? ????????? ?????? 2???????????? ??????????????? ??????????????? ????????? ????????? ?????? Insight, ?????????????????? ??????????????? ?????? ?????? ??? ???????????????. 
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    <Text style={styles.head_text}>[ ????????? - Algorithm & Application ]</Text>
                    {'\n'}
                    {'\n'}
                    3????????? ????????? ?????? ????????? ????????? ????????? ????????? ??? ?????? 2?????? ??????????????????. ????????? ????????? ?????? ??????????????? ??????????????? ??? ?????? ????????? ???????????? ??????????????????. 
                    ?????? ????????? ????????? ?????? ?????? ???????????? ??????????????? ?????????????????? ???????????? ?????? ???????????? ??????????????? ????????? ?????? ????????? ??? ???????????? ?????? ?????????????????????. 
                    ?????????????????? ????????? ?????? ??????????????? ?????? ??????????????????. ?????? ?????? ???????????? ?????? ????????? for??? ?????? ????????? ?????? ????????? ?????????, ??????????????? ????????? ??????????????????.
                    ??????????????? ?????? ???????????? ???????????? ??????????????? ????????????, ????????? ???????????? ????????? ????????? ????????? Filtering ?????? ????????? runtime??? ????????? ?????? ?????? ??????????????????.
                    Kaist AI ????????? ???????????? ????????? ????????? ?????? ???????????? ?????????????????? ???????????? ???????????? ???????????? ???????????? ???????????? ????????? ???????????? ??????????????? ??????????????????.
                    {'\n'}
                    {'\n'}
                    ??????????????? ???????????? ???????????? Python??? C++??? ????????????????????? ?????? ???????????? ?????? ??????????????? Mvp??? ?????? ?????????????????? ?????? ????????? ??????????????? ?????? ????????????????????????.
                    ??????????????? ??????????????? ?????? ????????? ?????? ????????? ????????????, ???????????? ????????? ????????? ???????????? ?????? ???????????? ?????? ????????????, ???????????????????????? ???????????? Android??? Ios ??????????????? ?????????
                    React-Native??? ??????????????? ??????????????????. ????????? ??????????????? ????????? ????????? React Native??? Google Firebase??? ???????????? ???????????? ????????? ?????? ????????????????????????.  
                    {'\n'}  
                    {'\n'}
                    ????????? ????????? React-Native??? ?????? ????????? ???????????? ??????????????? ?????? ??????????????????. ???????????? ?????? ????????? ?????????????????????, ?????? ???????????? ????????? ????????????????????? ?????? ???????????? ??????????????? ?????? ?????? ?????? ???????????? ????????? ???????????????. 
                    ?????? ????????? ????????????????????? ?????? ???????????? ?????? ?????? ????????? ?????????????????????, ??? ???????????? ?????? ???????????? ?????? ?????????????????? ??????????????? ?????? ?????????????????? ???????????????.
                    ??? ????????? ?????? margin, ????????? ???????????? ?????? text??? ?????? ?????????????????? ?????? firebase?????? ??????????????? ???????????? ?????????, ????????? ?????????????????? ?????????????????? output ????????? ??????????????? ????????? ????????? ???????????? ?????? ??????????????????.
                    ?????? ???????????? ????????????????????? ??????, ????????? ??????????????? ?????? UI??? ??????????????? ?????????? ?????? ???????????? ???????????? ????????? ???????????? ???????????? ??????????????? ???????????? ?????????, ????????? ???????????? ????????? ??????????????? ??????????????? ????????? ????????? ????????? ???????????? ??????????????? ?????? ??? ???????????????.

                </Text>

                </View>             
            </View>


    </View>
  )

};

const styles = StyleSheet.create({

large_container: {
        //flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor : '#FFD966',
        //width : wp('100%'),
        //height : hp('100%'),
        flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('2%'),
        marginBottom : wp('2%'),
        //height : 1000,
    },

    left_box : {
        justifyContent : 'center',
        alignItems : 'center',
        

    },

    right_box : {
        //justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'blue',
        flexDirection : 'row',

    },

    card : {
        //flex:1,
        
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"white",
        borderWidth : 4,
        borderColor : 'black',
        borderRadius : 15,
        zIndex : 10,
        height : 500,
      },
      
      title : {
          
        fontFamily: 'NotoSansKR_700Bold',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 25,
        //marginBottom: 40,
        marginTop: 20,
          
    },
    subtitle : {
          
      fontFamily: 'NotoSansKR_400Regular',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 15,
      //marginBottom: 40,
      marginTop: 20,
      //marginBottom : wp('3%'),
        
  },
    head_text : {
          
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 17,
    //marginBottom: 40,
    //marginTop: 20,
    //marginBottom : wp('3%'),
      
},

  text_box: {
      justifyContent : 'center',
      alignItems : 'center',
      marginHorizontal : 40,
      marginTop : 20,
      marginBottom : 40,

  },

  text_left : {
          
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 17,
    marginLeft : 10,
    //marginBottom: 40,
    //marginTop: 20,
    //marginBottom : wp('3%'),
      
},
text_left_2 : {
          
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
    marginRight : 10,
    //marginLeft : 20,
    marginBottom: 20,
    //marginTop: 20,
    //marginBottom : wp('3%'),
      
},
})

export default Projects_1;