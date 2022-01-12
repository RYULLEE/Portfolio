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

                <View style={{width : parentWidth/3, height : 500, backgroundColor : 'red'}}>
                    
                </View>
            </View>

            <View style={{alignItems : 'center',
                        //backgroundColor : 'blue',
                        width : parentWidth/3*2
                        }}>
                <Text style={styles.title}>
                    모두를 위한 주식분석 서비스, WARD
                </Text>

                <Text style={styles.subtitle}>
                    2020.03 – 2021.11 ( 스타트업 공동 창업자 및 개발자 )
                </Text>
                
                <View style={styles.text_box}>
                <Text style={styles.subtitle}>
                    <Text style={styles.head_text}>[ 공동 창업자 - Startup Co-founder]</Text>
                    
                    {'\n'}
                    {'\n'}
                    19년도 겨울, KAIST 앱 창업대회에서 기획을 준비하여 20년도 초 E5 KAIST 대회에서 팀원 2명과 함께 공동창업자로 시작하였습니다. 
                    저희는 코로나 시대에 주식을 시작한 수많은 개인들의 문제점을 분석하고 그에 대한 3가지 해결책을 이 어플을 통해 제시하였습니다. 
                    {'\n'}
                    직접 처음부터 모든걸 해보니 스타트업은 정말 본인의 물음에 답을 찾는 과정이였습니다. Lean Canvas부터 시작하여 target 고객의 needs와 feedback을 발로 뛰면서 조사하고 듣는 Customer Discovery, 직접 투자자들 앞에서 발표하는 Pitch Deck 과정을 수행하였습니다.  
                    Bluepoint Partners의 멘토링과 kakao ventures, the ventures등 다양한 투자 심의를 거치며 스타트업의 고충과 세상을 보는 Insight, 창업가로써의 성장과정을 직접 느낄 수 있었습니다. 
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    <Text style={styles.head_text}>[ 개발자 - Algorithm & Application ]</Text>
                    {'\n'}
                    {'\n'}
                    3명이서 창업을 했기 때문에 대표를 제외한 팀원은 저 포함 2명이 전부였습니다. 그렇기 때문에 저는 개발자로써 알고리즘과 앱 개발 모두에 메인으로 참여했습니다. 
                    저희 어플은 방대한 양의 주식 데이터를 벡엔드에서 머신러닝으로 분석하고 그에 해당하는 데이터들을 그래프 혹은 수치로 잘 표현하는 것이 핵심이였습니다. 
                    주식데이터를 다루다 보니 데이터양이 정말 엄청났습니다. 맨날 그저 아무생각 없이 돌리던 for문 마저 발목을 잡는 수준이 되었고, 알고리즘적 진보가 필요했습니다.
                    실시간으로 주식 데이터를 받아오는 프로세스를 구축하고, 기술적 지표들과 기본적 분석의 값들을 Filtering 하는 과정의 runtime을 줄이기 위해 정말 노력했습니다.
                    Kaist AI 대학원 교수님께 메일도 드리고 직접 책으로도 공부해보면서 부족했던 머신러닝 지식들과 자료구조 프로젝트 경험을 쌓아나가 알고리즘을 구축했습니다.
                    {'\n'}
                    {'\n'}
                    알고리즘을 개발하는 언어였던 Python과 C++은 고등학교때부터 정말 자주쓰던 편한 언어였는데 Mvp와 실제 출시해야하는 앱을 만드는 개발언어는 아예 다른것이였습니다.
                    스타트업을 진행하면서 바로 개발쪽 언어 공부를 들어갔고, 스타트업 특성상 최대한 단기간에 적은 인원으로 앱을 관리하고, 프로세싱해야하는 입장에서 Android와 Ios 동시개발이 가능한
                    React-Native를 집중적으로 공부했습니다. 그리고 프런트엔드 개발자 역할로 React Native와 Google Firebase를 이용하여 처음부터 전부다 앱을 구축해보았습니다.  
                    {'\n'}  
                    {'\n'}
                    개발을 하면서 React-Native에 관한 한국어 자료들이 부족한것이 정말 힘들었습니다. 모든것을 외국 자료를 찾아보아야했고, 다른 사람들의 문제나 라이브러리등을 직접 하나하나 뜯어보면서 우리 앱에 맞게 적용시킨 것들이 많았습니다. 
                    단순 차트나 그래프등에서도 처음 개발할때 매우 많은 시간을 쏟아부어야했고, 그 기간동안 정말 더디지만 직접 해결해가면서 개발능력이 쑥쑥 커나가는것을 느꼈습니다.
                    각 화면에 맞는 margin, 그리고 처음에는 그저 text로 적던 공지사항들도 모두 firebase에서 관리하면서 연동되게 바꾸고, 우리가 알고리즘으로 만들어두었던 output 값들을 실시간으로 어플에 띄우는 과정등이 정말 재밌었습니다.
                    그냥 마음대로 디자인하는것이 아닌, 사용자 맞춤형으로 어떤 UI가 스크롤하기 쉬울까? 눈에 잘보이는 텍스트와 이미지 크기등을 고려하는 과정속에서 디자인과 프론트, 백엔드 과정까지 전부다 참여하면서 개발능력의 상승과 더불어 협업의 중요성과 프로세스를 익힐 수 있었습니다.

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
})

export default Projects_1;