import React from "react";

import Swiper from "react-native-web-swiper";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const Projects_2 = ({navigation}) => {
    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

  return (

    <View style={styles.large_container} onLayout={onLayout}>
        
            <View style={{width : parentWidth/3}}>
                <View style={{width : parentWidth/3, height : 300, marginTop : 20}}>
                
                    <Swiper
                    
                    >
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('25%'), height : 300}}
                                    resizeMode="contain"
                                    source={require('../image/pf_1.png')}
                                />
                                
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} >
                            <Image
                                    style={{ flex:1, width : wp('20%')}}
                                    resizeMode="contain"
                                    source={require('../image/pf_2.png')}
                                />
                                
                        </TouchableOpacity>

                        

                    </Swiper>

                                
                
                </View>

                <View style={{borderWidth : 2, marginTop : 20, borderRadius : 10, borderColor : '#3B240B'}}>
                <View style={{width : parentWidth/3,  flexDirection : 'row', marginTop : 20}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>• 주요 기능</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                          About me, Skills, Projects, Career 정리, 요약
                        </Text>
                    </View>
                </View>

                <View style={{width : parentWidth/3, flexDirection : 'row'}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>• GitHub</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        https://github.com/RYULLEE/Portfolio
                        </Text> 
                    </View>
                </View>

                <View style={{width : parentWidth/3, flexDirection : 'row'}}>
                    <View style={{flex:1, }}>
                        <Text style={styles.text_left}>• Domain</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        링크 넣자
                        </Text> 
                    </View>
                </View>

                <View style={{width : parentWidth/3,  flexDirection : 'row'}}>
                    <View style={{flex:1,}}>
                        <Text style={styles.text_left}>• Front-end</Text>                        
                    </View>
                    <View style={{flex:2, }}>
                        <Text style={styles.text_left_2}>
                        React-native
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
                Ryul’s Portfolio
                </Text>

                <Text style={styles.subtitle}>
                2021.12 – 2022.01 ( 1인 개발 )
                </Text>
                
                <View style={styles.text_box}>
                <Text style={styles.subtitle}>
                    <Text style={styles.head_text}>[ 앱과 다른 환경, 웹 ]</Text>
                    
                    {'\n'}
                    {'\n'}
                    앞에서 직접 ward 어플을 개발하면서 React Native 를 사용하여 모바일 앱 Ios 와 Android를 동시에 개발해보고 적용해보았습니다.  
                    그리고선 나머지 한가지 매체, 즉 react-native-web을 개발하여 React Native로 세가지 방면의 동시개발 역량을 갖추고자 했습니다.
                    따라서 특색있게 개발자 포트폴리오를 웹에서 구동하는 앱 형식으로 만들었습니다.
                    {'\n'}
                    {'\n'}
                    react-native web은 정말 더더욱 자료들이 부족했습니다. 오픈된 라이브러리 수부터 모바일에선 잘 되지만 웹에서는 안굴러가는 컴포넌트들, 
                    기존에는 그냥 쓰던 과정들을 일일이 컴파일 해보면서 확인해보는 과정이 초반에 오래걸렸습니다. 

                    화면 크기가 기기마다 처음에 다르게 적용해주면 그 이후로는 안바뀌는 모바일과 달리 웹은 창 크기에 따른 반응형 설계가 필연시되었습니다.
                    부모로부터 계속 값을 얻어오고, 크기들을 조정해나가는 과정이 모바일에서는 잘 해보지 못했던 흥미로운 과정이었고 앱과 다른 웹에서의 개발과정을 체험해보았습니다. 
                    {'\n'}
                    {'\n'}
                    다른 포트폴리오와 차별화된 그냥 사이트가 아닌, 웹앱으로 구성하여 앱을 통해 느낄 수 있는 네비게이션 효과와 백 버튼, modal등 구성의 깔끔함에 초점을 둔 디자인을 직접 구상하였습니다. 
                    그리고 Web build 후에 netflify를 통한 사이트 배포까지 직접 해볼 수 있는 기회였습니다.


                    

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
        height : 300,
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

export default Projects_2;