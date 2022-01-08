// Profile screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';

const Profile = ({navigation}) => {
        return (
        
        <View style={styles.container}>
            <View style={styles.left_large_box}>
                <TouchableOpacity>
                <View style={styles.box_1}>
                    <Text>1</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.box_2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Aboutme')}>
                    <View style={styles.box_2_1}>
                        <Text>2_1</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Skills')}>
                    <View style={styles.box_2_2}>
                        <Text>2_2</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.right_large_box}>
                <TouchableOpacity onPress={() => navigation.navigate('Card')}> 
                <View style={styles.box_3} >
                    <Text>3</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Snap')}>
                <View style={styles.box_4}>
                    <Text>4</Text>
                </View>
                </TouchableOpacity>
            </View>
            
            

        </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor : 'red',
        height : hp('100%'),
        flexDirection : 'row',
        marginLeft : wp('5%'),
        marginRight : wp('5%'),
        marginTop : wp('1%'),
        marginBottom : wp('1%'),
    }, 
    left_large_box : {
        //backgroundColor : 'black',
        //alignItems : 'center',
        justifyContent : 'space-between',
        flex:27.4,
        borderRadius : 20,
        marginRight : wp('1%'),
    },
    right_large_box : {
        //backgroundColor : 'yellow',
        //alignItems : 'center',
        justifyContent : 'space-between',
        flex:15,
        borderRadius : 20,
    },
    box_1 : {
        backgroundColor : '#333F50',
        alignItems : 'center',
        justifyContent : 'center',
        
        height : hp('58%'),
        borderRadius : 20,
    },
    box_2 : {
        //backgroundColor : 'green',
        //alignItems : 'center',
        justifyContent : 'space-between',
        //flex:10,
        height : hp('27%'),
        borderRadius : 20,
        flexDirection : 'row',
    },

    box_2_1 : {
        backgroundColor : '#ADB9CA',
        alignItems : 'center',
        justifyContent : 'center',
        flex:50,
        width : wp('37.3%'),
        height : 100,
        borderRadius : 20,
    },
    box_2_2 : {
        backgroundColor : '#FFD966',
        alignItems : 'center',
        justifyContent : 'center',
        flex:1,
        width : wp('19%'),
        borderRadius : 20,
    },

    box_3 : {
        backgroundColor : '#A9D18E',
        alignItems : 'center',
        justifyContent : 'center',
        //flex:1,
        height : hp('38%'),
        borderRadius : 20,
    },
    box_4 : {
        backgroundColor : '#F4B183',
        alignItems : 'center',
        justifyContent : 'center',
        //flex:1,
        height : hp('47%'),
        borderRadius : 20,
    },
    
      

});

export default Profile;