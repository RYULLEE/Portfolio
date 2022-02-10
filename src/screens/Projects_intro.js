import React from "react";

import Swiper from "react-native-web-swiper";
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
const Projects_info =({navigation})=> {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };
   
    
        return (
            <View style={styles.large_container} >
              
              <View style={{flex:0.5,}} onLayout={onLayout}>
              
              
                  <Swiper
                    from={0}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      
                      
                      nextTitle: '>',
                      nextTitleStyle: { color: 'black', fontSize: 30, fontWeight: '700' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress} >
                          <Text style={{ color: 'gray', fontSize: 30, fontWeight: '700' }}>
                            {'<'}
                          </Text>
                         
                        </TouchableOpacity>
                        
                      ),
                    }}
                  >
                      
                      <TouchableOpacity  onPress={() => navigation.navigate('Projects_1')} style={styles.card}  >
                      
                          
                          <Image
                                style={{ width : wp('40%'),  flex:1,}}
                                resizeMode="contain"
                                source={require('../image/ward.png')}
                            />
                          <View style={{alignItems : 'center', justifyContent : 'center'}}>
                          <Text style={styles.title}>
                            모두를 위한 주식분석 서비스, WARD
                            
                          </Text>


                          <Text style={styles.subtitle} resizeMode='contain'>
                          2020.03 – 2021.11 ( 스타트업 공동 창업자 및 개발자 )
                          </Text>
                          </View>

                      
                      </TouchableOpacity>
                      
                      <TouchableOpacity  onPress={() => navigation.navigate('Projects_2')} style={styles.card_2} >
                      
                          
                          <Image
                                style={{ width : wp('40%'),  flex:1,}}
                                resizeMode="contain"
                                source={require('../image/pf_1.png')}
                            />
                          <View style={{alignItems : 'center', justifyContent : 'center'}}>
                          <Text style={styles.title}>
                            Ryul's Portfolio
                          </Text>

                          <Text style={styles.subtitle} resizeMode='contain'>
                          2021.12 – ( 1인 개발 개인 포트폴리오 )

                          </Text>
                          </View>

                      
                      </TouchableOpacity>
                  </Swiper>
                  
                              
              </View>
              
              </View>
              
         
        )
    
};

const styles = StyleSheet.create({
    large_container: {
        flex:1,
        justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor : 'white',
        //width : wp('100%'),
        //height : hp('100%'),
        flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('2%'),
        marginBottom : wp('2%'),

    }, 
    card : {
      flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      backgroundColor:"white",
      borderWidth : 4,
      borderColor : '#61210B',
      borderRadius : 15,
    },
    card_2 : {
      flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      backgroundColor:"white",
      borderWidth : 4,
      borderColor : '#0B6138',
      borderRadius : 15,
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
    marginBottom : wp('3%'),
      
},

    
});

export default Projects_info;