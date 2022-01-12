// Aboutme screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const Aboutme = ({navigation}) => {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

    return (
        <ScrollView>
            <View style={styles.large_container} onLayout={onLayout}>
                
                <TouchableOpacity>
                <Image
                style={{height:wp('100%')/6 , width: wp('100%')/6/10*7.78,marginBottom : 50,}}
                source={require('../image/self_image.png')}
                />
                </TouchableOpacity>

                <Image
                    style={{ width: parentWidth*0.8, height:parentWidth*0.8/67.2*12.3 ,}}
                    source={require('../image/aboutme_info.png')}
                />
            </View>
        </ScrollView>
    )

}


const styles = StyleSheet.create({
    large_container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor : 'green',
        //height : hp('100%'),
        //flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('5%'),
        marginBottom : wp('1%'),
    }, 

});

export default Aboutme;