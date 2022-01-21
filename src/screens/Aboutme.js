// Aboutme screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const Aboutme = ({navigation}) => {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

    return (
        
            <View style={styles.large_container} onLayout={onLayout}>

                <View style={{width : parentWidth/1.5, height :parentWidth/1.5/43*25, backgroundColor : 'white',  }}>
                
                <View style={styles.top_card}>
                    <Text style={{
                        fontFamily: 'NotoSansKR_700Bold',
                        includeFontPadding: false,
                        lineHeight: 20,
                        fontSize: parentWidth/45,
                        color : 'white',}}>
                        
                        RYUL  IDENTIFICATION  CARD
                        </Text>
                </View>
                
                
                <View style={styles.bottom_card}>
                    <View style={{flex:1,  marginLeft : parentWidth/40, justifyContent : 'center', alignItems : 'center'}}>
                    <Image
                    style={{width: parentWidth/1.5/4.5, height: parentWidth/1.5/4.5/7.78*10 ,marginBottom : 50,}}
                    source={require('../image/self_image.png')}
                    />
                    
                    </View>

                    <View style={{flex:3, marginLeft : parentWidth/40, flexDirection:'row',}}>
                        <View style={styles.box_1}>

                            <View style={styles.box_1_1}>
                                <Feather name="user" size={parentWidth/30} color="black" style={{marginRight : parentWidth/20,marginLeft : parentWidth/50, }} />
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        이름
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        이률</Text>
                                </View>
                            </View>

                            <View style={styles.box_1_2}>
                                <Fontisto name="date" size={parentWidth/30} color="black" style={{marginRight : parentWidth/22,marginLeft : parentWidth/50, }} />
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        생일
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        00.05.01</Text>
                                </View>
                            </View>
                            <View style={styles.box_1_3}>
                                <Feather name="map-pin" size={parentWidth/30} color="black" style={{marginRight : parentWidth/25,marginLeft : parentWidth/50, }} />
                                <View>
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        주소지
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        고양시</Text>
                                </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box_2}>
                        <View style={styles.box_1_1}>
                                <Ionicons name="call-outline" size={parentWidth/30} color="black" style={{marginRight : parentWidth/20,marginLeft : parentWidth/50, }} />
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        연락처
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        010-8758-7417</Text>
                                </View>
                            </View>

                            <View style={styles.box_1_2}>
                                <Fontisto name="email" size={parentWidth/30} color="black" style={{marginRight : parentWidth/20,marginLeft : parentWidth/50, }} />
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        이메일
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        bluesunson@{'\n'}kaist.ac.kr</Text>
                                </View>
                            </View>
                            <View style={styles.box_1_3}>
                                <Entypo name="open-book" size={parentWidth/30} color="black" style={{marginRight : parentWidth/20,marginLeft : parentWidth/50, }} />
                                <View>
                                <View style={{alignItems : 'center'}}>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/50,
                                        marginBottom : parentWidth/80,
                                        }}>
                                        학력
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'NotoSansKR_500Medium',
                                        includeFontPadding: false,
                                        lineHeight: 20,
                                        fontSize: parentWidth/90,
                                        color : '#6E6E6E',
                                        }}>
                                        KAIST( 전기 및{'\n'}전자공학부 )</Text>
                                </View>
                                </View>
                            </View>


                        </View>
                        
                    </View>

                    <View style={{flex:0.5, justifyContent : 'center', alignItems : 'center',}}>
                        <Image
                        style={{width: parentWidth/1.5/4.4*0.2, height: parentWidth/1.5/4.4*0.3/10*56.6 ,}}
                        source={require('../image/barcord.png')}
                        />
                    </View>


                </View>
                
                </View>
                
            </View>
        
    )

}


const styles = StyleSheet.create({
    large_container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white',
        //height : hp('100%'),
        //flexDirection : 'row',
        
    }, 
    top_card : {
        flex : 1.5,
        backgroundColor : '#03387C',
        borderTopRightRadius : 25,
        borderTopLeftRadius : 25,
        justifyContent : 'center',
        alignItems : 'center',

    },
    bottom_card : {
        flex : 5.5,
        backgroundColor : '#E3E3E5',
        borderBottomRightRadius : 25,
        borderBottomLeftRadius : 25,
        flexDirection : 'row',
        
    },
    box_1 : {
        flex:1,
        borderRightWidth : 2,
        borderColor: '#03387C',
        borderStyle: 'dotted'
        
    },
    box_2 : {
        flex:1,
        //backgroundColor : 'white',
    },
    box_1_1:{
        flex:1,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        alignItems : 'center',
        //justifyContent : 'space-between',
    },
    box_1_2:{
        flex:1,
        flexDirection : 'row',
        alignItems : 'center',
    },
    box_1_3:{
        flex:1,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        alignItems : 'center',
    },
    top_text : {
        
        fontFamily: 'NotoSansKR_700Bold',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 30,
        color : 'white',
          
    },

});

export default Aboutme;