// Aboutme screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';

const Aboutme = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.large_container}>
                
                <TouchableOpacity>
                <Image
                style={{height:wp('100%')/6 , width: wp('100%')/6/10*7.78,marginBottom : 40,}}
                source={require('../image/self_image.png')}
                />
                </TouchableOpacity>

                <Image
                    style={{ width: wp('60%'), height:wp('60%')/58.6*12 ,}}
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