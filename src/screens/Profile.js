// Profile screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Snowflakes from 'react-native-snowflakes';
import { useState, useEffect } from 'react';
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

const Profile = ({navigation}) => {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };
        return (
        
        <View style={styles.container} onLayout={onLayout}>
        <View style={{width: parentWidth, height : parentWidth/2, flexDirection : 'row'}}>    
            <View style={styles.left_large_box}>
                
               
                <TouchableOpacity style={styles.box_1}>
                <Snowflakes
                numberOfSnowflakes={50}
                />
                   
                    <Text>1</Text>
                    <Animatable.Text animation="bounce" iterationCount={5}>Zoom11 me up, Scotty</Animatable.Text>
                    <Animatable.Text animation="pulse" iterationCount={5} >Up and down you go</Animatable.Text>
                    
                </TouchableOpacity>
                

                

                
                <View style={styles.box_2}>
                    <TouchableOpacity style={styles.box_2_1} onPress={() => navigation.navigate('Aboutme')}>
                    
                        <Text>2_1</Text>
                    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box_2_2} onPress={() => navigation.navigate('Skills')}>
                    
                        <Text>2_2</Text>
                    
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.right_large_box}>
                <TouchableOpacity  style={styles.box_3} onPress={() => navigation.navigate('Career')}> 
                
                    <Text>3</Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.box_4} onPress={() => navigation.navigate('Projects_info')}>
                
                    <Text>4</Text>
                
                </TouchableOpacity>
            </View>
            
            
        </View>
        </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor : 'red',
        //height : hp('100%'),
        flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('1%'),
        marginBottom : wp('1%'),
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