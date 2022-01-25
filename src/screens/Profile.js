// Profile screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Snowflakes from 'react-native-snowflakes';
import { useState, useEffect } from 'react';
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
import DotAnimation from './DotAnimation';
import Dot from './Dot';
import Dot_image from './Dot_image';

const Profile = ({navigation}) => {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };
        return (
        
        <View style={styles.container} onLayout={onLayout}>
            <View style={{width : parentWidth, height : parentWidth/192*108, flexDirection:'row',}}>
            
            
            <Image
                style={{ tintColor : 'black', width : parentWidth/1920*884, height : parentWidth/192*86, marginRight : -parentWidth/1920*614}}
                source={require('../image/main_1.png')}
            />
            
            
            
            <Image
                style={{ tintColor : 'black', width : parentWidth/1920*912, height : parentWidth/192*69,marginRight : -parentWidth/1920*424 }}
                source={require('../image/main_2.png')}
            />
            
            
            <Image
                style={{tintColor : 'black', zIndex:1, width : parentWidth/1920*737, height : parentWidth/192*86,marginRight : -parentWidth/1920*146 }}
                source={require('../image/main_3.png')}
            />

            <Image
                style={{ tintColor : 'black',zIndex:1, width : parentWidth/1920*565, height : parentWidth/192*86, }}
                source={require('../image/main_4.png')}
            />      
            
            

            </View>

                

                <TouchableOpacity>
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'white',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/3.5,
                        marginLeft : parentWidth/1920*215,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        E{'\n'}A{'\n'}D  about me
                    </Text>
                </TouchableOpacity>
                
                <Animated.View style={styles.wrapper}>
                    <Dot_image _color={'#392525'} delay={0} url={require('../image/main_1.png')} _width = {parentWidth/1920*884} _height ={parentWidth/192*86} _marginRight= {-parentWidth/1920*614} />
                    <Dot_image _color={'#182115'} delay={600} url={require('../image/main_2.png')} _width = {parentWidth/1920*912} _height ={parentWidth/192*69} _marginRight= {-parentWidth/1920*424} _marginTop={-parentWidth/1920*175} />
                    <Dot_image _color={'#1C1C05'} delay={1200} url={require('../image/main_3.png')} _width = {parentWidth/1920*737} _height ={parentWidth/192*86} _marginRight= {-parentWidth/1920*146} _marginTop={0} />
                    <Dot_image _color={'#1D253B'} delay={1800} url={require('../image/main_4.png')} _width = {parentWidth/1920*565} _height ={parentWidth/192*86} _marginRight= {0} _marginTop={0} />
                </Animated.View>

                <Animated.View style={styles.wrapper}>
                    <TouchableOpacity style={{marginTop : parentWidth/1920*240,
                        marginLeft : parentWidth/1920*200,
                        zIndex : 1,}}>
                        <Dot word={'R'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*370,}}>
                        <Dot delay={600} word={'Y'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*318,}}>
                        <Dot delay={1200} word={'U'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*340,}}>
                        <Dot delay={1800} word={'L'} size={parentWidth/10}/>
                    </TouchableOpacity>
                </Animated.View>

                
        </View>
        )
    
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position : 'absolute'
      },
    container: {
        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor : 'red',
        //height : hp('100%'),
        backgroundColor : 'black'
        
    }, 
    left_large_box : {
        //backgroundColor : 'black',
        //alignItems : 'center',
        //justifyContent : 'space-between',
        flex:2,
        borderRadius : 20,
        marginRight : wp('1%'),
    },
    right_large_box : {
        //backgroundColor : 'yellow',
        //alignItems : 'center',
        //justifyContent : 'space-between',
        flex:1,
        borderRadius : 20,
    },
    box_1 : {
        flex: 4,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 20,
        marginBottom : wp('1%'),
        //borderWidth : 5,
        //borderColor : 'black'
    },
    box_2 : {
        flex: 2,
        //justifyContent : 'space-evenly',
        //alignItems : 'center',
        //backgroundColor : 'white',
        //height : hp('27%'),
        borderRadius : 20,
        flexDirection : 'row',
    },

    box_2_1 : {
        backgroundColor : '#ADB9CA',
        alignItems : 'center',
        justifyContent : 'center',
        flex:1.4,
        //width : wp('37.3%'),
        //height : 100,
        borderRadius : 20,
        marginRight : wp('1%'),
    },
    box_2_2 : {
        backgroundColor : '#FFD966',
        alignItems : 'center',
        justifyContent : 'center',
        flex:1,
        //width : wp('19%'),
        borderRadius : 20,
    },

    box_3 : {
        backgroundColor : '#A9D18E',
        alignItems : 'center',
        justifyContent : 'center',
        flex:1,
        //height : hp('38%'),
        borderRadius : 20,
        marginBottom : wp('1%'),
    },
    box_4 : {
        backgroundColor : '#F4B183',
        alignItems : 'center',
        justifyContent : 'center',
        flex:1.2,
        //height : hp('47%'),
        borderRadius : 20,
    },
    
      

});

export default Profile;