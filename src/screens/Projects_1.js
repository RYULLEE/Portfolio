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
                   
                      <TouchableOpacity style={styles.card} >
                          <Image
                                style={{ width : wp('20%'),  flex:1,}}
                                resizeMode="contain"
                                source={require('../image/ward_1.png')}
                            />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.card} >
                          <Image
                                style={{ width : wp('20%'),  flex:1,}}
                                resizeMode="contain"
                                source={require('../image/ward_1.png')}
                            />
                      </TouchableOpacity>
                      
                      
                  </Swiper>

                              
              
            </View>

            <View style={{alignItems : 'center',
                        backgroundColor : 'blue',
                        width : parentWidth/3*2
                        }}>
                <Text style={styles.title}>
                    모두를 위한 주식분석 서비스, WARD
                </Text>

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
        height : 1000,
    },

    left_box : {
        justifyContent : 'center',
        alignItems : 'center',
        

    },

    right_box : {
        //justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'blue',
        

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

})

export default Projects_1;