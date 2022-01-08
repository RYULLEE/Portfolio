// Skills screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';

const Skills = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.large_container}>
                

                <Text>1111111111111</Text>

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

export default Skills;