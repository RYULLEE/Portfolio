// Skills screen

import React from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';



const Skills = ({navigation},) => {

    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

    
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const [isModalVisible2, setModalVisible2] = useState(false);
  
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };

    const [isModalVisible3, setModalVisible3] = useState(false);
  
    const toggleModal3 = () => {
      setModalVisible3(!isModalVisible3);
    };

    const [isModalVisible4, setModalVisible4] = useState(false);
  
    const toggleModal4 = () => {
      setModalVisible4(!isModalVisible4);
    };

    return (
            <View style={styles.container_1} onLayout={onLayout}>
            <View style={{width: parentWidth, height : parentWidth/2,backgroundColor : '#FFD966' }}>  
            <View style={styles.large_container}>
                
                <View style={styles.left_box}>
                    <TouchableOpacity style={styles.box_1}  onPress={toggleModal}>
                        
                            
                            <Animatable.Text animation="pulse" iterationCount={100} 
                            style={{fontFamily: 'NotoSansKR_900Black ',
                                    includeFontPadding: false,
                                    lineHeight: 20,
                                    fontSize: parentWidth/40,
                                    //marginBottom: 40,
                                    marginTop: parentWidth/50,}} >Front-end</Animatable.Text>
                            <Modal isVisible={isModalVisible}>
                                <View style={{ flex: 0.5, borderRadius : 20, alignItems : 'center', justifyContent : 'space-evenly'}}>
                                    <Text style={styles.modal_text}>
                                        ??????????????? HTML, JavaScript, Css ??? ???????????????, 
                                        ios, android ?????? ????????? ????????? react-native??? ?????? ??????????????????.
                                    </Text>

                                <Button title="back" onPress={toggleModal} />
                                </View>
                            </Modal>
                            <Image
                                style={{  width : parentWidth/2.3*0.6,height : parentWidth/2.3*0.6/20*7.58 , marginTop : parentWidth/50,}}
                                source={require('../image/html.png')}
                            />
                            <Image
                                style={{  width : parentWidth/2.3*0.6,height : parentWidth/2.3*0.6/10*3.45 }}
                                source={require('../image/react_native.png')}
                            />
                            

                            
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box_2} onPress={toggleModal2}>
                    
                        <Animatable.Text animation="pulse" iterationCount={100} 
                                    style={{fontFamily: 'NotoSansKR_900Black ',
                                    includeFontPadding: false,
                                    lineHeight: 20,
                                    fontSize: parentWidth/40,
                                    //marginBottom: 40,
                                    marginTop: parentWidth/50,}} >Communication</Animatable.Text>

                        <Modal isVisible={isModalVisible2}>
                                <View style={{ flex: 0.5, borderRadius : 20, alignItems : 'center', justifyContent : 'space-evenly'}}>
                                    <Text style={styles.modal_text}>
                                        ????????? ?????? tool?????? ???????????? Adobe XD??? ??????, ???????????? Figma??? ?????????????????????. {"\n"}
                                        ????????? ????????? ??????????????? ?????? Notion??? ??????????????????. 
                                    </Text>

                                <Button title="back" onPress={toggleModal2} />
                                </View>
                        </Modal>

                        <Image
                            style={{  width : parentWidth/2.3*0.6,height : parentWidth/2.3*0.6/10*1.74,marginTop : parentWidth/50, }}
                            source={require('../image/communication.png')}
                        />

                    
                    </TouchableOpacity>
                </View>

                <View style={styles.right_box}>
                    <TouchableOpacity style={styles.box_3} onPress={toggleModal3}>
                        
                        <Animatable.Text animation="pulse" iterationCount={100} 
                                    style={{fontFamily: 'NotoSansKR_900Black ',
                                    includeFontPadding: false,
                                    lineHeight: 20,
                                    fontSize: parentWidth/40,
                                    //marginBottom: 40,
                                    marginTop: parentWidth/50,}} >Back-end</Animatable.Text>

                            <Modal isVisible={isModalVisible3}>
                                <View style={{ flex: 0.5, borderRadius : 20, alignItems : 'center', justifyContent : 'space-evenly'}}>
                                    <Text style={styles.modal_text}>
                                        Back-End?????? Google FireBase?????? ???????????? ?????? ????????? ?????? Authentication, {'\n'}???????????? ??????????????? ?????????????????? DataBase, ?????? ????????? ????????? ?????? Storage ????????? ??????????????????.  
                                    </Text>

                                <Button title="back" onPress={toggleModal3} />
                                </View>
                            </Modal>

                            <Image
                                style={{  width : parentWidth/2.3*0.4,height : parentWidth/2.3*0.4/10*2.77,marginTop : parentWidth/50, }}
                                source={require('../image/firebase.png')}
                            />

                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box_4} onPress={toggleModal4}>
                        
                            
                        <Animatable.Text animation="pulse" iterationCount={100} 
                                    style={{fontFamily: 'NotoSansKR_900Black ',
                                    includeFontPadding: false,
                                    lineHeight: 20,
                                    fontSize: parentWidth/40,
                                    //marginBottom: 40,
                                    marginTop: parentWidth/50,}} >Others</Animatable.Text>

                            <Modal isVisible={isModalVisible4}>
                                <View style={{ flex: 0.5, borderRadius : 20, alignItems : 'center', justifyContent : 'space-evenly'}}>
                                    <Text style={styles.modal_text}>
                                        ?????? ?????????????????????????????? ???????????? ?????? python?????? ?????? ?????????, ?????? Machine Learning??? ??????????????? ?????? ??????????????? ?????? ???????????? ???????????? ?????? ???????????????. {'\n'}
                                        ????????? ?????? ?????? ????????????????????? git??? github??? ???????????????, ?????? ???????????? netflify??? ??????????????????. 
                                    </Text>

                                <Button title="back" onPress={toggleModal4} />
                                </View>
                            </Modal>

                            <Image
                                style={{  width : parentWidth/3*0.3,height : parentWidth/3*0.3/10*3.25,marginTop : parentWidth/50, }}
                                source={require('../image/python.png')}
                            />
                            <Image
                                style={{  width : parentWidth/3*0.3,height : parentWidth/3*0.3/10*3.4,marginTop : parentWidth/50, }}
                                source={require('../image/git.png')}
                            />
                            <Image
                                style={{  width : parentWidth/3*0.3,height : parentWidth/3*0.3/10*2.95,marginTop : parentWidth/50, }}
                                source={require('../image/github.png')}
                            />
                            <Image
                                style={{  width : parentWidth/3*0.3,height : parentWidth/3*0.3/10*2.72,marginTop : parentWidth/50, }}
                                source={require('../image/netflify.png')}
                            />
                        
                    </TouchableOpacity>
                </View>


            </View>
            </View>
            </View>
    )

}


const styles = StyleSheet.create({
    large_container: {
        flex:1,
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
    }, 
    container_1 : {
        flex : 1,
        
    },

    left_box : {
        flex : 1,
        justifyContent : 'flex-between',
        //alignItems : 'center',
        backgroundColor : '#FFD966',
        marginRight : wp('5%'),
    },

    right_box : {
        flex : 1,
        //justifyContent : 'center',
        //alignItems : 'center',
        backgroundColor : '#FFD966',
    },

    box_1 : {
        flex: 2,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        marginBottom : wp('5%'),
        borderRadius : 15,
    },
    box_2 : {
        flex: 1,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 15,
        //marginTop : wp('5%'),
    },

    box_3 : {
        flex: 1,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        marginBottom : wp('5%'),
        borderRadius : 15,
    },
    box_4 : {
        flex: 2.4,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 15,
    },
    subtitle : {
        
        fontFamily: 'NotoSansKR_900Black ',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 25,
        //marginBottom: 40,
        marginTop: 20,
          
    },

    modal_text : {
        
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 50,
        fontSize: 25,
        //marginBottom: 40,
        marginTop: 20,
        color : 'white',
          
    },

});

export default Skills;