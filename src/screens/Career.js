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
    <View style={{backgroundColor:'#D8F6CE'}}>
    <View style={styles.large_container} onLayout={onLayout}>

        <View style={{width : parentWidth/2,}}>
        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(1)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2021/12</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>NH투자증권 빅데이터 경진대회 본선진출</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>주식 알고리즘 검증 및 머신러닝 개발 능력 확인</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(2)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2021/09</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>제정데이터 시각화 경진대회 본선 진출</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>빅데이터 클린징 과정 체험</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1 } onPress={() => setbox_select(3)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2021/09</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>대전 생애 최초 창업대회 1위</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>kakao ventures, the ventures 등에서 다양한 시드투자 심의</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(4)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2021/07</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>E*5 KAIST FINAL 진출</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>KAIST 최고의 창업지원 프로그램 최종 12팀 선발,{'\n'}bluepoint partners 멘티</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(5)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2021/03</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>스타트업 WARD Front-end 개발자</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>공동창업자 및 react-native를 이용한 앱 전체 개발</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(6)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2020/12</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>KAIST 앱 창업대회 우수상</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>WARD 서비스 기획 및 개발준비</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(7)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2019/03</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>KAIST 입학</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>전기 및 전자공학부, 전산학부</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(8)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2016/03</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>세종과학예술영재학교 입학</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>영재학교 세종과학예술영재학교 2기 졸업생 대표</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box_1} onPress={() => setbox_select(9)}>
          <View style={styles.left_box}>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : 'white',
                  marginBottom: parentWidth/120,
                  marginTop: parentWidth/120,
                  marginRight : parentWidth/120,
                  marginLeft : parentWidth/120,}}>2015/02</Text>
          </View>
          <View style={{justifyContent : 'center',
                marginLeft : parentWidth/60,
                marginBottom : parentWidth/40,}} >
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/60,
                  //marginBottom: 40,
                  marginTop: parentWidth/120,
                  marginBottom : parentWidth/120,}}>KMO 한국 수학올림피아드 금상</Text>
            <Text style={{fontFamily: 'NotoSansKR_500Medium',
                  includeFontPadding: false,
                  lineHeight: 20,
                  fontSize: parentWidth/80,
                  color : '#585858',
                  marginTop: parentWidth/120,}}>기초 수학능력 검증, 겨울학교 입소</Text>
          </View>
        </TouchableOpacity>

        </View>

        <View>
          
        <View style={{width : parentWidth/2, alignItems : 'center' }}>
          {(box_select==0?true:false) &&
            <Text style={styles.subtitle_2}>---- 박스를 선택해주세요 ----</Text>
          }
          {(box_select==1?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3, marginBottom : 20 }}
            source={require('../image/c_1.png')}
            />
            <Text style={styles.subtitle_2}>
              원래 주식 빅데이터를 이용해 알고리즘 트레이딩을 이용한 스타트업을 했었지만, 
              고객자체의 빅데이터를 이용해 성향을 파악하고 활용하는 주식보유기간 예측은 새로웠습니다.{'\n'}기존에 하던 머신러닝 능력을 활용해보고, 
              주식관련 데이터 필터링 경험을 위해 참여했고 좋은 성적을 거두었습니다. 
              </Text>
            </View>
          }
          {(box_select==2?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3, marginBottom : 20 }}
            source={require('../image/c_2.png')}
            />
            <Text style={styles.subtitle_2}>
              이 역시 빅데이터 필터링 과정과 github을 이용한 사이트 배포, python의 3d 그래프 구현등의 다양한 라이브러리를 체험해보고
              도전해보고 싶어서 참여했습니다. 넓은 분야의 코딩을 경험해보고 싶었고, 도전해보고 싶었습니다.  
              </Text>
            </View>
          }
          {(box_select==3?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3*0.565, marginBottom : 20 }}
            source={require('../image/ward.png')}
            />
            <Text style={styles.subtitle_2}>
              대전지역 생애최초 창업대회에 출전하여 전체 1등을 달성하였고, 다양한 투자기업들과 접촉할 수 있었습니다. 
              카카오 벤처스, 더벤처스 등 많은 vc분들과 시드투자 심의를 거치면서 긴시간동안 IR과정을 체험해볼수 있었고, 
              사정상 이 단계에서 스타트업은 마무리되었습니다. 
            </Text>
            </View>
          }
          {(box_select==4?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/30*15, marginBottom : 20 }}
            source={require('../image/c_3.png')}
            />
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/30*15, marginBottom : 20 }}
            source={require('../image/c_4.png')}
            />
            <Text style={styles.subtitle_2}>
              KAIST 최고의 창업지원 프로그램에 엄청난 경쟁률을 뚫고 선발되었고, 2021년 봄학기 내내 진행된 대회였습니다. 최종 12팀까지 진출하면서 
              직접 발로 뛰면서 스타트업의 기본 소양과 발전과정을 공동창업자로서 뼛속까지 배울 수 있었습니다.{'\n'}
              그중에서도 bluepoint partners 김용건 부대표님 멘티로 들어가서 정말 많이 성장했고, 
              수많은 KAIST 출신 창업가 선배님들과 커넥션도 만들 수 있었습니다. 
            </Text>
            </View>
          }
          
          {(box_select==5?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            
            <Text style={styles.subtitle_2}>
              본격적으로 WARD 프런트엔드 개발과 이쪽 공부를 시작했습니다. 
            </Text>
            </View>
          }
          {(box_select==6?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
              <Image
            style={{  width : parentWidth/3, height: parentWidth/3/21*8.3, marginBottom : 20 }}
            source={require('../image/c_6_1.png')}
            />
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/10*14.1, marginBottom : 20 }}
            source={require('../image/c_6.png')}
            />
            
            <Text style={styles.subtitle_2}>
              20년 말 겨울방학 내내 진행되었던 대회로써 처음 앱개발을 접하게 해준 대회이자, 창업의 길을 열어주었습니다. 이 대회에서 우수상을 수상하고, 
              비즈니스 모델을 구상해보면서 상상만하던 개발의 재미와 창업의 시작을 알렸습니다.  
            </Text>
            </View>
          }
          {(box_select==7?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3, marginBottom : 20 }}
            source={require('../image/c_7.png')}
            />
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/10*7.5, marginBottom : 20 }}
            source={require('../image/c_7_1.png')}
            />
            <Text style={styles.subtitle_2}>
              19년도 카이스트를 입학하였고, 전공은 전기및 전자공학부와 전산학부를 선택하였습니다.  
            </Text>
            </View>
          }
          {(box_select==8?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/30*14, marginBottom : 20 }}
            source={require('../image/c_8.png')}
            
            />
            <Image
            style={{  width : parentWidth/3, height: parentWidth/3/10*7.5, marginBottom : 20 }}
            source={require('../image/c_8_1.png')}/>
            <Text style={styles.subtitle_2}>
              영재학교 세종과학예술영재학교를 16년도 2기로 입학하였고, 기장을 맡아 현재 동창회장 역할을 수행하고 있습니다.   
            </Text>
            </View>
          }
          {(box_select==9?true:false) &&
            <View style={{alignItems : 'center', marginHorizontal : parentWidth/25}}>
            
            <Text style={styles.subtitle_2}>
              중학교 최대 목표였던 한국수학올림피아드에서 정말 최고의 성과인 금상을 수상하였고, 겨울학교 캠프까지 수료하였습니다.
              자신의 수학실력을 검증할 수 있었고, 이후 모든 공부에서 기본적인 도움이되는 수학능력과 사고를 기를 수 있었습니다.    
            </Text>
            </View>
          }
        </View>
        
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
        backgroundColor : '#D8F6CE',
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
      //backgroundColor : 'green',
      //justifyContent : 'center',
      alignItems : 'flex-start',
      flexDirection: 'row',
      marginBottom : 20,
      borderBottomWidth : 2,

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
      marginLeft : 20,
      marginBottom : 30,

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
      marginTop: 10,
      //marginLeft : 20,
      //marginBottom : wp('3%'),
        
  },
  subtitle_2 : {
          
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
    //color : '#585858',
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