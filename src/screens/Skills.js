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
                                        기본적으로 HTML, JavaScript, Css 를 공부하였고, 
                                        ios, android 앱을 동시에 만드는 react-native를 주로 사용했습니다.
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
                                        디자인 협업 tool로는 처음에는 Adobe XD를 썼고, 최근에는 Figma를 사용하였습니다. {"\n"}
                                        그리고 소통과 업무정리는 주로 Notion을 이용했습니다. 
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
                                        Back-End로는 Google FireBase에서 로그인과 유저 관리를 위한 Authentication, {'\n'}이미지와 텍스트들을 업데이트하는 DataBase, 파일 업로드 기능을 위한 Storage 항목을 이용했습니다.  
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
                                        학교 시스템프로그래밍등의 과목에서 이미 python등을 많이 써왔고, 평소 Machine Learning과 알고리즘에 관한 프로젝트를 많이 진행하여 파이썬은 매우 익숙합니다. {'\n'}
                                        그리고 버전 관리 프로그램으로는 git과 github를 사용하였고, 서버 배포로는 netflify를 사용했습니다. 
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