import React from "react";

import Swiper from "react-native-web-swiper";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Timeline from 'react-native-timeline-flatlist'
import moment from "moment";
import BurnsImage from 'react-native-kenburns-view';
import TouchableRipple  from 'react-native-touch-ripple'


const Career = ({navigation}) => {
    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width); 
  };

    const data= [
    
        {time: '2015/02', title: 'KMO 한국 수학 올림피아드 금상', description: 'KMO 겨울학교 캠프 입소'},
        {time: '2016/03', title: '세종과학예술영재학교 입학', description: '영재학교 세종과학예술영재학교 2기 졸업생 대표'},
        {time: '2019/03', title: 'KAIST 입학', description: '전기 및 전자공학부, 전산학부'},
        {time: '2020/12', title: 'KAIST 앱 창업대회 우수상', description: '블루포인트 파트너스 김용건 부대표님 멘티'},
        {time: '2021/06', title: 'WARD Front-end 개발자', description: 'react-native를 이용한 앱 전체 개발'},
        {time: '2021/08', title: 'E*5 KAIST Final 진출', description: '공동창업자- 스타트업 WARD 기획'},
        
        {time: '2021/09', title: '대전 생애 최초 창업대회 1위', description: '각종 시드투자 심의 착수'},
        {time: '2021/11 ', title: 'NH투자증권 빅데이터 경진대회 본선진출', description: '주식 알고리즘과 머신러닝 개발 능력 검증'},
        

      ]


  return (

    <View style={styles.large_container} onLayout={onLayout}>
        
        <BurnsImage tension={4} friction={10} imageWidth={200} imageHeight={100} 
        sourceUri={require('../image/react_native.png')} placeholderSource={require( '../image/communication.png')}/>
        
        <TouchableRipple>
        <Text>Press Here</Text>
      </TouchableRipple>

        
        <Timeline data={data}
        circleSize={0.1}
        circleColor='rgb(45,156,219)'
        lineColor='#3104B4'
        timeContainerStyle={{minWidth:52, marginTop: -5}}
        timeStyle={{textAlign: 'center', backgroundColor:'#0B243B', color:'white', padding:5, borderRadius:5}}
        descriptionStyle={{color:'gray'}}
        options={{
          style:{paddingTop:5}
        }} 
        />
        

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
        //flexDirection : 'row',
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

export default Career;