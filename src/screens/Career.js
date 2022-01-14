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

    const [box_select, setbox_select] = useState(0);
    



  return (

    <View style={styles.large_container} onLayout={onLayout}>

        <View style={{width : parentWidth/2}}>
        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2021/12</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>NH투자증권 빅데이터 경진대회 본선진출</Text>
            <Text style={styles.subtitle}>주식 알고리즘 검증 및 머신러닝 개발 능력 확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2021/09</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>대전 생애 최초 창업대회 1위</Text>
            <Text style={styles.subtitle}>kakao ventures, the ventures 등에서 다양한 시드투자 심의</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2021/08</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>E*5 KAIST FINAL 진출</Text>
            <Text style={styles.subtitle}>KAIST 최고의 창업지원 프로그램 최종 12팀 선발, bluepoint partners 멘티</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2021/06</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>스타트업 WARD Front-end 개발자</Text>
            <Text style={styles.subtitle}>공동창업자 및 react-native를 이용한 앱 전체 개발</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2020/12</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>KAIST 앱 창업대회 우수상</Text>
            <Text style={styles.subtitle}>WARD 서비스 기획 및 개발준비</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2019/03</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>KAIST 입학</Text>
            <Text style={styles.subtitle}>전기 및 전자공학부, 전산학부</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2016/03</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>세종과학예술영재학교 입학</Text>
            <Text style={styles.subtitle}>영재학교 세종과학예술영재학교 2기 졸업생 대표</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box_1}>
          <View style={styles.left_box}>
            <Text style={styles.date}>2015/02</Text>
          </View>
          <TouchableOpacity style={styles.right_box}>
            <Text style={styles.title}>KMO 한국 수학올림피아드 금상</Text>
            <Text style={styles.subtitle}>기초 수학능력 검증, 겨울학교 입소</Text>
          </TouchableOpacity>
        </View>

        </View>

        <View style={{width : parentWidth/2, backgroundColor : 'orange'}}>
          <Text>111111111111</Text>
        </View>

    </View>
  )

};

const styles = StyleSheet.create({

large_container: {
        //flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor : '#FFD966',
        //width : wp('100%'),
        //height : hp('100%'),
        flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('2%'),
        marginBottom : wp('2%'),
        //height : 1000,
    },
    box_1 : {
      backgroundColor : 'green',
      //justifyContent : 'center',
      alignItems : 'flex-start',
      flexDirection: 'row',
      marginBottom : 20,

    },
    left_box : {
      backgroundColor : '#0B3861',
      justifyContent : 'center',
      alignItems : 'center',
      //flexDirection: 'row',
      //borderWidth : 2,
      borderRadius : 10,
      

    },
    right_box : {
      //backgroundColor : 'green',
      justifyContent : 'center',
      //alignItems : 'center',
      //flexDirection: 'row',
      borderWidth : 2,
      marginLeft : 20,
      //marginTop : 20,
      marginBottom : 20,

    },
      
      title : {
          
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 20,
        //marginBottom: 40,
        marginTop: 10,
        marginBottom : 10,
          
    },
    subtitle : {
          
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 15,
      color : '#585858',
      //marginBottom: 40,
      //marginTop: 20,
      //marginBottom : wp('3%'),
        
  },
  date : {
          
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
    color : 'white',
    marginBottom: 10,
    marginTop: 10,
    marginRight : 10,
    marginLeft : 10,
    //marginBottom : wp('3%'),
      
},
   
})

export default Career;