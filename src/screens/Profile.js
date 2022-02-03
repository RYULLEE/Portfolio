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

    const [mouse_1, setMouse_1] = useState(false);
    const [mouse_2, setMouse_2] = useState(false);
    const [mouse_3, setMouse_3] = useState(false);
    const [mouse_4, setMouse_4] = useState(false);
    
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

            
            <Animated.View style={styles.wrapper}>
                    <Dot_image _color={'#392525'} delay={0} url={require('../image/main_1.png')} _width = {parentWidth/1920*884} _height ={parentWidth/192*86} _marginRight= {-parentWidth/1920*614} />
                    <Dot_image _color={'#212E1D'} delay={600} url={require('../image/main_2.png')} _width = {parentWidth/1920*912} _height ={parentWidth/192*69} _marginRight= {-parentWidth/1920*424} _marginTop={-parentWidth/1920*175} />
                    <Dot_image _color={'#2A2A07'} delay={1200} url={require('../image/main_3.png')} _width = {parentWidth/1920*737} _height ={parentWidth/192*86} _marginRight= {-parentWidth/1920*146} _marginTop={0} />
                    <Dot_image _color={'#1D253B'} delay={1800} url={require('../image/main_4.png')} _width = {parentWidth/1920*565} _height ={parentWidth/192*86} _marginRight= {0} _marginTop={0} />
            </Animated.View>

            {(mouse_1)&&
            <Image
               
                style={{ tintColor : 'white', position : 'absolute',width : parentWidth/1920*884, height : parentWidth/192*86, }}
                source={require('../image/main_1.png')}
            />
            }

            {(mouse_2)&&
            <Image
                style={{ tintColor : 'white',position : 'absolute', width : parentWidth/1920*912, height : parentWidth/192*69,marginLeft : parentWidth/1920*272 }}
                source={require('../image/main_2.png')}
            />
            }
            {(mouse_3)&&
            <Image
                style={{tintColor : 'white', position : 'absolute', width : parentWidth/1920*737, height : parentWidth/192*86,marginLeft : parentWidth/1920*761 }}
                source={require('../image/main_3.png')}
            />
            }
            {(mouse_4)&&
            <Image
            style={{ tintColor : 'white', position : 'absolute', width : parentWidth/1920*565, height : parentWidth/192*86, marginLeft : parentWidth/1920*1354}}
            source={require('../image/main_4.png')}
            /> 
            }
            
                <TouchableOpacity>
                {(mouse_1)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
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
                    }   
                </TouchableOpacity>

                <TouchableOpacity>
                    {(mouse_2)&&<Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/2.25,
                        marginLeft : parentWidth/1920*633,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        M
                    </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_2)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/2.25,
                        marginLeft : parentWidth/1920*810,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        skills
                    </Text>
                    }       
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_3)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*610,
                        marginLeft : parentWidth/1920*1110,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        S
                    </Text>
                }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_3)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*565,
                        marginLeft : parentWidth/1920*1080,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        E
                    </Text>
                }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_3)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*520,
                        marginLeft : parentWidth/1920*1045,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        R
                    </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_3)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*475,
                        marginLeft : parentWidth/1920*1080,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        projects
                    </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_4)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*780,
                        marginLeft : parentWidth/1920*1530,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        A
                    </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_4)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*780,
                        marginLeft : parentWidth/1920*1570,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        L
                    </Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity>
                {(mouse_4)&&
                    <Text style={{
                        fontFamily: 'NotoSansKR_500Medium',
                        position : 'absolute', 
                        includeFontPadding: false,
                        fontSize: parentWidth/60,
                        color : 'black',
                        lineHeight : parentWidth/30,
                        //marginRight : -500,
                        marginTop : -parentWidth/1920*590,
                        marginLeft : parentWidth/1920*1618,
                        zIndex : 2,
                        //backgroundColor : 'red',
                        //padding : 50,
                        }}>
                        careers
                    </Text>
                    }
                </TouchableOpacity>
                
                

                <Animated.View style={styles.wrapper}>
                    <TouchableOpacity style={{marginTop : parentWidth/1920*240,
                        marginLeft : parentWidth/1920*200,
                        zIndex : 999,

                        }}
                        hitSlop={{ top: 32, bottom: 32, left: 100, right: 200 }}
                        onMouseEnter={() => setMouse_1(true)}
                        onMouseLeave={() => setMouse_1(false)}
                        >
                        <Dot word={'R'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*370,}}
                                        onMouseEnter={() => setMouse_2(true)}
                                        onMouseLeave={() => setMouse_2(false)}
                                        hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                                        >
                        <Dot delay={600} word={'Y'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*318,}}
                                        onMouseEnter={() => setMouse_3(true)}
                                        onMouseLeave={() => setMouse_3(false)}
                                        >
                        <Dot delay={1200} word={'U'} size={parentWidth/10}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop : parentWidth/1920*240, marginLeft : parentWidth/1920*340,}}
                                        onMouseEnter={() => setMouse_4(true)}
                                        onMouseLeave={() => setMouse_4(false)}                                
                                        >
                        <Dot delay={1800} word={'L'} size={parentWidth/10}/>
                    </TouchableOpacity>
                </Animated.View>

        <TouchableOpacity style={{//backgroundColor : 'red', 
                                    width : parentWidth/1920*300, height : parentWidth/1920*800, marginTop : -parentWidth/1920*1050}}
        onMouseEnter={() => setMouse_1(true)}
        onMouseLeave={() => setMouse_1(false)}
        onPress={() => navigation.navigate('Aboutme')}
        />
        <TouchableOpacity style={{//backgroundColor : 'blue', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*700, marginTop : -parentWidth/1920*700, marginLeft :parentWidth/1920*300 }}
        onMouseEnter={() => setMouse_1(true)}
        onMouseLeave={() => setMouse_1(false)}
        onPress={() => navigation.navigate('Aboutme')}
        />
        <TouchableOpacity style={{//backgroundColor : 'red', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*350, marginTop : -parentWidth/1920*350, marginLeft :parentWidth/1920*500 }}
        onMouseEnter={() => setMouse_1(true)}
        onMouseLeave={() => setMouse_1(false)}
        onPress={() => navigation.navigate('Aboutme')}
        />
        <TouchableOpacity style={{//backgroundColor : 'green', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*300, marginTop : -parentWidth/1920*850, marginLeft :parentWidth/1920*400 }}
        onMouseEnter={() => setMouse_2(true)}
        onMouseLeave={() => setMouse_2(false)}
        onPress={() => navigation.navigate('Skills')}
        />
        <TouchableOpacity style={{//backgroundColor : 'green', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*700, marginTop : -parentWidth/1920*550, marginLeft :parentWidth/1920*550 }}
        onMouseEnter={() => setMouse_2(true)}
        onMouseLeave={() => setMouse_2(false)}
        onPress={() => navigation.navigate('Skills')}
        />
        <TouchableOpacity style={{//backgroundColor : 'green', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*700, marginTop : -parentWidth/1920*700, marginLeft :parentWidth/1920*750 }}
        onMouseEnter={() => setMouse_2(true)}
        onMouseLeave={() => setMouse_2(false)}
        onPress={() => navigation.navigate('Skills')}
        />
        <TouchableOpacity style={{//backgroundColor : 'green',
                                    width : parentWidth/1920*200, height : parentWidth/1920*700, marginTop : -parentWidth/1920*500, marginLeft :parentWidth/1920*650 }}
        onMouseEnter={() => setMouse_2(true)}
        onMouseLeave={() => setMouse_2(false)}
        onPress={() => navigation.navigate('Skills')}
        />
        <TouchableOpacity style={{//backgroundColor : 'green', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*500, marginTop : -parentWidth/1920*900, marginLeft :parentWidth/1920*900 }}
        onMouseEnter={() => setMouse_2(true)}
        onMouseLeave={() => setMouse_2(false)}
        onPress={() => navigation.navigate('Skills')}
        />
        <TouchableOpacity style={{//backgroundColor : 'red', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*500, marginTop : parentWidth/1920*120, marginLeft :parentWidth/1920*900 }}
        onMouseEnter={() => setMouse_3(true)}
        onMouseLeave={() => setMouse_3(false)}
        onPress={() => navigation.navigate('Projects_info')}
        />
        <TouchableOpacity style={{//backgroundColor : 'red', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*750, marginTop : -parentWidth/1920*750, marginLeft :parentWidth/1920*1050 }}
        onMouseEnter={() => setMouse_3(true)}
        onMouseLeave={() => setMouse_3(false)}
        onPress={() => navigation.navigate('Projects_info')}
        />
        <TouchableOpacity style={{//backgroundColor : 'red', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*750, marginTop : -parentWidth/1920*750, marginLeft :parentWidth/1920*1250 }}
        onMouseEnter={() => setMouse_3(true)}
        onMouseLeave={() => setMouse_3(false)}
        onPress={() => navigation.navigate('Projects_info')}
        />

        <TouchableOpacity style={{//backgroundColor : 'blue', 
                                    width : parentWidth/1920*400, height : parentWidth/1920*900, marginTop : -parentWidth/1920*900, marginLeft :parentWidth/1920*1500 }}
        onMouseEnter={() => setMouse_4(true)}
        onMouseLeave={() => setMouse_4(false)}
        onPress={() => navigation.navigate('Career')}
        />

        <TouchableOpacity style={{//backgroundColor : 'blue', 
                                    width : parentWidth/1920*200, height : parentWidth/1920*600, marginTop : -parentWidth/1920*900, marginLeft :parentWidth/1920*1430 }}
        onMouseEnter={() => setMouse_4(true)}
        onMouseLeave={() => setMouse_4(false)}
        onPress={() => navigation.navigate('Career')}
        />
        
                
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